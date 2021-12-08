<template>
  <svg
    v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
    class="wiggle"
    width="998"
    height="284"
    viewBox="0 0 998 284"
    style="width: 100%; height: auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <g clip-path="url(#clip0_4972:222)">
      <path
        d="M-139.352 149.37C-22.358 85.2934 70.7258 74.202 130.487 77.7181C339.781 90.0139 468.886 211.933 701.679 231.311C884.018 246.488 894.731 99.503 832.077 94.2879C777.228 89.7223 762.906 210.265 915.299 248.684C984.177 266.052 1069.75 253.391 1130.78 175.296"
        stroke="url(#paint0_linear_4972:222)"
        stroke-width="25"
        stroke-miterlimit="10"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_4972:222"
        x1="-134.297"
        y1="88.642"
        x2="1129.24"
        y2="193.817"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FDA9FF" />
        <stop offset="0.272599" stop-color="#C9B8FF">
          <animate attributeName="offset" dur="5s" values="0;1;0"
          repeatCount="indefinite" /></stop>
        </stop>
        <stop offset="1" stop-color="#4DFFE5"></stop>
        </stop>
      </linearGradient>
      <clipPath id="clip0_4972:222">
        <rect
        width="1286.45"
        height="176.711"
        fill="white"
        transform="translate(-134.342 0.441406) rotate(4.75823)"
        />
      </clipPath>
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
  }),
  methods: {
    onWaypoint({ going }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.$el.classList.add('go')
      }
    },
  },
}
</script>

<style scoped>
.wiggle.go path {
  stroke-dasharray: 1634;
  stroke-dashoffset: 1634;
  animation: dash 1.2s linear forwards;
  animation-delay: 0.75s;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
