<template>
  <div class="container pb-20">
    <BlogCategories />
    <BlogPosts :posts="postsResults" />
    <div class="flex justify-between mt-12 pt-6 border-t border-midGrey">
      <div></div>
      <nuxt-link :to="`/blog/page/${parseInt(page) + 1}`"
        >Older posts <SVGArrow class="ml-2 -rotate-90 scale-90"
      /></nuxt-link>
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
      page: 1,
      pageSize: pageSize,
    })
    return {
      pageCount: postsData.posts.meta.pagination.pageCount,
      postsResults: postsData.posts.data,
    }
  },
  head() {
    const title = 'Umee: Blog'
    const description =
      'Stay up-to-date with our blog! We cover a range of topics, from ecosystem news and trends to tips and advice. Visit our blog regularly to read the latest posts!'
    return {
      title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    }
  },
}
</script>
