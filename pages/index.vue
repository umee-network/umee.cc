<template>
  <div>
    <HomeHero :page="page" />
    <HomeAbout :page="page" />
    <HomeExperience :page="page" />
    <SVGSwoosh />
    <Security />
    <HomeBackers :page="page" />
    <HomeAnnouncement :page="page" :dark="true" />
    <SVGAdoraWink />
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
