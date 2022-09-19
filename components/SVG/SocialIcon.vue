<template>
  <div
    class="social-icon border w-[35px] h-[35px] rounded-full flex items-center justify-center"
  >
    <div v-html="src"></div>
  </div>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      const src = require(`assets/images/logo-social-${this.name}.svg?raw`)
      return src
    },
  },
}
</script>

<style scoped>
.social-icon {
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(#d0d1d8, #d0d1d8);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border: solid 2px transparent;
}

.dark .social-icon {
  background-image: linear-gradient(#16183c, #16183c),
    linear-gradient(#d0d1d8, #d0d1d8);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border: solid 2px transparent;
  color: #fff;
}

.social-icon:hover {
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #fda9ff, #c9b8ff, #4dffe5);
}

.dark .social-icon:hover {
  background-image: linear-gradient(#16183c, #16183c),
    linear-gradient(to right, #fda9ff, #c9b8ff, #4dffe5);
}
</style>
