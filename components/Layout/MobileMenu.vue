<template>
  <div
    class="fixed overflow-scroll top-0 left-0 right-0 bottom-0 bg-navy text-white dark:bg-white dark:text-navy z-10 flex flex-col justify-between"
  >
    <div>
      <div
        class="container mx-auto h-[95px] py-3 flex justify-between items-center"
      >
        <NuxtLink @click.native="closeMobileMenu" to="/" class="relative z-10">
          <!-- <SVGUX color="light" class="w-[130px] md:w-[162px]"></SVGUX> -->
          <img src="~/assets/images/ux.png" class="w-[80px]" alt="UX" />
        </NuxtLink>
        <a class="text-xl cursor-pointer" @click="closeMobileMenu">
          Close
          <svg
            class="inline-block -top-px ml-2 relative cursor-pointer"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M0.5 13.5L13.5 0.5M0.5 0.5L13.5 13.5L0.5 0.5Z"
              stroke="currentColor"
              stroke-width="1.3"
              stroke-miterlimit="10"
            />
          </svg>
        </a>
      </div>
      <div class="mt-4">
        <nav class="text-[1.625rem]">
          <div class="relative z-10 text-lg">
            <div v-for="(item, index) in items" :key="index">
              <div>
                <button
                  @click="setDropdown(index)"
                  class="w-full border-t border-darkGreyOnNavy dark:border-midGrey text-xl container py-[1rem] flex justify-between items-center"
                >
                  <span
                    :class="
                      isOpen === index
                        ? 'border-b-2 border-gradient-reverse'
                        : 'border-b-2 border-transparent'
                    "
                  >
                    {{ item.title }}
                  </span>
                  <UIMenuDropdown
                    class="ml-1 inline-block transition"
                    :class="isOpen === index ? 'rotate-180' : ''"
                  />
                </button>
                <div :class="isOpen === index ? 'block' : 'hidden'">
                  <div class="pt-6 pb-12">
                    <component
                      v-bind:is="item.component"
                      closeMobileMenu="this.closeMobileMenu"
                    ></component>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div
          class="container border-t border-darkGreyOnNavy dark:border-midGrey"
        >
          <UIButtonGradient to="https://app.ux.xyz/" class="w-full my-6"
            >Launch App</UIButtonGradient
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Learn',
          component: 'NavigationLearn',
        },
        {
          title: 'Build',
          component: 'NavigationBuild',
        },
        {
          title: 'Network',
          component: 'NavigationNetwork',
        },
        {
          title: 'Community',
          component: 'NavigationCommunity',
        },
        {
          title: 'Ecosystem',
          component: 'NavigationEcosystem',
        },
      ],
      isOpen: -1,
    }
  },
  methods: {
    setDropdown(index) {
      if (this.isOpen === index) {
        this.isOpen = -1
      } else {
        this.isOpen = index
      }
    },
    closeMobileMenu() {
      this.$parent.showMobileMenu()
      this.isOpen = -1
    },
  },
}
</script>
