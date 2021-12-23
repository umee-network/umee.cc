<template>
  <div class="container pb-12 md:pb-20 lg:pb-28">
    <div class="md:grid md:grid-cols-12 md:gap-x-5">
      <div class="md:col-span-5 pr-5 mb-[90px]">
        <div class="relative">
          <div class="cross-defi-waves-bg">
            <SVGFaqs></SVGFaqs>
          </div>
          <div
            class="
              adora
              w-[30vw]
              absolute
              bottom-[-112px]
              left-[10%]
              md:w-[120px]
            "
          >
            <img
              src="~/assets/images/adora-faq.svg"
              class="adora-body hidden md:block"
            />
            <img
              src="~/assets/images/adora-faq-flipped.svg"
              class="adora-body md:hidden"
            />
            <img
              src="~/assets/images/adora-hero-shadow.png"
              class="adora-shadow"
            />
          </div>
        </div>
      </div>
      <div class="md:col-span-7">
        <nuxt-content :document="faqContent" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const faqContent = await $content('pages/faq').fetch()
    return { faqContent }
  },
  head: {
    title: 'FAQs - Umee - Cross the Defi Waves',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'All your questions answered'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'All your questions answered',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content:
          'FAQs - Umee - Cross the Defi Waves',
      },
    ],
  },
}
</script>


<style scoped>
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

.adora-body {
  width: 100%;
  height: auto;
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
