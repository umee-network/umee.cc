<template>
  <div class="container pb-12 md:pb-20 lg:pb-28">
    <img class="w-full" src="~/assets/images/apps-and-services.png" alt="" />
    <p class="text-xl mt-10 mb-6">
      Discover a wide variety of apps, blockchains, wallets and explorers, built
      in the Umee ecosystem by developers and contributors from across the
      globe.
    </p>
    <h1 class="text-[48px] font-bold font-serif mb-10">
      Join the Umee ecosystem today
    </h1>
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="app in apps" :key="app.name" class="col-span-1 flex">
        <a :href="app.web" target="_blank"
          ><img :src="app.img" class="w-24 h-24 rounded-lg mr-4"
        /></a>
        <div>
          <h3 class="font-xl font-bold">{{ app.name }}</h3>
          <p class="font-md">{{ app.description }}</p>
          <div class="flex mt-4">
            <a class="mr-2" :href="app.web" target="_blank">
              <img src="~/assets/images/ecosystem-icons/docs.png" />
            </a>
            <a class="mr-2" :href="app.github" target="_blank">
              <img src="~/assets/images/ecosystem-icons/github.png" />
            </a>
            <a :href="app.twitter" target="_blank">
              <img src="~/assets/images/ecosystem-icons/twitter.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const ecosystemContent = await $content('pages/ecosystem').fetch()
    return ecosystemContent
  },
  head() {
    const title = 'Umee: Ecosystem'
    const description =
      'Discover a wide variety of apps, blockchains, wallets and explorers, built in the Umee ecosystem by developers and contributors from across the globe.'
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
