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
}
</script>
