<template>
  <div
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: intersectionOptions,
    }"
    class="py-14 md:py-20 lg:py-36 container"
  >
    <div class="shadow-umee rounded-2xl p-6 md:p-10">
      <div class="md:grid md:grid-cols-12 md:gap-x-8">
        <div class="md:col-span-4 mb-8 md:mb-0">
          <h2
            class="max-w-[335px] mb-3 md:max-w-none font-serif text-xxl lg:text-xxxl leading-none md:pr-8 lg:pr-0 lg:leading-[0.9]"
          >
            Security and Audits
          </h2>
          <p class="text-xl mb-3 md:mb-6">
            Audited and verified by top auditors
          </p>
          <ButtonLink
            target="_blank"
            class="text-center"
            href="https://docs.umee.cc/umee/additional-information/security-and-audits"
            >Protocol security</ButtonLink
          >
        </div>
        <div class="md:col-span-8">
          <div
            class="grid grid-cols-3 md:grid-cols-3 auto-rows-fr gap-y-3 gap-x-3 md:gap-x-5"
          >
            <UILogoGridCell
              v-for="(logo, index) in securityLogos"
              :key="index"
              :index="index + 1"
              :image="logo.pathLong"
            ></UILogoGridCell>
          </div>
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
    securityLogos: [],
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.25],
    },
  }),
  mounted() {
    this.importAll(
      require.context('../../assets/images/security-logos/', true, /\.png$/)
    )
  },
  methods: {
    onWaypoint({ going }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.$el.classList.add('animate')
      }
    },
    importAll(r) {
      r.keys().forEach((key) => this.securityLogos.push({ pathLong: r(key) }))
    },
  },
}
</script>
