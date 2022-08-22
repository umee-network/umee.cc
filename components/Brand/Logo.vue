<template>
  <div class="bg-navy text-white">
    <div class="container">
      <div class="grid md:grid-cols-12 md:gap-12 lg:gap-16">
        <div
          class="hidden md:block col-span-4 relative pointer-events-none"
        ></div>
        <div class="col-span-8">
          <div
            id="sectionLogo"
            class="border-b border-darkGreyOnNavy pb-6 mb-12 md:pb-10 md:mb-20"
          >
            <UITitle level="2" text="Logo" class="mb-3" />
            <div class="prose text-midGreyOnNavy prose-xl leading-normal mb-12">
              <p>
                Our logo is the cornerstone of our brand, comprised of a
                distinctive 'U' monogram, and logotype. Our monogram can also be
                used as a standalone asset. Download the logo in all formats
                below:
              </p>
            </div>
            <UIButtonLinkInverse link="https://www.google.com"
              >Download logos <SVGLinkDownload class="ml-3"
            /></UIButtonLinkInverse>

            <div class="grid grid-cols-12 gap-8 mt-20">
              <div class="col-span-8">
                <img
                  src="~/assets/images/brand-logo-on-white.png"
                  class="w-full h-auto"
                />
                <p class="mt-1.5 text-midGreyOnNavy">On white</p>
              </div>
              <div class="col-span-4 flex justify-between flex-col">
                <div>
                  <img
                    src="~/assets/images/brand-logo-on-navy.png"
                    class="w-full h-auto"
                  />
                  <p class="mt-1.5 mb-3 text-midGreyOnNavy">On navy</p>
                </div>
                <div>
                  <img
                    src="~/assets/images/brand-u-monogram.png"
                    class="w-full h-auto"
                  />
                  <p class="mt-1.5 text-midGreyOnNavy">'U' Monogram</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-12 gap-8 my-20">
              <div class="col-span-4">
                <UITitle
                  level="3"
                  text="Safe zone"
                  class="mb-2"
                  fontSizeClass="text-xxl"
                />
                <div class="prose text-midGreyOnNavy">
                  <p>
                    The logo's safe zone is equivalent to the height of "u" on
                    all sizes:
                  </p>
                </div>
              </div>

              <div class="col-span-8 flex justify-end">
                <img
                  src="~/assets/images/brand-safe-zone.png"
                  alt=""
                  class="w-full h-auto max-w-[26rem]"
                />
              </div>
            </div>

            <UITitle
              level="3"
              text="Avoid"
              class="mb-2"
              fontSizeClass="text-xxl"
            />
            <div class="prose text-midGreyOnNavy">
              <p>
                We're quite protective over our logo and how it's used. Please
                avoid doing any of the following:
              </p>
            </div>

            <div
              class="flex justify-center gap-6 flex-col md:grid md:grid-cols-3 my-10"
            >
              <div class="flex justify-center">
                <div>
                  <img
                    src="~/assets/images/brand-avoid-rotating.png"
                    alt=""
                    class="mb-2"
                  />
                  <p class="text-midGreyOnNavy">Avoid rotating our logo</p>
                </div>
              </div>
              <div class="flex justify-center">
                <div>
                  <img
                    src="~/assets/images/brand-avoid-squashing.png"
                    alt=""
                    class="mb-2"
                  />
                  <p class="text-midGreyOnNavy">Avoid squashing our logo</p>
                </div>
              </div>
              <div class="flex justify-center">
                <div>
                  <img
                    src="~/assets/images/brand-avoid-color-changing.png"
                    class="mb-2"
                    alt=""
                  />
                  <p class="text-midGreyOnNavy">
                    Avoid changing the color of our logo
                  </p>
                </div>
              </div>
              <div class="flex justify-center">
                <div>
                  <img
                    src="~/assets/images/brand-avoid-standalone.png"
                    class="mb-2"
                    alt=""
                  />
                  <p class="text-midGreyOnNavy">
                    Avoid using the logotype as a standalone element
                  </p>
                </div>
              </div>
              <div class="flex justify-center">
                <div>
                  <img
                    src="~/assets/images/brand-avoid-logo-sentence.png"
                    class="mb-2"
                    alt=""
                  />
                  <p class="text-midGreyOnNavy">
                    Avoid using the logo within a sentence
                  </p>
                </div>
              </div>
              <div class="flex justify-center">
                <div>
                  <img
                    src="~/assets/images/brand-avoid-colored-backgrounds.png"
                    class="mb-2"
                    alt=""
                  />
                  <p class="text-midGreyOnNavy">
                    Avoid placing the logo on unapproved background colors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
