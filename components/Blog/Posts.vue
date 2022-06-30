<template>
  <div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-8 lg:gap-y-12"
    >
      <nuxt-link
        v-for="post in posts"
        :to="{ name: 'posts-slug', params: { slug: post.attributes.slug } }"
        :key="post.id"
        class="flex flex-col justify-between gap-4"
      >
        <div>
          <div
            class="w-full pb-[56.25%] bg-center bg-cover mb-3"
            :style="`background-image: url(${post.attributes.cover.data.attributes.url})`"
          ></div>
          <h2 class="text-[1.5rem] font-sans font-light leading-tight mb-2">
            {{ post.attributes.title }}
          </h2>

          <div
            class="inline-block mr-2 uppercase text-xs tracking-widest border-b-[2px] border-gradient"
            :key="index"
            v-for="(cat, index) in post.attributes.categories.data"
          >
            <div>{{ cat.attributes.name }}</div>
          </div>

          <div class="prose text-midGreyOnNavy mt-3">
            {{
              (post.attributes.excerpt ? post.attributes.excerpt : '')
                | truncate(20)
            }}
          </div>
        </div>
        <div class="uppercase tracking-widest text-xs">
          {{ $moment(post.attributes.published_date).format('LL') }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri,
    }
  },
  props: {
    posts: [],
  },
}
</script>
