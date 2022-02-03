<template>
  <div class="bg-navy text-white pt-11 md:pt-10 relative">
    <div class="container pb-8 lg:pb-16">
      <div class="grid grid-cols-12 gap-x-8">
        <div class="col-span-12 md:col-span-4 lg:col-span-3 mb-6 md:mb-0">
          <SVGUmeeLogo class="mb-3 max-w-[162px]"></SVGUmeeLogo>
          <p class="text-midGreyOnNavy mb-5 max-w-[245px]">
            Join us in building the future of cross chain DeFi!
          </p>
          <div class="flex flex-row gap-1.5 flex-wrap">
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
              href="https://discord.com/invite/AtbECmnt8M"
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
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-7">
          <div
            class="flex gap-y-8 gap-x-16 lg:gap-x-20 flex-wrap lg:justify-center"
          >
            <div>
              <UIBlockTitle>Protocol</UIBlockTitle>
              <nav>
                <ul class="mt-3 lg:mt-6">
                  <UIFooterLink to="">Markets</UIFooterLink>
                  <UIFooterLink to="https://github.com/umee-network"
                    >Github</UIFooterLink
                  >
                </ul>
              </nav>
            </div>
            <div>
              <UIBlockTitle>Documentation</UIBlockTitle>
              <nav>
                <ul class="mt-3 lg:mt-6">
                  <UIFooterLink to="https://docs.umee.cc/umee/"
                    >Docs</UIFooterLink
                  >
                  <UIFooterLink to="/faqs">FAQ</UIFooterLink>
                </ul>
              </nav>
            </div>
            <div>
              <UIBlockTitle>Connect</UIBlockTitle>
              <nav>
                <ul class="mt-3 lg:mt-6">
                  <!-- <UIFooterLink to="/">Jobs</UIFooterLink> -->
                  <UIFooterLink
                    to="https://drive.google.com/drive/folders/1A9G2HM5RAka4FLGyVvRC4NeazpAYBh7Z?usp=sharing"
                    >Media Kit</UIFooterLink
                  >
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-2 mt-6 md:mt-0">
          <UIButtonGradient class="w-full hidden md:block lg:hidden"
            >App</UIButtonGradient
          >
          <UIButtonGradient class="w-full md:hidden lg:block"
            >Launch App</UIButtonGradient
          >
        </div>
      </div>
    </div>

    <div
      class="py-4 text-midGreyOnNavy border-t border-solid border-darkGreyOnNavy"
    >
      <div class="container md:text-right">
        <p>
          &copy; Umee {{ year }}
          <!-- <NuxtLink class="ml-5 text-midGreyOnNavy" to="/privacy">Privacy</NuxtLink> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: null,
    }
  },
  mounted() {
    const today = new Date()
    this.year = today.getFullYear()
  },
}
</script>
