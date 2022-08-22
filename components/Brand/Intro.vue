<template>
  <div class="bg-navy text-white pt-16 md:pt-28">
    <div class="container">
      <div class="grid md:grid-cols-12 md:gap-12 lg:gap-16">
        <div
          class="hidden md:block col-span-4 relative pointer-events-none"
        ></div>
        <div class="col-span-8">
          <div
            id="sectionOurBrand"
            class="border-b border-darkGreyOnNavy pb-6 mb-12 md:pb-10 md:mb-20"
          >
            <UITitle heading="1" class="mb-3" text="Our brand" />
            <div class="prose text-midGreyOnNavy prose-xl leading-normal mb-12">
              <p>
                We've created this handy guide to help you find and download our
                brand assets, and feel confident using them. Go explore!
              </p>
            </div>

            <UIBlockTitle class="mb-4">Our personality</UIBlockTitle>
            <div class="prose prose-lg text-midGreyOnNavy leading-normal mb-6">
              <p>
                Our three personality attributes inspire how we behave and
                present ourselves to the world. In everything we do, they are a
                collective reflection of the best of who we are:
              </p>
            </div>
            <img :src="personalityDiagram" class="mt-10 w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    personalityDiagram() {
      const src = require(`assets/images/brand-personality.svg`)
      return src
    },
  },
}
</script>
