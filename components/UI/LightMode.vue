<template>
  <div class="inline-block">
    <button
      class="w-[33px] h-[53px] xl:w-[53px] xl:h-[53px] flex md:justify-end items-center"
      @click="toggleLightMode"
    >
      <div class="w-full h-full flex justify-center items-center">
        <SVGLightModeButton
          v-if="$colorMode.value === 'light'"
          class="w-[26px] h-[26px]"
        />
        <SVGDarkModeButton v-else class="w-[26px] h-[26px]" />
      </div>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLightMode() {
      this.$colorMode.preference === 'dark'
        ? (this.$colorMode.preference = 'light')
        : (this.$colorMode.preference = 'dark')
    },
  },
}
</script>
