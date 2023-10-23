<template>
  <div class="container mx-auto lg:pb-16">
    <div class="grid lg:grid-cols-2 gap-x-12 gap-y-10">
      <div>
        <UINavigationMainSectionHeading>Socials</UINavigationMainSectionHeading>

        <div class="grid lg:grid-cols-2 gap-x-12">
          <ul>
            <UINavigationMainItem link="https://x.com/Umee_CrossChain"
              >X</UINavigationMainItem
            >
            <UINavigationMainItem link="https://discord.com/invite/uxchaiun"
              >Discord</UINavigationMainItem
            >
            <UINavigationMainItem link="https://t.me/umeecrosschain"
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
            link="https://umeeversity.umee.cc/governance/"
            description="Learn how UX's governance processes work"
            >Community Governance</UINavigationMainItem
          >
          <UINavigationMainItem
            link="https://gov.umee.cc/"
            description="Join the conversation to help determine UX's future"
            >Governance Forum</UINavigationMainItem
          >
          <UINavigationMainItem
            link="https://app.umee.cc/#/governance"
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
            link="https://umeeversity.umee.cc/governance/validator-dao/overview.html"
            description="The DAO that governs UX's delegation decisions"
            >Validator DAO</UINavigationMainItem
          >
        </ul>
      </div>
    </div>
  </div>
</template>
