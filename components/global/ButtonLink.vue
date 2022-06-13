<template>
  <div v-if="link.startsWith('http')">
    <a
      :href="link"
      :target="target"
      class="border text-xl px-11 py-3 rounded-full inline-block !no-underline border-midGrey dark:bg-navy dark:text-white button"
      ><slot></slot
    ></a>
  </div>
  <NuxtLink
    v-else
    :to="link"
    :target="target"
    class="border text-xl px-11 py-3 rounded-full inline-block !no-underline border-midGrey dark:bg-navy dark:text-white button"
    ><slot></slot
  ></NuxtLink>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'light',
    },
    text: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    },
  },
}
</script>

<style scoped>
.button {
  border: solid 1px transparent;
  background-image: linear-gradient(#d8d8d8, #d8d8d8),
    linear-gradient(#d8d8d8, #d8d8d8);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  transition: background-image 3s ease-in-out;
  @apply text-navy !important;
  @apply text-xl;
  @apply py-3;
  @apply px-11;
  @apply rounded-full;
}

.button:hover {
  background-image: linear-gradient(#16183c, #16183c),
    linear-gradient(101deg, #fda9ff, #4dffe5);
}
</style>
