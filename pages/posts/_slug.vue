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
  async asyncData({ app, route }) {
    const articleResult = await app.apolloProvider.defaultClient.query({
      query: postQuery,
      variables: {
        slug: route.params.slug,
      },
    })

    const articleBlocks = JSON.parse(
      articleResult.data.posts.data[0].attributes.content
    )
    const edjsParser = edjsHTML()
    const html = edjsParser.parse(articleBlocks)

    return {
      coverImage:
        articleResult.data.posts.data[0].attributes.cover.data.attributes.url,
      article: articleResult.data.posts.data[0].attributes,
      content: html,
    }
  },
}
</script>
