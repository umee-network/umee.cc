<template>
  <div
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: intersectionOptions,
    }"
    class="container text-center pb-20"
  >
    <UIBlockTitle class="mb-10">{{ page.backed_by }}</UIBlockTitle>

    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 auto-rows-fr gap-y-3 gap-x-5"
    >
      <UILogoGridCell
        v-for="(logo, index) in backerLogos"
        :key="index"
        :index="index + 1"
        :image="logo.pathLong"
      ></UILogoGridCell>
    </div>
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
  data: () => ({
    backerLogos: [],
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.25],
    },
  }),
  mounted() {
    this.importAll(
      require.context('../../assets/images/backer-logos/', true, /\.png$/)
    )
  },
  methods: {
    onWaypoint({ going }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.$el.classList.add('animate')
      }
    },
    importAll(r) {
      r.keys().forEach((key) => this.backerLogos.push({ pathLong: r(key) }))
    },
  },
}
</script>
