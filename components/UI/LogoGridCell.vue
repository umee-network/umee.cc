<template>
  <div
    class="flex items-center flip"
    data-aos
    :style="{ transitionDelay: `${transitionDelay}` }"
  >
    <img :src="image" class="w-full h-auto" alt="Logo" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    transitionDelay() {
      return this.index * 100 + 250 + 'ms'
    },
  },
  methods: {
    imgAlt() {
    },
  }
}
</script>


<style scoped>
.flip {
  backface-visibility: hidden;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: perspective(2500px) rotateX(-100deg);
  transition-duration: 1s;
}

.animate .flip {
  transform: perspective(2500px) rotateX(0);
}
</style>
