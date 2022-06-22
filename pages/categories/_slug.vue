<template>
  <div>
    <div class="container pb-20">
      <BlogCategories />
      <BlogPosts :posts="categories.data[0].attributes.posts" />
    </div>
  </div>
</template>

<script>
import categoryQuery from '../../apollo/queries/post/posts-categories'

export default {
  async asyncData({ app, route }) {
    const categories = await app.apolloProvider.defaultClient.query({
      query: categoryQuery,
      variables: {
        slug: route.params.slug,
      },
    })
    return {
      categories: categories.data.categories,
    }
  },
}
</script>
