<template>
  <div class="container pb-12 md:pb-20 lg:pb-28">
    <div class="md:grid md:grid-cols-12 md:gap-x-5">
      <div class="md:col-span-5 pr-5 mb-[90px]">
        <div class="relative">
          <SVGWaveBackground>
            <SVGJobs></SVGJobs>
          </SVGWaveBackground>

          <div
            class="adora w-[30vw] absolute bottom-[-112px] left-[10%] md:w-[120px] flip-horizontal md:flip-none"
          >
            <SVGAdoraJobs />
          </div>
        </div>
      </div>
      <div class="md:col-span-7">
        <nuxt-content
          class="prose dark:text-white dark:prose-dark prose-h2:text-[1.75rem] accordion"
          :document="jobsContent"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const jobsContent = await $content('pages/jobs').fetch()
    return { jobsContent }
  },
  head: {
    title: 'Jobs - Umee - Cross the Defi Waves',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Find out about our job openings',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Find out about our job openings',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Jobs - Umee - Cross the Defi Waves',
      },
    ],
  },
}
</script>
