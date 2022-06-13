<template>
  <div>
    <HomeHero :page="page"></HomeHero>
    <HomeAbout :page="page"></HomeAbout>
    <HomeExperience :page="page"></HomeExperience>
    <SVGSwoosh></SVGSwoosh>
    <Security />
    <HomeBackers :page="page"></HomeBackers>
    <SVGAdoraWink></SVGAdoraWink>
  </div>
</template>

<script>
import Security from '~/components/Home/Security.vue'
export default {
  async asyncData({ $content }) {
    const page = await $content('pages/home').fetch()
    return { page }
  },
  components: { Security },
}
</script>
