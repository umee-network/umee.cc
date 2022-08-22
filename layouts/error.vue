<template>
  <div>
    <!-- <h1 v-if="error.statusCode === 404">Page not found</h1> -->
    <div class="pb-20">
      <div class="container max-w-[56.25rem]">
        <div class="relative mb-12">
          <SVGWaveBackground>
            <SVGOoops class="mb-8 hidden md:block w-full"></SVGOoops>
            <SVGOops class="mb-8 md:hidden w-full"></SVGOops>
          </SVGWaveBackground>
          <div
            class="absolute bottom-6 left-[10%] md:right-[10%] md:bottom-[-45%] md:left-auto w-[30vw] md:w-[14rem] flip-horizontal md:flip-none"
          >
            <SVGAdoraLost />
          </div>
        </div>
        <div
          class="font-serif text-[2.75rem] leading-[0.9] mb-2 text-center md:text-left"
        >
          Well, this is awkward.
        </div>
        <div class="text-xl mb-6 text-center md:text-left">
          We can't seem to find what you're looking for.
        </div>
        <div class="text-center md:text-left">
          <ButtonLink link="/" target="_blank">Go back home</ButtonLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'error',
  props: ['error'], // you can set a custom layout for the error page
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
</style>
