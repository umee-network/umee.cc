<template>
  <div class="inline-block">
    <button
      class="w-[53px] h-[53px] flex md:justify-end items-center"
      @click="toggleLightMode"
    >
      <div class="w-full h-full flex justify-center items-center">
        <SVGLightModeButton
          v-if="$colorMode.value === 'light'"
          class="w-[25px] h-[25px]"
        />
        <SVGDarkModeButton v-else class="w-[20px] h-[20px]" />
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
