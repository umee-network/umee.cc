<template>
  <a
    :href="href"
    target="_blank"
    class="
      social-icon
      border
      w-[35px]
      h-[35px]
      rounded-full
      flex
      items-center
      justify-center
    "
  >
    <div class="scale-90" v-html="src"></div>
  </a>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: '',
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
  background-image: linear-gradient(#16183c, #16183c),
    linear-gradient(#464869, #464869);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border: solid 2px transparent;
}

.social-icon:hover {
  background-image: linear-gradient(#16183c, #16183c),
    linear-gradient(to right, #fda9ff, #c9b8ff, #4dffe5);
}
</style>
