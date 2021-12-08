<template>
  <div class="md:-mt-12">
    <div class="flex flex-col items-center">
      <div class="discover-more mb-3">
        <div class="discover-more-inner flex items-center justify-center">
          <img class="arrow" src="~/assets/images/arrow-down.svg" alt="More" />
        </div>
      </div>
      <span class="uppercase text-sm tracking-widest">Discover more</span>
    </div>
  </div>
</template>

<style scoped>
.discover-more {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 53px;
  border-radius: 53px;
  background: linear-gradient(to right, #fda9ff, #c9b8ff, #4dffe5);
}

.discover-more-inner {
  width: 49px;
  height: 49px;
  border-radius: 53px;
  background-color: #fff;
}

.arrow {
  animation-name: bounce;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}

@keyframes bounce {
  0% {
    transform: translateY(-4px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-4px);
  }
}
</style>