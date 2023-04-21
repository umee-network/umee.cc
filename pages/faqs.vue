<template>
  <div class="container pb-12 md:pb-20 lg:pb-28">
    <div class="md:grid md:grid-cols-12 md:gap-x-5">
      <div class="md:col-span-5 pr-5 mb-[90px]">
        <div class="relative">
          <SVGWaveBackground>
            <SVGFaqs />
          </SVGWaveBackground>
          <div
            class="adora w-[30vw] absolute bottom-[-112px] left-[10%] md:w-[120px] flip-horizontal md:flip-none"
          >
            <SVGAdoraHappy />
          </div>
        </div>
      </div>
      <div class="md:col-span-7">
        <nuxt-content
          class="prose dark:text-white dark:prose-dark prose-h2:text-[1.75rem] accordion"
          :document="faqContent"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const faqContent = await $content('pages/faq').fetch()
    return { faqContent }
  },
  head() {
    const title = 'Umee: Frequently Asked Questions'
    const description =
      "Find answers to your questions quickly and easily with our FAQs. We have compiled a list of the most common questions and concerns that our community has. Browse through to find the information you need. If you can't find the answer you're looking for, contact us and we'll be happy to help."
    return {
      title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    }
  },
}
</script>
