<template>
  <div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 lg:gap-y-12"
    >
      <nuxt-link
        v-for="post in posts"
        :key="post.id"
        :to="{ name: 'blog-slug', params: { slug: post.attributes.slug } }"
        class="flex flex-col justify-between gap-4"
        :class="{
          'md:[&:nth-child(3)]:hidden lg:[&:nth-child(3)]:flex': preview,
        }"
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
            v-for="(cat, index) in post.attributes.categories.data"
            :key="index"
            class="inline-block mr-2 uppercase text-xs tracking-widest border-b-[2px] border-gradient"
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
        <div>
          <BlogDifficulty
            v-if="post.attributes.difficulty.data"
            :difficulty="post.attributes.difficulty.data.attributes.name"
            class="mr-3"
          />
          <div class="uppercase tracking-widest text-xs inline-block">
            {{ $moment(post.attributes.published_date).format('LL') }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    preview: {
      type: Boolean,
      required: false,
    },
    difficulty: {
      type: String,
      default: '',
      required: false,
    },
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri,
    }
  },
  computed: {},
}
</script>
