<template>
  <div>
    <div class="container pb-20">
      <Posts :posts="posts"></Posts>
    </div>
  </div>
</template>

<script>
// import categoriesQuery from '../apollo/queries/category/categories'
import postsQuery from '../apollo/queries/post/posts'

export default {
  data() {
    return {
      categories: [],
      posts: [],
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postsQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) }
      },
    },
  },
}
</script>
