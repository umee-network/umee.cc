<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <h1
      v-if="heading === 1"
      class="font-serif text-xxl lg:text-xxxl leading-none"
      v-html="text"
    ></h1>
    <h2
      v-else-if="heading === 2"
      class="font-serif text-xxl lg:text-xxxl leading-none"
      v-html="text"
    ></h2>
    <h3
      v-else-if="heading === 3"
      class="font-serif text-xxl lg:text-xxxl leading-none"
      v-html="text"
    ></h3>
    <h4
      v-else-if="heading === 4"
      class="font-serif text-xxl lg:text-xxxl leading-none"
      v-html="text"
    ></h4>
    <h5
      v-else-if="heading === 5"
      class="font-serif text-xxl lg:text-xxxl leading-none"
      v-html="text"
    ></h5>
    <h6
      v-else-if="heading === 6"
      class="font-serif text-xxl lg:text-xxxl leading-none"
      v-html="text"
    ></h6>
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
  },
  computed: {
    heading() {
      return parseInt(this.level)
    },
  },
}
</script>