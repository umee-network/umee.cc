<template>
  <div class="container mx-auto lg:pb-16">
    <div class="grid lg:grid-cols-2 gap-x-12 gap-y-10">
      <div>
        <UINavigationMainSectionHeading
          >Discover</UINavigationMainSectionHeading
        >
        <ul>
          <UINavigationMainItem
            link="https://umeeversity.umee.cc/overview/"
            description="Learn about Umee and our mission"
            >About Umee</UINavigationMainItem
          >
          <UINavigationMainItem
            link="https://umeeversity.umee.cc/users/blockchain-basics/"
            description="Essential information every crypto user should
              know"
            >Blockchain Basics</UINavigationMainItem
          >
          <UINavigationMainItem
            link="/blog"
            description="Important updates, educational content, and community
              events"
            @click.native="closeActions"
            >Blog</UINavigationMainItem
          >
          <UINavigationMainItem
            link="/careers"
            description="Apply to join Umee"
            @click.native="closeActions"
            >Careers</UINavigationMainItem
          >
        </ul>
      </div>
      <div>
        <UINavigationMainSectionHeading>Guides</UINavigationMainSectionHeading>
        <div class="grid lg:grid-cols-2 md:gap-6">
          <ul>
            <UINavigationMainItem
              link="https://umeeversity.umee.cc/users/getting-started/creating-wallet.html"
              description="Learn how to create an interchain wallet"
              >Creating a Wallet</UINavigationMainItem
            >
            <UINavigationMainItem
              link="https://umeeversity.umee.cc/users/getting-started/funding-wallet.html"
              description="Fund your wallet with tokens to use on Umee"
              >Funding a Wallet</UINavigationMainItem
            >
            <UINavigationMainItem
              link="https://umeeversity.umee.cc/users/staking-umee/staking-umee.html"
              description="Secure the blockchain and earn staking yield"
              >Staking Umee</UINavigationMainItem
            >
          </ul>
          <ul>
            <UINavigationMainItem
              link="https://umeeversity.umee.cc/users/using-the-web-app/transferring-tokens.html"
              description="Move tokens on to Umee to put them to use"
              >Transferring to Umee</UINavigationMainItem
            >
            <UINavigationMainItem
              link="https://umeeversity.umee.cc/users/using-the-web-app/supply-withdraw.html"
              description="Supply tokens on Umee to earn lending yield"
              >Lending with Umee</UINavigationMainItem
            >
            <UINavigationMainItem
              link="https://umeeversity.umee.cc/users/using-the-web-app/borrow-repay.html"
              description="Borrow cross chain tokens with Umee"
              >Borrowing with Umee</UINavigationMainItem
            >
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeActions() {
      this.$parent.closeMobileMenu()
    },
  },
}
</script>
