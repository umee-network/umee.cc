<template>
  <div class="container pb-20">
    <BlogCategories />
    <BlogPosts :posts="posts" />
  </div>
</template>

<script>
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
    },
  },
}
</script>
