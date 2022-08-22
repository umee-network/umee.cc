<template>
  <div class="pt-16 md:pt-28">
    <div class="container">
      <div class="grid md:grid-cols-12 md:gap-12 lg:gap-16">
        <div
          class="hidden md:block col-span-4 relative pointer-events-none"
        ></div>
        <div class="col-span-8">
          <div id="sectionAdora" class="pb-6 mb-12 md:pb-10 md:mb-20">
            <div
              class="md:grid md:grid-cols-12 lg:gap-12 mb-10 md:mb-20 relative pt-[10rem] md:pt-0"
            >
              <div class="md:col-span-7">
                <h2
                  class="text-[5.125rem] lg:text-[7.5rem] font-serif leading-[0.75] mb-6"
                >
                  Hello<br />Adora!
                </h2>
                <div class="prose prose-xl text-midGreyOnWhite mb-10">
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
              <div class="absolute top-0 right-0 md:relative md:col-span-5">
                <img
                  src="~/assets/images/brand-adora.png"
                  class="w-full h-auto max-w-[10rem] md:max-w-none"
                  alt="Adora winking"
                />
              </div>
            </div>

            <div>
              <UIBlockTitle class="mb-4">Facial expressions</UIBlockTitle>
              <div class="prose prose-lg text-midGreyOnWhite">
                <p>
                  Like the rest of us, Adora experiences a range of emotions and
                  they have a number of facial expressions as a result:
                </p>
              </div>

              <div class="grid grid-cols-3 gap-6 mt-10 mb-10 md:mb-20">
                <div>
                  <img
                    src="~/assets/images/brand-adora-face-happy.png"
                    alt=""
                  />
                  <div class="text-base mt-2 text-midGreyOnNavy">
                    Feeling happy
                  </div>
                </div>
                <div>
                  <img
                    src="~/assets/images/brand-adora-face-flirty.png"
                    alt=""
                  />
                  <div class="text-base mt-2 text-midGreyOnNavy">
                    Feeling flirty
                  </div>
                </div>
                <div>
                  <img
                    src="~/assets/images/brand-adora-face-inspired.png"
                    alt=""
                  />
                  <div class="text-base mt-2 text-midGreyOnNavy">
                    Feeling inspired
                  </div>
                </div>
                <div>
                  <img src="~/assets/images/brand-adora-face-sad.png" alt="" />
                  <div class="text-base mt-2 text-midGreyOnNavy">
                    Feeling sad
                  </div>
                </div>
                <div>
                  <img
                    src="~/assets/images/brand-adora-face-amazed.png"
                    alt=""
                  />
                  <div class="text-base mt-2 text-midGreyOnNavy">
                    Feeling amazed
                  </div>
                </div>
                <div>
                  <img
                    src="~/assets/images/brand-adora-face-cheeky.png"
                    alt=""
                  />
                  <div class="text-base mt-2 text-midGreyOnNavy">
                    Feeling cheeky
                  </div>
                </div>
                <div>
                  <img
                    src="~/assets/images/brand-adora-face-shocked.png"
                    alt=""
                  />
                  <div class="text-base mt-2 text-midGreyOnNavy">
                    Feeling shocked
                  </div>
                </div>
                <div>
                  <img
                    src="~/assets/images/brand-adora-face-unimpressed.png"
                    alt=""
                  />
                  <div class="text-base mt-2 text-midGreyOnNavy">
                    Feeling unimpressed
                  </div>
                </div>
              </div>
            </div>

            <div class="my-10">
              <UIBlockTitle class="mb-4">Light/dark mode</UIBlockTitle>
              <div class="prose prose-lg text-midGreyOnWhite">
                <p>
                  Adora's one of those annnoying "early-bird" types, but also
                  enjoys a spot of night life too. We don't know how they do it:
                </p>
              </div>
              <div class="grid grid-cols-2 gap-6 mt-10 mb-20">
                <div>
                  <img
                    src="~/assets/images/brand-adora-light-mode.png"
                    alt=""
                  />
                  <div class="text-base mt-2 text-midGreyOnNavy">
                    Light mode
                  </div>
                </div>
                <div>
                  <img src="~/assets/images/brand-adora-dark-mode.png" alt="" />
                  <div class="text-base mt-2 text-midGreyOnNavy">Dark mode</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
