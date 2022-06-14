<template>
  <div v-if="link.startsWith('http')">
    <a :href="link" :target="target" :class="classObject"><slot></slot></a>
  </div>
  <NuxtLink v-else :to="link" :target="target" :class="classObject"
    ><slot></slot
  ></NuxtLink>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
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
  data: () => ({
    baseButtonClass:
      'border-[2px] border-transparent bg-clip-content-border bg-origin-border text-xl px-11 py-3 rounded-full inline-block !no-underline rounded-full px-11 py-3 text-xl',
  }),
  computed: {
    classObject() {
      if (this.dark) {
        return (
          this.baseButtonClass +
          ' border-midGrey bg-navy shadow-button-dark bg-button-link-gradient-dark hover:bg-button-link-gradient-hover text-white button'
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
