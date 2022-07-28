<template>
  <div class="text-navy dark:bg-navy dark:text-white">
    <LayoutHeader></LayoutHeader>
    <Nuxt class="pt-[7.5rem]" />
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: process.env.NODE_ENV === 'development' ? 'debug-screens' : '',
      },
    }
  },
}
</script>
