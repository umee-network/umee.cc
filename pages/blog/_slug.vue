<template>
  <div
    class="container pt-20 md:pt-40 pb-12 md:pb-20 lg:pb-28 prose prose-headings:font-sans prose-headings:font-normal prose-a:text-[#433d55] dark:prose-a:text-[#ffffff] hover:prose-a:no-underline dark:prose-invert max-w-[48rem] mx-auto"
  >
    <UIBlockTitle class="mb-6 !text-xs">{{
      formatDate(article.published_date)
    }}</UIBlockTitle>
    <h1 class="mb-8 mt-0">{{ article.title }}</h1>
    <div class="text-lg mb-3 md:pr-10">{{ article.excerpt }}</div>
    <div
      class="text-[1.0625rem font-normal pb-3 border-b border-midGrey md:flex md:items-center md:justify-between"
    >
      <div>
        By {{ article.author.data.attributes.name
        }}<span v-if="article.author.data.attributes.position"
          >, {{ article.author.data.attributes.position }}</span
        >
      </div>
      <div class="mt-3 md:mt-0">
        <span class="pr-3"> Share: </span>
        <BlogShareIcon
          network="twitter"
          :url="'https://ux.xyz/blog/' + article.slug"
          :title="article.title"
          :description="article.excerpt"
        >
          <SVGSocialIcon name="twitter" />
        </BlogShareIcon>

        <BlogShareIcon
          network="facebook"
          :url="'https://ux.xyz/blog/' + article.slug"
          :title="article.title"
          :description="article.excerpt"
          ><SVGSocialIcon name="facebook" />
        </BlogShareIcon>

        <BlogShareIcon
          network="linkedin"
          :url="'https://ux.xyz/blog/' + article.slug"
          :title="article.title"
          :description="article.excerpt"
          ><SVGSocialIcon name="linkedin" />
        </BlogShareIcon>
      </div>
    </div>

    <img v-if="!article.hide_cover_image" :src="coverImage" />
    <div v-for="block in content" :key="block">
      <div v-html="addTargetBlankToLinks(block)"></div>
    </div>
    <BlogStructuredData
      :headline="this.article.title"
      :description="this.article.excerpt"
      :image="this.article.cover.data.attributes.url"
      :datePublished="article.published_date"
      :dateModified="article.updatedAt"
      :authorName="article.author.data.attributes.name"
      :authorUrl="article.author.data.attributes.url"
    />
    <div
      class="text-[1.0625rem font-normal pt-3 mt-12 border-t border-midGrey md:flex md:items-center md:justify-end"
    >
      <div class="mt-3 md:mt-0">
        <span class="pr-3"> Share: </span>
        <BlogShareIcon
          network="twitter"
          :url="'https://ux.xyz/blog/' + article.slug"
          :title="article.title"
          :description="article.excerpt"
        >
          <SVGSocialIcon name="twitter" />
        </BlogShareIcon>

        <BlogShareIcon
          network="facebook"
          :url="'https://ux.xyz/blog/' + article.slug"
          :title="article.title"
          :description="article.excerpt"
          ><SVGSocialIcon name="facebook" />
        </BlogShareIcon>

        <BlogShareIcon
          network="linkedin"
          :url="'https://ux.xyz/blog/' + article.slug"
          :title="article.title"
          :description="article.excerpt"
          ><SVGSocialIcon name="linkedin" />
        </BlogShareIcon>
      </div>
    </div>
  </div>
</template>

<script>
import postQuery from '~/apollo/queries/post/post'
const edjsHTML = require('editorjs-html')

export default {
  async asyncData({ $graphql, params }) {
    const articleResult = await $graphql.default.request(postQuery, {
      slug: params.slug,
    })
    const articleBlocks = JSON.parse(
      articleResult.posts.data[0].attributes.content
    )
    const edjsParser = edjsHTML()
    const html = edjsParser.parse(articleBlocks)

    return {
      coverImage:
        articleResult.posts.data[0].attributes.cover.data.attributes.url,
      article: articleResult.posts.data[0].attributes,
      content: html,
    }
  },
  mounted() {
    this.$el.querySelectorAll('iframe').forEach((iframe) => {
      iframe.classList.add('responsive-video-iframe')
      iframe.parentElement.classList.add('responsive-video')
    })
  },
  computed: {
    socialIcon() {
      const src = require(`assets/images/logo-social-twitter.svg?raw`)
      return src
    },
  },
  methods: {
    addTargetBlankToLinks(html) {
      if (typeof html === 'string') {
        return html.replace(/href/g, "target='_blank' href")
      } else {
        return html
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title:
        this.article.seo_title === '' || !this.article.seo_title
          ? this.article.title + `  - UX - Cross the Defi Waves`
          : this.article.seo_title + `  - UX - Cross the Defi Waves`,
      meta: [
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:published_time',
          name: 'og:published_time',
          content: this.article.published_date,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.article.seo_title === '' || !this.article.seo_title
              ? this.article.title + `  - UX - Cross the Defi Waves`
              : this.article.seo_title + `  - UX - Cross the Defi Waves`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.excerpt,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.article.cover.data.attributes.url,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.article.cover.data.attributes.alternativeText,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@ux_xyz',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.excerpt,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.article.cover.data.attributes.url,
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: this.article.cover.data.attributes.alternativeText,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.article.excerpt,
        },
      ],
    }
  },
}
</script>
