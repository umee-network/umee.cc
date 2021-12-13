<template>
  <div class="bg-navy text-white pt-11 md:pt-10 relative">
    <div class="container pb-8 lg:pb-16">
      <div class="grid grid-cols-12 gap-x-8">
        <div class="col-span-12 md:col-span-4 mb-6 md:mb-0">
          <SVGUmeeLogo class="mb-3 max-w-[162px]"></SVGUmeeLogo>
          <p class="text-midGreyOnNavy mb-5 max-w-[245px]">
            Join us in building the future of cross chain DeFi!
          </p>
          <div
            class="
              flex flex-row
              gap-2
              md:grid md:gap-y-3 md:grid-cols-3
              lg:grid-cols-6
            "
          >
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
        <div class="col-span-12 md:col-span-6">
          <div class="grid grid-cols-12 text-xl">
            <div class="col-span-6 mb-6 md:mb-0 md:col-span-4">
              <UIBlockTitle>Protocol</UIBlockTitle>
              <nav>
                <ul class="mt-3 lg:mt-6">
                  <UIFooterLink to="">Apps</UIFooterLink>
                  <UIFooterLink to="">Markets</UIFooterLink>
                </ul>
              </nav>
            </div>
            <div class="col-span-6 mb-6 md:mb-0 md:col-span-4">
              <UIBlockTitle>Developers</UIBlockTitle>
              <nav>
                <ul class="mt-3 lg:mt-6">
                  <UIFooterLink to="https://docs.umee.cc/umee/"
                    >Docs</UIFooterLink
                  >
                  <UIFooterLink to="https://github.com/umee-network"
                    >Github</UIFooterLink
                  >
                </ul>
              </nav>
            </div>
            <div class="col-span-6 mb-6 md:mb-0 md:col-span-4">
              <UIBlockTitle>Support</UIBlockTitle>
              <nav>
                <ul class="mt-3 lg:mt-6">
                  <UIFooterLink to="/faqs">FAQ</UIFooterLink>
                  <UIFooterLink to="">Branding Kit</UIFooterLink>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-2">
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
      class="
        py-4
        text-midGreyOnNavy
        border-t border-solid border-darkGreyOnNavy
      "
    >
      <div class="container md:text-right">
        <p>
          &copy; Umee {{ currentDate.getFullYear() }}
          <!-- <NuxtLink class="ml-5 text-white" to="/privacy">Privacy</NuxtLink> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentDate() {
      return new Date()
    },
  },
}
</script>
