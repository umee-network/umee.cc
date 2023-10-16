<template>
  <div class="container pb-12 md:pb-20 lg:pb-28">
    <div
      class="grid grid-cols-1 lg:columns-2 lg:flex justify-center align-middle font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple to-aqua mb-4"
    >
      <div class="flex justify-center">
        <h1
          class="leading-none font-serif lg:text-[400px] md:text-[375px] text-[200px]"
        >
          {{ apps.length }}
        </h1>
      </div>

      <div
        class="flex flex-col lg:justify-center lg:items-stretch items-center width=100%"
      >
        <h1
          class="uppercase lg:tracking-[1rem] font-serif leading-[0.7] lg:text-[190px] md:text-[140px] text-[80px] lg:pb-0 pb-2"
        >
          Apps and
        </h1>
        <h1
          class="uppercase tracking-[-.65rem] font-serif leading-[0.75] lg:text-[250px] md:text-[200px] text-[112px] lg:pb-0 pb-2"
        >
          Services
        </h1>
      </div>
    </div>

    <p class="text-xl mb-6 md:text-left text-center">
      Discover a wide variety of apps, blockchains, wallets and explorers, built
      in the UX ecosystem by developers and contributors from across the
      globe.
    </p>
    <h1 class="text-[48px] font-bold font-serif mb-10 md:text-left text-center">
      Join the UX ecosystem today
    </h1>
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="app in apps"
        :key="app.name"
        class="col-span-1 flex md:justify-start justify-center md:gap-0 gap-8"
      >
        <a :href="app.web" target="_blank"
          ><img alt="" :src="app.img" class="w-24 h-24 rounded-lg mr-4"
        /></a>
        <div>
          <h3 class="font-xl font-bold">{{ app.name }}</h3>
          <p class="font-md">{{ app.description }}</p>
          <div class="flex mt-4">
            <a class="mr-2" :href="app.web" target="_blank">
              <img alt="docs" src="~/assets/images/ecosystem-icons/docs.png" />
            </a>
            <a class="mr-2" :href="app.github" target="_blank">
              <img
                alt="github"
                src="~/assets/images/ecosystem-icons/github.png"
              />
            </a>
            <a :href="app.twitter" target="_blank">
              <img
                alt="twitter"
                src="~/assets/images/ecosystem-icons/twitter.png"
              />
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
    return await $content('pages/ecosystem').fetch()
  },
  head() {
    const title = 'UX: Ecosystem'
    const description =
      'Discover a wide variety of apps, blockchains, wallets and explorers, built in the UX ecosystem by developers and contributors from across the globe.'
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
