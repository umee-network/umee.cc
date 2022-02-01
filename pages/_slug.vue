<template>
  <div class="container pb-12 md:pb-20 lg:pb-28">
    <img
      v-if="page.header_image"
      :src="page.header_image"
      class="w-full h-auto mb-8 md:mb-16 rounded-xl"
    />

    <div v-if="page.date">
      <UIBlockTitle class="mb-6">{{ formatDate(page.date) }}</UIBlockTitle>
    </div>

    <div class="prose dark:text-white dark:prose-dark md:prose-lg lg:prose-xl">
      <h1 class="mb-6">{{ page.title }}</h1>
    </div>
    <div class="grid grid-cols-3 gap-12">
      <div
        class="col-span-3 md:col-span-2"
        :class="page.toc.length ? 'md:border-r md:border-midGrey md:pr-12' : ''"
      >
        <div
          class="prose prose-img:rounded-xl dark:text-white dark:prose-dark md:prose-lg lg:prose-xl prose-p:first-child:mt-0"
        >
          <nuxt-content ref="nuxtContent" :document="page" />
        </div>
      </div>
      <div v-if="page.toc.length" class="hidden md:block col-span-1 pt-7">
        <nav class="sticky top-0">
          <ul>
            <div class="uppercase text-xs tracking-widest inline-block mb-6">
              On this page:
            </div>
            <li
              v-for="link of page.toc"
              :key="link.id"
              @click="tableOfContentsHeadingClick(link)"
            >
              <NuxtLink
                class="block text-xl mb-4"
                :class="{
                  'text-navy dark:text-white font-bold':
                    link.id === currentlyActiveToc,
                  'text-midGreyOnNavy': link.id !== currentlyActiveToc,
                }"
                :to="`#${link.id}`"
                >{{ link.text }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(`pages/${params.slug}`).fetch()
    return { page }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id
    },
  },
  data() {
    return {
      currentlyActiveToc: '',
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id
        }
      })
    }, this.observerOptions)

    // Track all sections that have an `id` applied
    document
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach((section) => {
        this.observer.observe(section)
      })
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
}
</script>
