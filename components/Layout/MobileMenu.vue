<template>
  <div
    class="
      fixed
      top-0
      left-0
      right-0
      bottom-0
      bg-navy
      text-white
      z-10
      flex flex-col
      justify-between
    "
  >
    <div>
      <div
        class="
          container
          mx-auto
          h-[95px]
          py-3
          flex
          justify-between
          items-center
        "
      >
        <SVGUmeeLogo class="w-[130px] md:w-[162px]"></SVGUmeeLogo>
        <a class="text-xl cursor-pointer" @click="closeMobileMenu">
          Close
          <svg
            class="inline-block -top-px ml-2 relative cursor-pointer"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M0.5 13.5L13.5 0.5M0.5 0.5L13.5 13.5L0.5 0.5Z"
              stroke="white"
              stroke-width="1.3"
              stroke-miterlimit="10"
            />
          </svg>
        </a>
      </div>
      <div class="container mt-4">
        <nav class="text-[1.625rem] md:pl-6 md:pl-6">
          <ul>
            <li><NuxtLink to="/" class="py-1 block">Markets</NuxtLink></li>
            <li><NuxtLink to="/" class="py-1 block">Governance</NuxtLink></li>
            <li>
              <a
                class="cursor-pointer py-1 block flex justify-between"
                data-display-toggle
                @click="toggleSubMenu()"
              >
                <span>More</span>
                <span
                  ><svg
                    class="inline-block"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      v-if="!subMenu"
                      d="M7.5 0V15"
                      stroke="#ffffff"
                      stroke-width="1.3"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M0 7.5H15"
                      stroke="#ffffff"
                      stroke-width="1.3"
                      stroke-miterlimit="10"
                    />
                  </svg> </span
              ></a>
              <transition name="fade" appear mode="out-in">
                <div
                  v-if="subMenu"
                  data-slide="moreMenu"
                  class="
                    text-midGreyOnNavy text-[1.0625rem]
                    mt-2
                    grid grid-cols-2
                  "
                >
                  <ul>
                    <li>
                      <a
                        class="block py-1"
                        target="_blank"
                        href="https://docs.umee.cc/umee/"
                        >Docs</a
                      >
                    </li>
                    <li>
                      <a
                        class="block py-1"
                        href="https://umee.cc/umee-whitepaper/"
                        target="_blank"
                        >Whitepaper</a
                      >
                    </li>
                    <li>
                      <NuxtLink to="/faqs" class="block py-1">FAQs</NuxtLink>
                    </li>
                    <li>
                      <a
                        class="block py-1"
                        href="https://drive.google.com/drive/folders/1p81diWQbTo6eXfmUPAicKKyEZJwqyAvM?usp=sharing"
                        target="_blank"
                        >Media Kit</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://medium.com/umeeblog"
                        class="block py-1"
                        target="_blank"
                        >Blog</a
                      >
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        class="block py-1"
                        href="https://twitter.com/Umee_CrossChain"
                        target="_blank"
                        >Twitter</a
                      >
                    </li>
                    <li>
                      <a
                        class="block py-1"
                        href="https://discord.com/invite/AtbECmnt8M"
                        target="_blank"
                        >Discord</a
                      >
                    </li>
                    <li>
                      <a
                        class="block py-1"
                        href="https://github.com/umee-network"
                        target="_blank"
                        >Github</a
                      >
                    </li>
                    <li>
                      <a
                        class="block py-1"
                        href="https://t.me/umeecrosschain"
                        target="_blank"
                        >Telegram</a
                      >
                    </li>
                    <li>
                      <a
                        class="block py-1"
                        href="https://www.reddit.com/r/UmeeCrossChain/"
                        target="_blank"
                        >Reddit</a
                      >
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div>
      <div class="container pb-5">
        <UIButtonGradient class="w-full">Launch App</UIButtonGradient>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subMenu: false,
    }
  },
  methods: {
    closeMobileMenu() {
      this.$parent.showMobileMenu()
    },
    toggleSubMenu() {
      this.subMenu = !this.subMenu
    },
  },
}
</script>
