<template>
  <svg
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: intersectionOptions,
    }"
    width="81"
    height="53"
    viewBox="0 0 81 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="animate"
  >
    <path
      class="fourth"
      d="M63.6316 0.85609C63.7743 0.381303 64.4466 0.381303 64.5893 0.85609L79.699 51.1317C79.7954 51.4526 79.5552 51.7756 79.2202 51.7756H49.0007C48.6656 51.7756 48.4254 51.4526 48.5218 51.1317L63.6316 0.85609Z"
      stroke="white"
    />
    <path
      class="third"
      d="M47.1527 0.712179C47.4381 -0.237393 48.7827 -0.237393 49.0681 0.712179L64.1779 50.9878C64.3707 51.6295 63.8902 52.2756 63.2202 52.2756H33.0007C32.3306 52.2756 31.8501 51.6295 32.043 50.9878L47.1527 0.712179Z"
      fill="#2A2E57"
    />
    <path
      class="second"
      opacity="0.3"
      d="M31.1527 0.712179C31.4381 -0.237393 32.7827 -0.237393 33.0681 0.712179L48.1779 50.9878C48.3707 51.6295 47.8902 52.2756 47.2202 52.2756H17.0007C16.3306 52.2756 15.8501 51.6295 16.043 50.9878L31.1527 0.712179Z"
      fill="#BDD4FF"
    />
    <path
      class="first"
      d="M15.1527 0.712179C15.4381 -0.237393 16.7827 -0.237393 17.0681 0.712179L32.1779 50.9878C32.3707 51.6295 31.8902 52.2756 31.2202 52.2756H1.00066C0.33059 52.2756 -0.149887 51.6295 0.0429732 50.9878L15.1527 0.712179Z"
      fill="url(#paint0_linear_5084_115)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5084_115"
        x1="-1.80238e-06"
        y1="44"
        x2="23"
        y2="21.5"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(180deg)"
      >
        <stop stop-color="#FDA9FF" />
        <stop offset="0.272599" stop-color="#C9B8FF">
          <animate
            attributeName="offset"
            dur="5s"
            values="0;0.6;0"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="1" stop-color="#4DFFE5" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0, 1],
    },
    entered: false,
  }),
  methods: {
    onWaypoint({ going }) {
      if (going === this.$waypointMap.GOING_IN) {
        if (!this.entered) {
          setTimeout(() => {
            this.svgAnimation()
          }, 1000)
          this.entered = true
        }
      }
    },
    svgAnimation() {
      const gsap = this.$gsap
      const svg = this.$el
      const second = this.$el.querySelector('.second')
      const third = this.$el.querySelector('.third')
      const fourth = this.$el.querySelector('.fourth')
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 })
      timeline.add(gsap.to(second, { translateX: '0', duration: 0.5 }))
      timeline.add(gsap.to(third, { translateX: '0', duration: 0.75 }))
      timeline.add(gsap.to(fourth, { translateX: '0', duration: 1 }))
      timeline.add(gsap.to(svg, { opacity: 0, duration: 1.75 }))
      timeline.add(gsap.to(second, { translateX: '-14px', duration: 0 }))
      timeline.add(gsap.to(third, { translateX: '-32px', duration: 0 }))
      timeline.add(gsap.to(fourth, { translateX: '-48px', duration: 0 }))
      timeline.add(gsap.to(svg, { opacity: 1, duration: 1 }))
    },
  },
}
</script>

<style scoped>
.second {
  transform: translateX(-14px);
}

.third {
  transform: translateX(-32px);
}

.fourth {
  transform: translateX(-48px);
}
</style>
