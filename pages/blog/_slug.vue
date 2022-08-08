<template>
  <div
    class="container pb-12 md:pb-20 lg:pb-28 prose dark:prose-invert max-w-[43.75rem] mx-auto"
  >
    <h1>{{ article.title }}</h1>
    <img :src="coverImage" />
    <div v-for="block in content" :key="block">
      <div v-html="addTargetBlankToLinks(block)"></div>
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
  methods: {
    addTargetBlankToLinks(html) {
      if (typeof html === 'string') {
        return html.replace(/href/g, "target='_blank' href")
      } else {
        return html
      }
    },
  },
  head() {
    return {
      title: this.article.title,
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
          content: this.article.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.excerpt,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: process.env.baseUrl + this.article.cover.data.attributes.url,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.article.cover.data.attributes.alternativeText,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@Umee_CrossChain',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.excerpt,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: process.env.baseUrl + this.article.cover.data.attributes.url,
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
