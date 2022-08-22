<template>
  <div class="bg-navy text-white">
    <div class="container">
      <div class="grid md:grid-cols-12 md:gap-12 lg:gap-16">
        <div
          class="hidden md:block col-span-4 relative pointer-events-none"
        ></div>
        <div class="col-span-8">
          <div
            id="sectionColor"
            class="border-b border-darkGreyOnNavy pb-6 mb-12 md:pb-10 md:mb-20"
          >
            <UITitle level="2" text="Color" class="mb-3" />
            <div class="prose text-midGreyOnNavy prose-xl leading-normal mb-12">
              <p>
                Our brand palette is built on a foundation of three neutral
                colors (Navy, White and Light Grey) and supported by three
                accents which form our brand gradient:
              </p>
            </div>
            <div>
              <UIBlockTitle class="mb-6">Neutrals</UIBlockTitle>
              <div class="grid grid-cols-3 gap-6 mb-8">
                <div class="border border-darkGreyOnNavy rounded-xl p-5">
                  <div class="font-serif leading-none text-[1.75rem] mb-8">
                    Navy
                  </div>
                  <div>
                    RGB: 22, 24, 60<br />
                    HEX: #16183C
                  </div>
                </div>
                <div
                  class="border bg-white border-white text-navy rounded-xl p-5"
                >
                  <div class="font-serif leading-none text-[1.75rem] mb-8">
                    White
                  </div>
                  <div>
                    RGB: 255, 255, 255<br />
                    HEX: #FFFFFF
                  </div>
                </div>
                <div
                  class="border bg-lightGrey text-navy border-lightGrey rounded-xl p-5"
                >
                  <div class="font-serif leading-none text-[1.75rem] mb-8">
                    Light Grey
                  </div>
                  <div>
                    RGB: 234, 234, 234<br />
                    HEX: #EAEAEA
                  </div>
                </div>
              </div>
            </div>
            <div>
              <UIBlockTitle class="mb-6">Accents</UIBlockTitle>
              <div class="grid grid-cols-3 gap-6 mb-8">
                <div
                  class="border text-navy bg-pink border-pink rounded-xl p-5"
                >
                  <div class="font-serif leading-none text-[1.75rem] mb-8">
                    Pink
                  </div>
                  <div>
                    RGB: 253, 169, 255<br />
                    HEX: #FDA9FF
                  </div>
                </div>
                <div
                  class="border bg-purple border-purple text-navy rounded-xl p-5"
                >
                  <div class="font-serif leading-none text-[1.75rem] mb-8">
                    Purple
                  </div>
                  <div>
                    RGB: 201, 184, 255<br />
                    HEX: #C9B8FF
                  </div>
                </div>
                <div
                  class="border bg-aqua text-navy border-aqua rounded-xl p-5"
                >
                  <div class="font-serif leading-none text-[1.75rem] mb-8">
                    Aqua
                  </div>
                  <div>
                    RGB: 77, 255, 229<br />
                    HEX: #4DFFE5
                  </div>
                </div>
              </div>
            </div>
            <div>
              <UIBlockTitle class="mb-4">Brand gradient</UIBlockTitle>

              <div class="relative umee-gradient w-full h-[2.5rem] mt-[3rem]">
                <div
                  class="absolute top-1/2 h-[2px] -mt-[px] bg-white left-0 right-0"
                ></div>
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute -top-[2.5rem] left-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.871 0H0V25.871H9.70161L12.9355 29.1048L16.1693 25.871H25.871V0Z"
                    class="fill-pink"
                  />
                </svg>
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute -top-[2.5rem] left-[30%]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.871 0H0V25.871H9.70161L12.9355 29.1048L16.1693 25.871H25.871V0Z"
                    class="fill-purple"
                  />
                </svg>
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute -top-[2.5rem] right-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.871 0H0V25.871H9.70161L12.9355 29.1048L16.1693 25.871H25.871V0Z"
                    class="fill-aqua"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
