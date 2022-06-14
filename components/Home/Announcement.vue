<template>
  <div
    class="fixed z-50 bottom-12 right-12 p-6 rounded-2xl pr-12 md:min-w-[28rem] bg-navy text-midGreyOnNavy shadow-umee dark:shadow-none dark:border-[#464869] dark:border text-md"
  >
    <button class="absolute top-4 right-4">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 6.49988L19.4998 19.4997"
          stroke="white"
          stroke-width="1.3"
          stroke-miterlimit="10"
        />
        <path
          d="M6.5 19.4998L19.4998 6.49991"
          stroke="white"
          stroke-width="1.3"
          stroke-miterlimit="10"
        />
      </svg>
    </button>
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
    >
      <h2
        class="text-[1.75rem] md:text-[2rem] mb-1 font-serif text-white leading-[0.9]"
      >
        {{ page.announcement_title }}
      </h2>
      <p class="mb-0">{{ page.announcement_text }}</p>
    </div>

    <ButtonLink
      target="_blank"
      class="text-center !text-md mt-6"
      :dark="true"
      :href="page.announcement_link"
      >{{ page.announcement_link_text }}</ButtonLink
    >
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
