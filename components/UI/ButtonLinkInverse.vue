<template>
  <div v-if="link.startsWith('http')">
    <a :href="link" :target="target" class="button-inverse">{{ text }}</a>
  </div>
  <NuxtLink v-else :to="link" :target="target" class="button-inverse">{{
    text
  }}</NuxtLink>
</template>

<script>
export default {
  props: {
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
.button-inverse {
  border: solid 2px transparent;
  background-image: linear-gradient(#464869, #464869),
    linear-gradient(#464869, #464869);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #16183c inset;
  transition: background-image 3s ease-in-out;
  @apply text-white;
  @apply text-xl;
  @apply py-3;
  @apply px-11;
  @apply rounded-full;
}

.button-inverse:hover {
  background-image: linear-gradient(#16183c, #16183c),
    linear-gradient(101deg, #fda9ff, #4dffe5);
}
</style>
