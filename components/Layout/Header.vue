<template>
  <div
    class="absolute left-0 right-0 text-navy dark:text-white z-10"
    :class="dropdownMenu ? 'text-white dark:text-navy' : ''"
    @mouseleave="dropdownMenu = false"
  >
    <div
      class="container mx-auto h-[95px] flex justify-between align-middle py-3 items-center"
    >
      <NuxtLink to="/" class="relative z-10">
        <SVGUmeeLogo class="w-[130px] md:w-[162px]"></SVGUmeeLogo>
      </NuxtLink>

      <div
        class="relative z-10 text-lg flex items-center"
        :class="
          dropdownMenu
            ? 'text-midGreyOnNavy dark:text-navy'
            : 'text-navy dark:text-white'
        "
      >
        <a
          class="hidden md:inline-block"
          target="_blank"
          href="https://app.umee.cc/"
          @mouseover="dropdownMenu = 'NavigationLearn'"
          >Learn</a
        >
        <a
          class="hidden md:inline-block ml-6"
          target="_blank"
          href="https://wallet.keplr.app/#/umee/governance"
          @mouseover="dropdownMenu = 'NavigationBuild'"
          >Build</a
        >
        <a
          class="hidden md:inline-block ml-6"
          target="_blank"
          href="https://www.umee.cc/umeemania"
          >Network</a
        >
        <a
          class="hidden md:inline-block ml-6"
          href="https://docs.umee.cc/umee/"
          target="_blank"
          >Community</a
        >

        <a
          class="hidden md:inline-block ml-6"
          href="https://docs.umee.cc/umee/"
          target="_blank"
          >Ecosystem</a
        >

        <UIButtonGradient
          href="https://app.umee.cc/"
          class="ml-6 hidden md:inline-block"
          >Launch App</UIButtonGradient
        >

        <UILightMode />
        <button
          class="text-xl md:hidden cursor-pointer ml-2"
          @click="showMobileMenu"
        >
          Menu
          <svg
            class="inline-block ml-2 relative -top-px"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="stroke-navy dark:stroke-white"
              d="M7.5 0V15"
              stroke="#16183C"
              stroke-width="1.3"
              stroke-miterlimit="10"
            />
            <path
              class="stroke-navy dark:stroke-white"
              d="M0 7.5H15"
              stroke="#16183C"
              stroke-width="1.3"
              stroke-miterlimit="10"
            />
          </svg>
        </button>
      </div>
      <!-- <transition name="fade" appear mode="out-in">
      <LayoutMobileMenu
        v-show="mobileMenu"
        @closeMobileMenu="mobileMenu = false"
      ></LayoutMobileMenu>
    </transition> -->
    </div>

    <div
      v-show="dropdownMenu"
      class="absolute top-0 left-0 right-0 pt-[7.5rem] bg-navy text-white dark:bg-white dark:text-navy"
    >
      <component v-bind:is="dropdownMenu"></component>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownMenu: false,
      mobileMenu: false,
      subMenu: false,
    }
  },
  methods: {
    showMobileMenu() {
      this.mobileMenu = !this.mobileMenu
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
