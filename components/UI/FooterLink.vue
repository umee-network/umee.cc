<template>
  <li class="py-1.5 text-base">
    <a
      v-if="to.startsWith('http')"
      target="_blank"
      :href="to"
      :class="linkClass"
      ><slot></slot
    ></a>
    <NuxtLink v-else :to="to" :class="linkClass"><slot></slot></NuxtLink>
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
  computed: {
    linkClass() {
      return 'hover:underline text-midGreyOnNavy text-xs leading-snug block py-px'
    },
  },
}
</script>
