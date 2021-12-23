<template>
  <div class="home-screen pb-20" data-aos="fade-in">
    <div class="container">
      <div class="cross-defi-waves-bg">
        <SVGCrossTheWavesDesktop
          class="mb-8 hidden md:block"
        ></SVGCrossTheWavesDesktop>
      </div>

      <div class="relative md:hidden">
        <div class="cross-defi-waves-bg">
          <SVGCrossTheWavesMobile class="mb-8"></SVGCrossTheWavesMobile>
        </div>
        <div
          class="absolute right-[15%] bottom-[15%] w-[30vw]"
          data-aos="fade-zoom-in"
        >
          <img src="~/assets/images/adora-hero.svg" class="adora-body" />
          <img
            src="~/assets/images/adora-hero-shadow.png"
            class="adora-shadow w-full"
          />
        </div>
      </div>

      <div class="flex justify-between">
        <div class="text-xl max-width md:max-w-md lg:max-w-xl leading-7">
          <p class="mb-8">
            {{ page.intro_text }}
          </p>
          <p class="mb-12 font-serif text-xxl md:text-xxl leading-[0.9]">
            <b>{{ page.intro_text_cta }}</b>
          </p>

          <UIButtonGradient link="https://umee.cc" target="_blank" class="md:hidden"
            >Launch App</UIButtonGradient
          >
        </div>
        <div
          data-aos="fade-zoom-in"
          class="
            adora
            hidden
            md:block md:w-[217px] md:mt-[-120px]
            lg:w-[248px] lg:mt-[-180px]
            xl:w-[311px] xl:mt-[-270px]
          "
        >
          <img src="~/assets/images/adora-hero.svg" class="adora-body w-full" />

          <img
            src="~/assets/images/adora-hero-shadow.png"
            class="adora-shadow w-full"
          />
        </div>
      </div>

      <NuxtLink :to="{ path: '/', hash: '#about' }">
        <UIDiscoverMore class="hidden md:block"></UIDiscoverMore>
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

<style scoped>
.adora {
  position: relative;
  margin-right: 50px;
}
.adora-body {
  animation: adora-bounce;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.adora-shadow {
  transform: scale(0.8);
  opacity: 1;
  animation: adora-shadow-bounce;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.cross-defi-waves-bg {
  background-image: linear-gradient(
    90deg,
    rgba(253, 169, 255, 1) 0%,
    rgba(214, 154, 255, 1) 12%,
    rgba(188, 167, 255, 1) 33%,
    rgba(77, 255, 229, 1) 81%
  );
  background-size: 200% 100%;
  animation: animatedBackground 5s linear infinite;
}

@keyframes animatedBackground {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes adora-bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes adora-shadow-bounce {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.8);
    opacity: 1;
  }
}
</style>
