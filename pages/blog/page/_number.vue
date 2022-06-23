<template>
  <div class="container pb-20">
    <BlogCategories />
    <BlogPosts :posts="postsResults.posts" />
    <div class="flex justify-between mt-12 pt-6 border-t border-midGrey">
      <nuxt-link v-if="this.page > 1" :to="`/blog/page/${parseInt(page) - 1}`"
        >Newer posts</nuxt-link
      >
      <div v-else />
      <nuxt-link
        v-if="this.page < postsResults.posts.meta.pagination.pageCount"
        :to="`/blog/page/${parseInt(page) + 1}`"
        >Older posts</nuxt-link
      >
      <div v-else />
    </div>
  </div>
</template>

<script>
import postsQuery from '../../../apollo/queries/post/posts'

const pageSize = 12

export default {
  async asyncData({ app, route }) {
    const posts = await app.apolloProvider.defaultClient.query({
      query: postsQuery,
      variables: {
        page: parseInt(route.params.number),
        pageSize: pageSize,
      },
    })

    return {
      page: route.params.number,
      postsResults: posts.data,
    }
  },
}
</script>
