<template>
  <div class="container pb-20">
    <BlogCategories />
    <BlogPosts :posts="postsResults" />
    <div class="flex justify-between mt-12 pt-6 border-t border-midGrey">
      <nuxt-link v-if="this.page > 1" :to="`/blog/page/${parseInt(page) - 1}`"
        ><SVGArrow class="mr-2 rotate-90 scale-90" /> Newer posts</nuxt-link
      >
      <div v-else />
      <nuxt-link
        v-if="this.page < this.pageCount"
        :to="`/blog/page/${parseInt(page) + 1}`"
        >Older posts <SVGArrow class="ml-2 -rotate-90 scale-90"
      /></nuxt-link>
      <div v-else />
    </div>
  </div>
</template>

<script>
import postsQuery from '~/apollo/queries/post/posts'

const pageSize = 12

export default {
  data() {
    return {
      page: 1,
      postsResults: [],
    }
  },
  async asyncData({ $graphql, params }) {
    const postsData = await $graphql.default.request(postsQuery, {
      page: parseInt(params.number),
      pageSize: pageSize,
    })
    return {
      page: parseInt(params.number),
      pageCount: postsData.posts.meta.pagination.pageCount,
      postsResults: postsData.posts.data,
    }
  },
}
</script>
