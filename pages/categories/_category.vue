<template>
  <div>
    <div class="container pb-20">
      <BlogCategories />
      <BlogPosts :posts="postsResults" />
      <div class="flex justify-between mt-12 pt-6 border-t border-midGrey">
        <nuxt-link
          v-if="this.page > 1"
          :to="`/categories/${slug}/page/${parseInt(page) - 1}`"
          ><SVGArrow class="mr-2 rotate-90 scale-90" /> Newer posts
        </nuxt-link>
        <div v-else />
        <nuxt-link
          v-if="this.page < this.pageCount"
          :to="`/categories/${slug}/page/${parseInt(page) + 1}`"
          >Older posts <SVGArrow class="ml-2 -rotate-90 scale-90"
        /></nuxt-link>
        <div v-else />
      </div>
    </div>
  </div>
</template>

<script>
import categoryQuery from '~/apollo/queries/post/posts-categories'
const pageSize = 12

export default {
  data() {
    return {
      page: 1,
      slug: '',
      postsResults: [],
    }
  },
  async asyncData({ $graphql, params }) {
    const categoriesData = await $graphql.default.request(categoryQuery, {
      page: 1,
      slug: params.category,
      pageSize: pageSize,
    })
    return {
      slug: params.category,
      page: 1,
      pageCount: categoriesData.posts.meta.pagination.pageCount,
      postsResults: categoriesData.posts.data,
    }
  },
}
</script>
