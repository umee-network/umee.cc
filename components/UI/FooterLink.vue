<template>
  <li class="py-1 text-sm">
    <a
      v-if="to.startsWith('http')"
      target="_blank"
      :href="to"
      class="hover:underline"
      ><slot></slot
    ></a>
    <NuxtLink v-else :to="to" class="hover:underline"><slot></slot></NuxtLink>
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


