const mailchimp = require('@mailchimp/mailchimp_marketing')
const crypto = require('crypto')

exports.handler = async function (event, context) {
  const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID } =
    process.env

  mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER_PREFIX,
  })

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
  }

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
    }
  }
  const { email } = JSON.parse(event.body)
  const subscriberHash = crypto.createHash('md5').update(email).digest('hex')
  try {
    const response = await mailchimp.lists.setListMember(
      MAILCHIMP_LIST_ID,
      subscriberHash,
      {
        email_address: email,
        status_if_new: 'pending',
      },
      { skipMergeValidation: true }
    )
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        subscription_status: response.status,
        email: response.email_address,
      }),
    }
  } catch (e) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'error',
        error: e.response.body.title,
      }),
    }
  }
}
