<template>
  <div
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: intersectionOptions,
    }"
    class="pt-14 md:pt-20 lg:pt-36 container"
  >
    <div class="md:grid md:grid-cols-12">
      <div class="md:col-span-4">
        <h2
          class="max-w-[335px] md:max-w-none font-serif mb-8 text-xxxl lg:text-xxxxxl leading-none md:pr-8 lg:pr-0 lg:leading-[0.9]"
        >
          {{ page.umee_experience_title }}
        </h2>
      </div>
      <div class="md:col-span-8">
        <div
          class="grid grid-cols-2 md:grid-cols-3 auto-rows-fr gap-y-3 gap-x-5"
        >
          <UILogoGridCell
            v-for="(logo, index) in experienceLogos"
            :key="index"
            :index="index + 1"
            :image="logo.pathLong"
          ></UILogoGridCell>
        </div>
      </div>
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
    experienceLogos: [],
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.25],
    },
  }),
  mounted() {
    this.importAll(
      require.context('../../assets/images/experience-logos/', true, /\.png$/)
    )
  },
  methods: {
    onWaypoint({ going }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.$el.classList.add('animate')
      }
    },
    importAll(r) {
      r.keys().forEach((key) => this.experienceLogos.push({ pathLong: r(key) }))
    },
  },
}
</script>
