<template>
  <div class="pt-16 md:pt-28">
    <div class="container">
      <div class="grid md:grid-cols-12 md:gap-12 lg:gap-16">
        <div
          class="hidden md:block col-span-4 relative pointer-events-none"
        ></div>
        <div class="col-span-8">
          <div
            id="sectionAdora"
            class="border-b border-darkGreyOnNavy pb-6 mb-12 md:pb-10 md:mb-20"
          >
            <div class="grid grid-cols-12 gap-12">
              <div class="col-span-8">
                <h2 class="text-[7.5rem] font-serif leading-[0.75] mb-6">
                  Hello Adora!
                </h2>
                <div class="prose prose-xl mb-10">
                  <p>
                    Meet Adora, an adorable Adorabilis (Google it!) who helps us
                    spread our message and brings a huge dollop of cuteness to
                    our brand.
                  </p>
                </div>
                <ButtonLink
                  link="https://github.com/umee-network"
                  target="_blank"
                  ><span class="align-middle">Download Adora</span>
                  <SVGLinkDownload class="ml-3"
                /></ButtonLink>
              </div>
              <div class="col-span-4">
                <img
                  src="~/assets/images/brand-adora.png"
                  alt="Adora winking"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
