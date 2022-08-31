<template>
  <li>
    <div v-if="link.startsWith('http')">
      <a :href="link" target="_blank" :class="linkClass"><slot></slot></a>
    </div>
    <NuxtLink v-else :to="link" :class="linkClass"><slot></slot></NuxtLink>
    <UINavigationMainItemDescription>{{
      description
    }}</UINavigationMainItemDescription>
  </li>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  computed: {
    linkClass() {
      return 'text-base md:text-lg inline-block leading-none hover:underline'
    },
  },
}
</script>
