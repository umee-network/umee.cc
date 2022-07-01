<template>
  <div>
    <button
      @click="toggleDropdown"
      class="w-full border-t border-darkGreyOnNavy text-xl px-[1rem] py-[1rem] flex justify-between items-center"
    >
      <span
        :class="
          dropdown
            ? 'border-b-2 border-gradient-reverse'
            : 'border-b-2 border-transparent'
        "
      >
        {{ title }}
      </span>
      <UIMenuDropdown
        class="ml-1 inline-block transition"
        :class="dropdown ? 'rotate-180' : ''"
      />
    </button>
    <div :class="dropdown ? 'block' : 'hidden'">
      <div class="pt-6 pb-12 border-b border-darkGreyOnNavy">
        <component v-bind:is="section"></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false,
    }
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    section: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
  },
}
</script>
