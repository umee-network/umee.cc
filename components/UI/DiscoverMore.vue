<template>
  <div>
    <div class="relative flex flex-col items-center md:dark:top-12">
      <div class="discover-more mb-3">
        <div
          class="discover-more-inner flex items-center justify-center bg-white dark:bg-navy rounded-full w-[49px] h-[49px]"
        >
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block animate-bounce"
          >
            <path
              d="M8.6499 0V16.7"
              stroke-width="1.3"
              stroke-miterlimit="10"
              class="stroke-navy dark:stroke-white"
            />
            <path
              d="M16.76 9.10999L8.60996 17.26L0.459961 9.10999"
              stroke-width="1.3"
              stroke-miterlimit="10"
              class="stroke-navy dark:stroke-white"
            />
          </svg>
        </div>
      </div>
      <span class="uppercase text-sm tracking-widest">{{ text }}</span>
    </div>
  </div>
</template>

<style scoped>
.discover-more {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 53px;
  border-radius: 53px;
  background: linear-gradient(to right, #fda9ff, #c9b8ff, #4dffe5);
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
