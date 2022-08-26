<template>
  <div class="bg-navy text-white pt-10" id="sectionTypography">
    <div class="container">
      <div class="grid md:grid-cols-12 md:gap-12 lg:gap-16">
        <div
          class="hidden md:block col-span-4 relative pointer-events-none"
        ></div>
        <div class="col-span-8">
          <div
            class="border-b border-darkGreyOnNavy pb-6 mb-12 md:pb-10 md:mb-20"
          >
            <UITitle heading="1" class="mb-3" text="Typography" />
            <div class="prose text-midGreyOnNavy prose-xl leading-normal mb-12">
              <p>
                Our voice is brought to life with two carefully paired
                typefaces, Moret and Suisse Int:
              </p>
            </div>
            <div>
              <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 mb-10 lg:mb-20"
              >
                <div class="mb-10 md:mb-0 order-2 lg:order-1">
                  <UITitle
                    text="Moret Semibold"
                    class="mb-4"
                    fontSizeClass="text-xxl"
                  />
                  <div
                    class="prose prose-xl text-midGreyOnNavy leading-normal mb-10"
                  >
                    <p>
                      Moret is our headline typeface and should be used for
                      headings and pull-out statements.
                    </p>
                  </div>
                  <UIButtonLinkInverse
                    link="https://fonts.adobe.com/fonts/moret"
                    target="_blank"
                    ><span class="align-middle">Buy Moret</span>
                    <SVGLinkArrow class="ml-3"
                  /></UIButtonLinkInverse>
                </div>
                <div class="order-1 lg:order-2 mb-6 lg:mb-0">
                  <img
                    :src="moretExample"
                    class="w-full h-auto max-w-[13.75rem] lg:max-w-none"
                  />
                </div>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                <div class="mb-10 md:mb-0 order-2 lg:order-1">
                  <h2 class="text-xxxl lg:text-xxl leading-none mb-4">
                    Siusse Int'l
                  </h2>
                  <div class="prose prose-xl text-midGreyOnNavy leading-normal">
                    <p>
                      Suisse Int'l is a classic sans serif suitable for large
                      bodies of text and smaller titles.
                    </p>
                  </div>

                  <div class="text-[1.625rem] flex gap-3 mt-3 mb-10">
                    <span>Light</span> <span class="font-normal">Regular</span>
                    <span class="font-semibold">Semi Bold</span>
                  </div>
                  <UIButtonLinkInverse
                    link="https://www.swisstypefaces.com/fonts/suisse/#Int%E2%80%99l"
                    target="_blank"
                    ><span class="align-middle">Buy Suisse Int'l</span>
                    <SVGLinkArrow class="ml-3"
                  /></UIButtonLinkInverse>
                </div>
                <div class="order-1 lg:order-2 mb-6 lg:mb-0">
                  <img
                    :src="suisseIntlExample"
                    class="w-full h-auto max-w-[13.75rem] lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  colorMode: 'light',
  async asyncData({ $content }) {
    const page = await $content('pages/home').fetch()
    return { page }
  },
  computed: {
    moretExample() {
      const src = require(`assets/images/brand-moret-example.svg`)
      return src
    },
    suisseIntlExample() {
      const src = require(`assets/images/brand-suisse-intl-example.svg`)
      return src
    },
  },
}
</script>
