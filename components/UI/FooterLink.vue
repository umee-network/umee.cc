<template>
  <li class="py-1.5 text-base">
    <a
      v-if="to.startsWith('http')"
      target="_blank"
      :href="to"
      class="hover:underline text-white leading-tight"
      ><slot></slot
    ></a>
    <NuxtLink v-else :to="to" class="hover:underline text-white leading-tight"
      ><slot></slot
    ></NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
  },
}
</script>
