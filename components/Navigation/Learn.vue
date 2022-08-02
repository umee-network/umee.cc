<template>
  <div class="container mx-auto lg:pb-16">
    <div class="grid lg:grid-cols-2 gap-x-12 gap-y-10">
      <div>
        <div
          class="text-xs uppercase tracking-widest border-b border-darkGreyOnNavy dark:text-navy mb-5 pb-1"
        >
          Discover
        </div>
        <ul class="text-xl">
          <li>
            <a
              href="https://umeeversity.umee.cc/overview/"
              target="_blank"
              class="inline-block py-1.5 hover:underline"
              >About Umee</a
            >
          </li>
          <li>
            <a
              href="https://umeeversity.umee.cc/users/blockchain-basics/"
              target="_blank"
              class="inline-block py-1.5 hover:underline"
              >Blockchain Basics</a
            >
          </li>
          <li>
            <NuxtLink
              to="/blog"
              @click.native="closeActions"
              class="inline-block py-1.5 hover:underline"
              >Blog</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div>
        <div
          class="text-xs uppercase tracking-widest border-b border-darkGreyOnNavy mb-5 pb-1"
        >
          Guides
        </div>
        <div class="grid lg:grid-cols-2">
          <ul class="text-xl">
            <li>
              <a
                href="https://umeeversity.umee.cc/users/getting-started/creating-wallet.html"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Creating a Wallet</a
              >
            </li>
            <li>
              <a
                href="https://umeeversity.umee.cc/users/getting-started/funding-wallet.html"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Funding a Wallet</a
              >
            </li>
            <li>
              <a
                href="https://umeeversity.umee.cc/users/staking-umee/staking-umee.html"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Staking Umee</a
              >
            </li>
          </ul>
          <ul class="text-xl">
            <li>
              <a
                href="https://umeeversity.umee.cc/users/using-the-web-app/transferring-tokens.html"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Transferring to Umee</a
              >
            </li>
            <li>
              <a
                href="https://umeeversity.umee.cc/users/using-the-web-app/supply-withdraw.html"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Lending with Umee</a
              >
            </li>
            <li>
              <a
                href="https://umeeversity.umee.cc/users/using-the-web-app/borrow-repay.html"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Borrowing with Umee</a
              >
            </li>
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
