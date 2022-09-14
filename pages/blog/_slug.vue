<template>
  <div
    class="container pb-12 md:pb-20 lg:pb-28 prose prose-headings:font-sans prose-headings:font-normal dark:prose-invert max-w-[43.75rem] mx-auto"
  >
    <h1>{{ article.title }}</h1>
    <img v-if="!article.hide_cover_image" :src="coverImage" />
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
      title:
        this.article.seo_title === '' || !this.article.seo_title
          ? this.article.title + `  - Umee - Cross the Defi Waves`
          : this.article.seo_title + `  - Umee - Cross the Defi Waves`,
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
              ? this.article.title + `  - Umee - Cross the Defi Waves`
              : this.article.seo_title + `  - Umee - Cross the Defi Waves`,
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
