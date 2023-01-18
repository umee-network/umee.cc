<template>
  <div class="home-screen" data-aos="fade-in">
    <div class="container">
      <SVGWaveBackground class="mb-8">
        <SVGCrossTheWaves />
      </SVGWaveBackground>

      <div class="flex justify-between">
        <div class="text-xl max-width md:max-w-md lg:max-w-xl leading-7">
          <p class="mb-8">
            {{ page.intro_text }}
          </p>
          <p class="mb-12 font-serif text-xxl md:text-xxxl leading-[0.9]">
            <b>{{ page.intro_text_cta }}</b>
          </p>

          <UIButtonGradient
            to="https://app.umee.cc/"
            target="_blank"
            class="md:hidden"
            >Launch App</UIButtonGradient
          >
        </div>
        <div
          data-aos="fade-zoom-in"
          class="adora hidden md:block md:mr-16 md:w-[217px] md:mt-[-120px] lg:w-[248px] lg:mt-[-180px] xl:w-[311px] xl:mt-[-270px]"
        >
          <SVGAdoraHero />
          <img
            src="~/assets/images/adora-hero-shadow.png"
            class="adora-shadow w-full dark:hidden"
          />
        </div>
      </div>

      <NuxtLink :to="{ path: '/', hash: '#security' }">
        <UIDiscoverMore
          class="hidden md:block"
          text="Discover more"
        ></UIDiscoverMore>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
