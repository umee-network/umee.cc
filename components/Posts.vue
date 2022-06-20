<template>
  <div>
    <div
      class="uppercase text-sm tracking-widest flex gap-x-8 mb-12 border-b border-midGrey"
    >
      <nuxt-link
        to="/blog"
        class="relative -bottom-px py-4 border-transparent border-b-[3px] hover:border-current"
        >All</nuxt-link
      >
      <nuxt-link
        class="relative -bottom-px py-4 border-transparent border-b-[3px] hover:border-current"
        to="/"
        v-for="category in categories.data"
        :key="category.id"
      >
        {{ category.attributes.name }}
      </nuxt-link>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-8 lg:gap-y-12"
    >
      <nuxt-link
        v-for="post in posts.data"
        :to="{ name: 'posts-slug', params: { slug: post.attributes.slug } }"
        :key="post.id"
        class="flex flex-col justify-between gap-8"
      >
        <div>
          <div
            class="w-full pb-[56.25%] bg-center bg-cover mb-3"
            :style="`background-image: url(${post.attributes.cover.data.attributes.url})`"
          ></div>
          <h2 class="text-[1.5rem] font-sans font-light leading-tight mb-2">
            {{ post.attributes.title }}
          </h2>
          <div class="prose text-midGreyOnNavy">
            {{
              (post.attributes.excerpt ? post.attributes.excerpt : '')
                | truncate(20)
            }}
          </div>
        </div>
        <div class="uppercase tracking-widest text-xs">
          {{ $moment(post.attributes.published_date).format('LLL') }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import categoriesQuery from '../apollo/queries/category/categories'
export default {
  data() {
    return {
      categories: [],
      api_url: process.env.strapiBaseUri,
    }
  },
  props: {
    posts: Array,
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
  },
}
</script>
