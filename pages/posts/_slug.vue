<template>
  <div
    class="container pb-12 md:pb-20 lg:pb-28 prose dark:prose-invert max-w-[43.75rem] mx-auto"
  >
    <h1>{{ article.title }}</h1>
    <img :src="coverImage" />
    <div v-for="block in content" :key="block">
      <div v-html="block"></div>
    </div>
  </div>
</template>

<script>
import postQuery from '~/apollo/queries/post/post'
var moment = require('moment')
const edjsHTML = require('editorjs-html')

export default {
  data() {
    return {
      moment: moment,
      api_url: process.env.strapiBaseUri,
    }
  },
  computed: {
    content() {
      const articleBlocks = JSON.parse(this.posts.data[0].attributes.content)
      const edjsParser = edjsHTML()
      const html = edjsParser.parse(articleBlocks)
      console.log(html)
      return html
    },
    article() {
      return this.posts.data[0].attributes
    },
    coverImage() {
      return this.posts.data[0].attributes.cover.data.attributes.url
    },
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postQuery,
      variables() {
        return { slug: this.$route.params.slug }
      },
    },
  },
}
</script>
