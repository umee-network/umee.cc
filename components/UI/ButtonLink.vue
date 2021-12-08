<template>
  <div v-if="link.startsWith('http')">
    <a :href="link" :target="target" :class="buttonClass"><slot></slot></a>
  </div>
  <NuxtLink v-else :to="link" :target="target" :class="buttonClass"
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
  computed: {
    buttonClass() {
      return (
        (this.mode === 'dark'
          ? 'bg-navy text-white '
          : 'border border-midGrey ') +
        'text-xl px-11 py-3 rounded-full inline-block'
      )
    },
  },
}
</script>
