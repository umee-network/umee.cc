<template>
  <div class="container mx-auto lg:pb-16">
    <div class="grid lg:grid-cols-2 gap-x-12 gap-y-10">
      <div>
        <UINavigationMainSectionHeading
          >Developers</UINavigationMainSectionHeading
        >
        <ul>
          <UINavigationMainItem
            link="https://github.com/PineStreetLabs/nebula"
            description="Build wallet applications on Umee"
            >Nebula Wallet CLI</UINavigationMainItem
          >
          <UINavigationMainItem
            link="https://github.com/umee-network/peggo"
            description="Umee's Gravity Bridge orchestrator"
            >Umee Peggo Implementation</UINavigationMainItem
          >
          <UINavigationMainItem
            link="https://github.com/umee-network/liquidator"
            description="A liquidator tool for Umee's native leverage protocol"
            >Umee Liquidator Toolkit</UINavigationMainItem
          >
        </ul>
      </div>
      <div>
        <UINavigationMainSectionHeading
          >Tutorials</UINavigationMainSectionHeading
        >
        <div class="grid grid-cols-2 md:gap-6">
          <ul>
            <UINavigationMainItem
              link="https://umeeversity.umee.cc/developers/"
              description="Build in the Umee ecosystem"
              >Developer Docs</UINavigationMainItem
            >
            <UINavigationMainItem
              link="https://umeeversity.umee.cc/validators/"
              description="Learn how to run a validator on Umee"
              >Validator Docs</UINavigationMainItem
            >
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
