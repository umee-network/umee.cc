<template>
  <div class="container mx-auto lg:pb-16">
    <div class="grid lg:grid-cols-2 gap-x-12 gap-y-10">
      <div>
        <UINavigationMainSectionHeading>Socials</UINavigationMainSectionHeading>

        <div class="grid lg:grid-cols-2 gap-x-12">
          <ul>
            <UINavigationMainItem link="https://x.com/ux_xyz"
              >X</UINavigationMainItem
            >
            <UINavigationMainItem link="https://discord.com/invite/uxchain"
              >Discord</UINavigationMainItem
            >
            <UINavigationMainItem link="https://t.me/uxuxchain"
              >Telegram</UINavigationMainItem
            >
          </ul>
          <ul class="text-xl">
            <UINavigationMainItem link="https://medium.com/umeeblog"
              >Medium</UINavigationMainItem
            >
            <UINavigationMainItem
              link="https://www.youtube.com/channel/UCNNeflvj43QylhjvssqdIHQ/videos"
              >YouTube</UINavigationMainItem
            >
            <UINavigationMainItem
              link="https://www.reddit.com/r/UmeeCrossChain/"
              >Reddit</UINavigationMainItem
            >
          </ul>
        </div>
      </div>
      <div>
        <UINavigationMainSectionHeading
          >Governance</UINavigationMainSectionHeading
        >
        <ul>
          <UINavigationMainItem
            link="https://learning.ux.xyz/governance/"
            description="Learn how UX's governance processes work"
            >Community Governance</UINavigationMainItem
          >
          <UINavigationMainItem
            link="https://commonwealth.im/ux/"
            description="Join the conversation to help determine UX's future"
            >Governance Forum</UINavigationMainItem
          >
          <UINavigationMainItem
            link="https://wallet.keplr.app/#/umee/governance"
            description="Vote on live governance proposals here"
            >Voting Dashboard</UINavigationMainItem
          >
        </ul>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 gap-x-12 gap-y-6 mt-12">
      <div>
        <UINavigationMainSectionHeading>DAOs</UINavigationMainSectionHeading>
        <ul>
          <UINavigationMainItem
            link="https://learning.ux.xyz/governance/validator-dao/overview.html"
            description="The DAO that governs UX's delegation decisions"
            >Validator DAO</UINavigationMainItem
          >
        </ul>
      </div>
    </div>
  </div>
</template>
