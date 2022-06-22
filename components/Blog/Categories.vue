<template>
  <div
    class="uppercase text-sm tracking-widest flex gap-x-8 mb-12 border-b border-midGrey"
  >
    <nuxt-link
      to="/blog"
      class="relative -bottom-px py-4 border-transparent border-b-[3px] hover:border-current"
      active-class="border-current"
      >All</nuxt-link
    >
    <nuxt-link
      class="relative -bottom-px py-4 border-transparent border-b-[3px] hover:border-current"
      active-class="border-current"
      :to="{
        name: 'categories-slug',
        params: { slug: category.attributes.slug },
      }"
      v-for="category in categories.data"
      :key="category.id"
    >
      {{ category.attributes.name }}
    </nuxt-link>
  </div>
</template>

<script>
import categoriesQuery from '../../apollo/queries/category/categories'

export default {
  data() {
    return {
      categories: [],
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
  },
}
</script>
