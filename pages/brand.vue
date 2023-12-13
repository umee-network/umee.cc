<template>
  <div>
    <div class="container pb-8 md:pb-20">
      <SVGWaveBackground class="mb-8"
        ><SVGBrandHero
          ><div
            class="absolute left-0 right-0 text-center -bottom-[12rem] text-[2rem] md:absolute md:-bottom-[4.5rem] md:translate-x-0 md:left-auto md:right-0 md:text-xxl font-serif"
          >
            (and how to use it...)
          </div></SVGBrandHero
        ></SVGWaveBackground
      >

      <div
        class="adora hidden relative left-[3rem] lg:left-1/2 lg:-translate-x-1/2 md:block md:w-[217px] md:mt-[-180px] lg:w-[293px] lg:mt-[-180px] xl:w-[311px] xl:mt-[-240px]"
      >
        <SVGAdoraBrandHero></SVGAdoraBrandHero>
      </div>

      <NuxtLink :to="{ path: '/brand', hash: 'sectionOurBrand' }">
        <UIDiscoverMore
          class="hidden md:block"
          text="Explore our brand"
        ></UIDiscoverMore>
      </NuxtLink>
    </div>

    <div class="relative">
      <div
        class="hidden md:block absolute top-0 bottom-0 left-0 right-0 pointer-events-none"
      >
        <div class="container pt-16 md:pt-28 h-full">
          <div class="w-1/3 pr-12 h-full">
            <ul
              class="rounded-xl bg-white p-8 text-midGreyOnWhite text-xl sticky top-6 drop-shadow-md pointer-events-auto"
            >
              <li v-for="(section, index) in sections" :key="index">
                <NuxtLink
                  :to="{ path: '/brand', hash: section.hash }"
                  class="py-1.5 inline-block hover:font-bold hover:text-navy"
                  :class="{
                    'font-bold text-navy': section.hash === currentlyActiveToc,
                  }"
                  >{{ section.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div ref="brandSections">
        <BrandIntro />
        <BrandLogo />
        <BrandColor />
        <BrandTypography />
        <BrandAdora />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  colorMode: 'light',
  async asyncData({ $content }) {
    const page = await $content('pages/home').fetch()
    return { page }
  },
  computed: {
    personalityDiagram() {
      const src = require(`assets/images/brand-personality.svg`)
      return src
    },
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
        root: this.$refs.brandSections,
        threshold: 0.1,
      },
      sections: [
        {
          name: 'Our brand',
          hash: 'sectionOurBrand',
        },
        {
          name: 'Logo',
          hash: 'sectionLogo',
        },
        {
          name: 'Color',
          hash: 'sectionColor',
        },
        {
          name: 'Typography',
          hash: 'sectionTypography',
        },
        {
          name: 'Adora',
          hash: 'sectionAdora',
        },
      ],
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

    document.querySelectorAll("[id^='section']").forEach((section) => {
      this.observer.observe(section)
    })
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
  head() {
    const title = 'UX Chain: Brand Guidelines'
    const description =
      "Stay true to our brand guidelines. Our brand is more than just a logo or a color scheme - it's a promise to our community and a reflection of our values. We've created this handy guide for anyone to find our brand assets and feel confident using them. Go explore!"
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
