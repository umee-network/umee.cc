const {
  MAILCHIMP_API_KEY,
  MAILCHIMP_SERVER_PREFIX,
  MAILCHIMP_LIST_ID,
  MAILCHIMP_DIGEST_TEMPLATE_ID,
} = process.env
const { schedule } = require('@netlify/functions')
const mailchimp = require('@mailchimp/mailchimp_marketing')
let emailHTML = ''

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX,
})

const postTemplate = (title, excerpt, image, date, slug) => {
  return `<table mc:repeatable border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              	<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

				<!--[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:36px; padding-left:18px;">
                            <a href="https://umee.cc/blog/${slug}"><img src="${image}" style="max-width: 100%; width: 100%; height:auto;" alt=""/></a>
                            <h1><a href="https://umee.cc/blog/${slug}">${title}</a></h1>
                            <div><p>${excerpt}</p></div>
                            <div class="mcnDate">${date}</div>
                        </td>
                    </tr>
                </tbody></table>
				<!--[if mso]>
				</td>
				<![endif]-->

				<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
            </td>
        </tr>
    </tbody>
</table>`
}

const Strapi = require('strapi-sdk-js')

const handler = async function (event, context) {
  try {
    const strapi = new Strapi({
      url: 'https://strapi-umee.herokuapp.com',
      prefix: '/api',
      store: {
        key: 'strapi_jwt',
        useLocalStorage: false,
        cookieOptions: { path: '/' },
      },
      axiosOptions: {},
    })

    var date = new Date()
    date.setDate(date.getDate() - 60)

    // fetch posts
    const posts = await strapi.find('posts', {
      filters: {
        ['published_date']: {
          $gt: date.toISOString().slice(0, 10),
        },
      },
      fields: ['title', 'published_date', 'excerpt', 'slug'],
      populate: ['cover'],
    })

    posts.data.forEach((post) => {
      const formattedDate = new Date(
        post.attributes.published_date
      ).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'utc',
      })

      emailHTML += postTemplate(
        post.attributes.title,
        post.attributes.excerpt,
        post.attributes.cover.data.attributes.url,
        formattedDate,
        post.attributes.slug
      )
    })

    // create new mailchimp campaign
    async function createCampaign() {
      const now = new Date().toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'utc',
      })

      const response = await mailchimp.campaigns.create({
        type: 'regular',
        recipients: {
          list_id: MAILCHIMP_LIST_ID,
        },
        settings: {
          subject_line: 'The latest from the Umee blog',
          preview_text:
            'Important updates, educational content, and community events from Umee',
          title: `Email digest - ${now}`,
        },
        content_type: 'template',
      })

      return response.id
    }

    const campaignID = await createCampaign()

    // set content for campaign
    const response = await mailchimp.campaigns.setContent(campaignID, {
      template: {
        id: parseInt(MAILCHIMP_DIGEST_TEMPLATE_ID),
        sections: {
          content: emailHTML,
        },
      },
    })
  } catch (e) {
    console.log(e)
    throw e
  }
}

module.exports.handler = schedule('@weekly', handler)
