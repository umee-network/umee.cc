<template>
  <div>
    <HomeHero :page="page"></HomeHero>
    <HomeAbout :page="page"></HomeAbout>
    <HomeExperience :page="page"></HomeExperience>
    <SVGSwoosh></SVGSwoosh>
    <HomeBackers :page="page"></HomeBackers>
    <SVGAdoraWink></SVGAdoraWink>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('pages/home').fetch()
    return { page }
  },
}
</script>
