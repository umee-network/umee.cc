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
              <li><a class="py-1.5 inline-block">Our brand</a></li>
              <li><a class="py-1.5 inline-block">Logo</a></li>
              <li><a class="py-1.5 inline-block">Color</a></li>
              <li><a class="py-1.5 inline-block">Typography</a></li>
              <li><a class="py-1.5 inline-block">"Adora"</a></li>
            </ul>
          </div>
        </div>
      </div>

      <BrandIntro />
      <BrandLogo />
      <BrandColor />
      <BrandTypography />
      <BrandAdora />
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
}
</script>
