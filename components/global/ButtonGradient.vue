<template>
  <div v-if="to.startsWith('http')">
    <a
      :href="to"
      target="_blank"
      class="gradient-button py-3.5 px-8 text-navy rounded-full inline-block text-center !no-underline"
      ><slot></slot
    ></a>
  </div>
  <NuxtLink
    class="gradient-button py-3.5 px-8 text-navy rounded-full inline-block text-center !no-underline"
    v-else
    :to="to"
    target="_self"
    :class="buttonClass"
    ><slot></slot
  ></NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style scoped>
.gradient-button {
  background-image: linear-gradient(
    90deg,
    rgba(253, 169, 255, 1) 0%,
    rgba(201, 184, 255, 1) 14%,
    rgba(77, 255, 229, 1) 50%
  );
  background-size: 200% 50%;
  transition: background-position 2s;
  @apply text-navy !important;
}

.gradient-button:hover {
  animation-name: gradientWave;
  background-position: 100% 50%;
}
</style>
