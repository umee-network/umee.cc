<template>
  <div>
    <div class="container pb-20">
      <BlogCategories />
      <BlogPosts :posts="postsResults" />
      <div class="flex justify-between mt-12 pt-6 border-t border-midGrey">
        <nuxt-link
          v-if="this.page > 1"
          :to="`/categories/${slug}/page/${parseInt(page) - 1}`"
          >Newer posts</nuxt-link
        >
        <div v-else />
        <nuxt-link
          v-if="this.page < postsResults.meta.pagination.pageCount"
          :to="`/categories/${slug}/page/${parseInt(page) + 1}`"
          >Older posts</nuxt-link
        >
        <div v-else />
      </div>
    </div>
  </div>
</template>

<script>
import categoryQuery from '~/apollo/queries/post/posts-categories'
const pageSize = 12

export default {
  async asyncData({ app, route }) {
    const categories = await app.apolloProvider.defaultClient.query({
      query: categoryQuery,
      variables: {
        slug: route.params.slug,
        page: parseInt(route.params.number),
        pageSize: pageSize,
      },
    })
    return {
      page: route.params.number,
      slug: route.params.slug,
      postsResults: categories.data.posts,
    }
  },
}
</script>
