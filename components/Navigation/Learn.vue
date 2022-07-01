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
              href="https://docs.umee.cc/umee/umee-overview/what-is-umee"
              target="_blank"
              class="inline-block py-1.5 hover:underline"
              >About Umee</a
            >
          </li>
          <li>
            <a
              href="https://docs.umee.cc/umee/blockchain-basics/what-is-a-blockchain"
              target="_blank"
              class="inline-block py-1.5 hover:underline"
              >Blockchain Basics</a
            >
          </li>
          <li>
            <NuxtLink to="/blog" class="inline-block py-1.5 hover:underline"
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
                href="https://docs.umee.cc/user-guides/getting-started/creating-a-wallet"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Creating a Wallet</a
              >
            </li>
            <li>
              <a
                href="https://docs.umee.cc/user-guides/getting-started/funding-a-wallet"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Funding a Wallet</a
              >
            </li>
            <li>
              <a
                href="https://docs.umee.cc/user-guides/staking-umee/staking-umee"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Staking Umee</a
              >
            </li>
          </ul>
          <ul class="text-xl">
            <li>
              <a
                href="https://docs.umee.cc/user-guides/using-the-web-app/transferring-tokens"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Transferring to Umee</a
              >
            </li>
            <li>
              <a
                href="https://docs.umee.cc/user-guides/using-the-web-app/supplying-and-withdrawing"
                target="_blank"
                class="inline-block py-1.5 hover:underline"
                >Lending with Umee</a
              >
            </li>
            <li>
              <a
                href="https://docs.umee.cc/user-guides/using-the-web-app/borrowing-and-repaying"
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
