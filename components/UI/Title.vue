<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <h1 v-if="heading === 1" :class="headingClass" v-html="text"></h1>
    <h2 v-else-if="heading === 2" :class="headingClass" v-html="text"></h2>
    <h3 v-else-if="heading === 3" :class="headingClass" v-html="text"></h3>
    <h4 v-else-if="heading === 4" :class="headingClass" v-html="text"></h4>
    <h5 v-else-if="heading === 5" :class="headingClass" v-html="text"></h5>
    <h6 v-else-if="heading === 6" :class="headingClass" v-html="text"></h6>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    level: {
      type: String,
      default: '1',
    },
    fontSizeClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    heading() {
      return parseInt(this.level)
    },
    headingClass() {
      return this.fontSizeClass === ''
        ? 'font-serif leading-none text-xxxl lg:text-xxxxl'
        : 'font-serif leading-none ' + this.fontSizeClass
    },
  },
}
</script>
