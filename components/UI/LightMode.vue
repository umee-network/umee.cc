<template>
  <div class="inline-block">
    <button
      class="w-[53px] h-[53px] flex md:justify-end items-center"
      @click="toggleLightMode"
    >
      <div v-if="$colorMode.value === 'light'">
        <SVGLightModeButton class="w-[25px] h-[25px]" />
      </div>
      <div v-else><SVGDarkModeButton class="w-[20px] h-[20px]" /></div>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLightMode() {
      this.$colorMode.value === 'dark'
        ? (this.$colorMode.value = 'light')
        : (this.$colorMode.value = 'dark')
    },
  },
}
</script>
