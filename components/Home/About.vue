<template>
  <div
    id="about"
    class="bg-navy text-white py-20 md:py-20 lg:py-28 min-h-[calc(100vh-100px)] flex items-center"
  >
    <div class="container" data-aos="fade-up">
      <UIBlockTitle class="mb-5">{{ page.about_pre_title }}</UIBlockTitle>
      <UITitle level="1" :text="page.about_title" class="mb-10"></UITitle>

      <div class="relative pl-6 md:pl-0">
        <div class="grid md:grid-cols-3 mb-3 text-greyOnNavy relative">
          <div class="mb-8 md:mb-0 about-point first">
            <div class="md:h-20">
              <SVGFeature1></SVGFeature1>
            </div>
            <div class="pt-4 pr-5 track-pointer md:pr-12 md:max-w-[330px]">
              <p>
                Umee is a layer one blockchain for cross chain communication and
                interoperability, built on the Cosmos SDK and powered by
                Tendermint Consensus along with a self sovereign validator
                network.
              </p>
            </div>
          </div>
          <div class="mb-8 md:mb-0 about-point second">
            <div class="md:h-20">
              <SVGFeature2></SVGFeature2>
            </div>
            <div class="pt-4 pr-5 track-pointer md:pr-12 md:max-w-[330px]">
              <p>
                Interoperability is achieved using Inter-Blockchain
                Communication protocol (IBC), Gravity bridge, and decentralized
                infrastructure for creating a universal cross chain DeFi hub
                toward expanding the crypto ecosystem.
              </p>
            </div>
          </div>
          <div class="mb-8 md:mb-0 about-point third">
            <div class="md:h-20">
              <SVGFeature3></SVGFeature3>
            </div>
            <div class="pt-4 pr-5 track-pointer md:pr-12 md:max-w-[330px]">
              <p>
                A DeFi platform designed towards integrating with money legos,
                that interconnects crypto markets across networks, allows for
                the development of open finance innovation including Multi-chain
                Staking, Interchain Leverage, and Cross Chain Interest rates.
              </p>
            </div>
          </div>
        </div>
        <div
          class="track absolute top-0 left-0 bottom-0 w-px bg-darkGreyOnNavy md:bottom-auto md:top-[78px] md:left-0 md:w-full md:border border-solid border-darkGreyOnNavy"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="grid grid-cols-3 mb-8">
        <div class="pt-4 pr-5"></div>
        <div class="pt-4 pr-5"></div>
        <div class="pt-4 pr-5"></div>
      </div>

      <UIButtonLinkInverse
        text="View Protocol Docs"
        link="https://docs.umee.cc/umee/"
        target="_blank"
      ></UIButtonLinkInverse>
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
.track div {
  @apply absolute hidden top-[-3px] w-[5px] h-[5px] rounded-[5px] bg-darkGreyOnNavy;
}

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
  @apply bg-darkGreyOnNavy w-[5px] h-[5px] rounded-[5px] left-[-1.625rem] top-[1.5rem] absolute;
}

@media screen(md) {
  .track-pointer::before {
    @apply hidden;
  }
}
</style>
