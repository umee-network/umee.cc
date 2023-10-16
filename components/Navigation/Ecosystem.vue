<template>
  <div class="container mx-auto lg:pb-16">
    <div class="grid grid-cols-1 gap-x-12 gap-y-10">
      <div>
        <div
          class="text-xs uppercase tracking-widest border-b border-darkGreyOnNavy dark:text-navy mb-5 pb-1"
        >
          Apps
        </div>
        <ul>
          <UINavigationMainItem
            link="https://github.com/umee-network/cosmos-multisig-ui"
            description="An ecosystem tool for multi-sig users in Cosmos"
            >Cosmos Multisig App</UINavigationMainItem
          >

          <UINavigationMainItem
            link="https://github.com/umee-network/peggo"
            description="UX's implementation of Gravity Bridge and it’s Orchestrator"
            >UX&lt;&gt;Ethereum Bridge</UINavigationMainItem
          >
          <UINavigationMainItem
            link="https://peggo.info/"
            description="Check Peggo health of the network and for each of the validators"
            >Peggo Health Stats</UINavigationMainItem
          >
          <UINavigationMainItem
            link="http://peggo-monitor.kingsuper.services:3001/"
            description="Handy tool to verify your Peggo status"
            >Peggo Status Checker</UINavigationMainItem
          >
        </ul>
      </div>
    </div>
  </div>
</template>
