<template>
  <div v-if="to.startsWith('http')">
    <a :href="to" :target="target" :class="classObject"><slot></slot></a>
  </div>
  <NuxtLink v-else :to="to" target="_self" :class="classObject"
    ><slot></slot
  ></NuxtLink>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      required: true,
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    },
  },
  data: () => ({
    baseButtonClass:
      'border-[2px] border-transparent bg-clip-content-border bg-origin-border text-xl px-11 py-3 rounded-full inline-block !no-underline rounded-full px-11 py-3 text-xl',
  }),
  computed: {
    classObject() {
      if (this.color === 'dark') {
        return (
          this.baseButtonClass +
          ' border-midGrey bg-navy shadow-button-dark bg-button-link-gradient-dark hover:bg-button-link-gradient-hover text-white button'
        )
      } else if (this.color === 'reverse') {
        return (
          this.baseButtonClass +
          ' dark:shadow-button shadow-button-dark dark:bg-button-link-gradient bg-button-link-gradient dark:text-navy bg-button-gradient-reverse hover:bg-button-link-gradient-hover dark:hover:bg-button-link-gradient-hover text-white button'
        )
      } else if (this.color === 'reverse-reverse-hover') {
        return (
          this.baseButtonClass +
          ' dark:shadow-button shadow-button-dark dark:bg-button-link-gradient-hover bg-button-link-gradient dark:text-navy bg-button-link-gradient-hover hover:bg-button-link-gradient dark:hover:bg-button-link-gradient text-white button'
        )
      } else {
        return (
          this.baseButtonClass +
          ' border-midGrey shadow-button dark:shadow-button-dark bg-button-link-gradient dark:bg-button-gradient-reverse hover:bg-button-link-gradient-hover dark:text-white button'
        )
      }
    },
  },
}
</script>
