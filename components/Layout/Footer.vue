<template>
  <!-- zIndex and backfaceVisibility style addresses safari bug where flipping logos temporarily appear on top of the announcements panel-->
  <div
    :style="{ zIndex: '1', backfaceVisibility: 'hidden' }"
    class="bg-navy text-white pt-11 md:pt-10 relative dark:border-darkGreyOnNavy dark:border-t"
  >
    <div class="container pb-8 lg:pb-16">
      <div class="grid grid-cols-12 gap-x-8 mb-12">
        <div class="col-span-12 md:col-span-6 mb-6 md:mb-0">
          <SVGUmeeLogo color="light" class="mb-3 max-w-[162px]"></SVGUmeeLogo>
          <p class="text-midGreyOnNavy">
            Join us in building the future of cross chain DeFi!
          </p>
          <!-- <div class="flex flex-row gap-1.5 flex-wrap">
            <SVGSocialIcon
              name="medium"
              href="https://medium.com/umeeblog"
            ></SVGSocialIcon>
            <SVGSocialIcon
              name="twitter"
              href="https://twitter.com/Umee_CrossChain"
            ></SVGSocialIcon>
            <SVGSocialIcon
              name="discord"
              href="https://discord.gg/umee"
            ></SVGSocialIcon>
            <SVGSocialIcon
              name="github"
              href="https://github.com/umee-network"
            ></SVGSocialIcon>
            <SVGSocialIcon
              name="telegram"
              href="https://t.me/umeecrosschain"
            ></SVGSocialIcon>
            <SVGSocialIcon
              name="reddit"
              href="https://www.reddit.com/r/UmeeCrossChain"
            ></SVGSocialIcon>
          </div> -->
        </div>
        <div class="col-span-12 md:col-span-6 flex items-center justify-end">
          <UIButtonGradient class="w-full md:w-auto" href="https://app.umee.cc/"
            >Launch App</UIButtonGradient
          >
        </div>
      </div>
      <div>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-16 lg:gap-x-20 flex-wrap lg:justify-center"
        >
          <div>
            <UIBlockTitle class="mb-6 md:mb-8">Learn</UIBlockTitle>
            <UIFooterTitle>Discover</UIFooterTitle>
            <ul class="mb-6 md:mb-8">
              <UIFooterLink to="https://umeeversity.umee.cc/overview/"
                >About Umee</UIFooterLink
              >
              <UIFooterLink
                to="https://umeeversity.umee.cc/users/blockchain-basics/"
                >Blockchain Basics</UIFooterLink
              >
              <UIFooterLink to="/careers">Careers</UIFooterLink>
              <UIFooterLink to="/blog">Blog</UIFooterLink>
            </ul>
            <UIFooterTitle>Guides</UIFooterTitle>
            <ul>
              <UIFooterLink
                to="https://umeeversity.umee.cc/users/getting-started/creating-wallet.html"
                >Creating a Wallet</UIFooterLink
              >
              <UIFooterLink
                to="https://umeeversity.umee.cc/users/getting-started/funding-wallet.html"
                >Funding a Wallet</UIFooterLink
              >
              <UIFooterLink
                to="https://umeeversity.umee.cc/users/staking-umee/staking-umee.html"
                >Staking Umee</UIFooterLink
              >
              <UIFooterLink
                to="https://umeeversity.umee.cc/users/using-the-web-app/transferring-tokens.html"
                >Transferring to Umee</UIFooterLink
              >
              <UIFooterLink
                to="https://umeeversity.umee.cc/users/using-the-web-app/supply-withdraw.html"
                >Lending with Umee</UIFooterLink
              >
              <UIFooterLink
                to="https://umeeversity.umee.cc/users/using-the-web-app/borrow-repay.html"
                >Borrowing with Umee</UIFooterLink
              >
            </ul>
          </div>
          <div>
            <UIBlockTitle class="mb-6 md:mb-8">Build</UIBlockTitle>
            <UIFooterTitle>Developers</UIFooterTitle>
            <ul class="mb-6 md:mb-8">
              <UIFooterLink to="https://github.com/PineStreetLabs/nebula"
                >Nebula Wallet CLI</UIFooterLink
              >
              <UIFooterLink to="https://github.com/umee-network/peggo"
                >Umee Peggo Implementation</UIFooterLink
              >
              <UIFooterLink to="https://github.com/umee-network/liquidator"
                >Umee Liquidator Toolkit</UIFooterLink
              >
            </ul>
            <UIFooterTitle>Tutorials</UIFooterTitle>
            <ul>
              <UIFooterLink to="https://umeeversity.umee.cc/developers/"
                >Developer Docs</UIFooterLink
              >
              <UIFooterLink to="https://umeeversity.umee.cc/validators/"
                >Validator Docs</UIFooterLink
              >
            </ul>
          </div>
          <div>
            <UIBlockTitle class="mb-6 md:mb-8">Network</UIBlockTitle>
            <UIFooterTitle>Block Explorers</UIFooterTitle>
            <ul class="mb-6 md:mb-8">
              <UIFooterLink to="https://www.mintscan.io/umee"
                >Mintscan</UIFooterLink
              >
              <UIFooterLink to="https://umee.explorers.guru/"
                >NodesGuru</UIFooterLink
              >
              <UIFooterLink to="https://ping.pub/umee">Ping.pub</UIFooterLink>
              <UIFooterLink to="https://atomscan.com/umee"
                >ATOMScan</UIFooterLink
              >
            </ul>
            <UIFooterTitle>Validators</UIFooterTitle>
            <ul>
              <UIFooterLink to="https://discord.com/invite/umee"
                >Validator Community</UIFooterLink
              >
              <UIFooterLink to="https://umeeversity.umee.cc/validators/"
                >Validator Documentation</UIFooterLink
              >
            </ul>
          </div>
          <div>
            <UIBlockTitle class="mb-6 md:mb-8">Community</UIBlockTitle>
            <UIFooterTitle>Socials</UIFooterTitle>
            <ul class="mb-6 md:mb-8">
              <UIFooterLink to="https://twitter.com/Umee_CrossChain"
                >Twitter</UIFooterLink
              >
              <UIFooterLink to="https://discord.com/invite/umee"
                >Discord</UIFooterLink
              >
              <UIFooterLink to="https://t.me/umeecrosschain"
                >Telegram</UIFooterLink
              >
              <UIFooterLink to="https://medium.com/umeeblog"
                >Medium</UIFooterLink
              >
              <UIFooterLink
                to="https://www.youtube.com/channel/UCNNeflvj43QylhjvssqdIHQ/videos"
                >YouTube</UIFooterLink
              >
              <UIFooterLink to="https://www.reddit.com/r/UmeeCrossChain/"
                >Reddit</UIFooterLink
              >
            </ul>
            <UIFooterTitle>Governance</UIFooterTitle>
            <ul class="mb-6 md:mb-8">
              <UIFooterLink
                to="https://docs.umee.cc/governance/governance-overview/governance"
                >Community Governance</UIFooterLink
              >
              <UIFooterLink to="https://commonwealth.im/umee/"
                >Governance Forum</UIFooterLink
              >
              <UIFooterLink to="https://wallet.keplr.app/#/umee/governance"
                >Voting Dashboard</UIFooterLink
              >
            </ul>
            <UIFooterTitle>DAOS</UIFooterTitle>
            <ul>
              <UIFooterLink to="https://docs.umee.cc/umee-validator-dao/"
                >Validator DAO</UIFooterLink
              >
            </ul>
          </div>
          <div>
            <UIBlockTitle class="mb-6 md:mb-8">Ecosystem</UIBlockTitle>
            <UIFooterTitle>APPS</UIFooterTitle>
            <ul class="mb-6 md:mb-8">
              <UIFooterLink
                to="https://github.com/umee-network/cosmos-multisig-ui"
                >Cosmos Multisig App</UIFooterLink
              >
              <UIFooterLink to="https://app.umee.cc/#/markets"
                >Umee&lt;&gt;Ethereum Bridge</UIFooterLink
              >
            </ul>
            <UIBlockTitle class="mb-6 md:mb-8">Support</UIBlockTitle>
            <ul>
              <UIFooterLink to="/faqs">FAQs</UIFooterLink>
              <UIFooterLink to="/brand">Brand Kit</UIFooterLink>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="py-4 text-midGreyOnNavy border-t border-solid border-darkGreyOnNavy"
    >
      <div class="container md:text-right">
        <div class="flex flex-row flex-wrap gap-x-6 gap-y-3">
          <div>&copy; Umee {{ year }}</div>
          <NuxtLink
            class="text-midGreyOnNavy whitespace-nowrap inline-block"
            to="/privacy"
            >Privacy</NuxtLink
          >
          <NuxtLink
            class="text-midGreyOnNavy whitespace-nowrap inline-block"
            to="/disclaimer"
            >Disclaimer</NuxtLink
          >
          <NuxtLink
            class="text-midGreyOnNavy whitespace-nowrap inline-block"
            to="/terms-of-use"
            >Terms of use</NuxtLink
          >
        </div>
      </div>
    </div>
    <HomeAnnouncement :page="page" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: null,
      page: null,
    }
  },
  async fetch() {
    this.page = await this.$content('pages/home').fetch()
  },
  mounted() {
    const today = new Date()
    this.year = today.getFullYear()
  },
}
</script>
