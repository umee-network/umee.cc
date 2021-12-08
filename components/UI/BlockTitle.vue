<template>
  <h2
    class="
      uppercase
      text-sm
      tracking-widest
      gradient-border
      inline-block
      pb-0.5
    "
  >
    <slot></slot>
  </h2>
</template>

<style scoped>
.gradient-border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-image: linear-gradient(90deg, #fda9ff, #c9b8ff, #4dffe5) 2;
}
</style>
