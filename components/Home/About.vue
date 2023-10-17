<template>
  <div
    id="about"
    class="bg-navy text-white py-14 md:py-20 lg:py-36 flex items-center"
  >
    <div class="container" data-aos="fade-up">
      <h2>
        <UIBlockTitle class="mb-5">{{ page.about_pre_title }}</UIBlockTitle>
      </h2>
      <UITitle level="1" :text="page.about_title" class="mb-10"></UITitle>

      <div class="relative pl-6 md:pl-0">
        <div class="grid md:grid-cols-3 mb-3 text-greyOnNavy relative">
          <div class="mb-8 md:mb-0 about-point first">
            <div class="md:h-20">
              <SVGFeature1></SVGFeature1>
            </div>
            <div class="pt-4 pr-5 track-pointer md:pr-12 md:max-w-[330px]">
              <p>
                UX develops the next generation of lending markets through a combination of leverage focused DeFi applications and interest rate products while enabling scalability, cross chain interoperability, and privacy.
              </p>
            </div>
          </div>
          <div class="mb-8 md:mb-0 about-point second">
            <div class="md:h-20">
              <SVGFeature2></SVGFeature2>
            </div>
            <div class="pt-4 pr-5 track-pointer md:pr-12 md:max-w-[330px]">
              <p>
                UX is a base layer blockchain with full sovereignty and programmability for its debt financing products. UX is powered by Tendermint Consensus, Inter-blockchain Communication Protocol (IBC), and a permissionless validator network.
              </p>
            </div>
          </div>
          <div class="mb-8 md:mb-0 about-point third">
            <div class="md:h-20">
              <SVGFeature3></SVGFeature3>
            </div>
            <div class="pt-4 pr-5 track-pointer md:pr-12 md:max-w-[330px]">
              <p>
                UX offers the maximum safety guarantees with the most customizable suite of lending algorithms and chain-level security measures that autonomously monitor the health of individual assets, markets, and the overall platform. 
              </p>
            </div>
          </div>
        </div>
        <div
          class="track absolute top-0 left-0 bottom-0 w-px bg-darkGreyOnNavy md:bottom-auto md:top-[78px] md:left-0 md:w-full md:border border-solid border-darkGreyOnNavy"
        >
          <div
            class="absolute hidden -top-[-3px] w-[5px] h-[5px] rounded-[5px] bg-darkGreyOnNavy"
          ></div>
          <div
            class="absolute hidden -top-[-3px] w-[5px] h-[5px] rounded-[5px] bg-darkGreyOnNavy"
          ></div>
          <div
            class="absolute hidden -top-[-3px] w-[5px] h-[5px] rounded-[5px] bg-darkGreyOnNavy"
          ></div>
        </div>
      </div>
      <div class="grid grid-cols-3 mb-8">
        <div class="pt-4 pr-5"></div>
        <div class="pt-4 pr-5"></div>
        <div class="pt-4 pr-5"></div>
      </div>

      <UIButtonLinkInverse to="https://github.com/umee-network" target="_blank"
        >View Protocol Docs</UIButtonLinkInverse
      >
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'PageIndex',
  mixins: [aosMixin],
  props: {
    page: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
@media screen(md) {
  .track div {
    @apply block;
  }
}

.track div:nth-child(1) {
  left: 30px;
}

.track div:nth-child(2) {
  left: calc(33% + 30px);
}

.track div:nth-child(3) {
  left: calc(66% + 30px);
}

.track-pointer {
  @apply relative;
}

.track-pointer::before {
  content: '';
  left: -1.625rem;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  top: 1.5rem;
  @apply bg-darkGreyOnNavy absolute;
}

@media screen(md) {
  .track-pointer::before {
    @apply hidden;
  }
}
</style>
