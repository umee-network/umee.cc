<template>
  <div
    v-if="difficulty"
    class="text-xs tracking-widest text-white rounded-[6.25rem] uppercase px-3 inline-block"
    :class="bgColor"
  >
    {{ difficulty }}
  </div>
</template>

<script>
export default {
  props: {
    difficulty: {},
  },
  computed: {
    bgColor() {
      switch (this.difficulty) {
        case 'Beginner':
          return 'bg-darkAqua'
        case 'Intermediate':
          return 'bg-purple'
        case 'Advanced':
          return 'bg-pink'
        default:
          return 'bg-darkAqua'
      }
    },
  },
}
</script>
