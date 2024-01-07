<template>
  <div class="relative w-full h-full overflow-hidden pointer-events-none">
    <div class="absolute w-full h-full bg-gradient-to-r from-transparent via-white/70 to-transparent slide">
    </div>
  </div>
</template>

<style scoped>
.slide {
  animation: slide 1000ms ease-in both;
}

@keyframes slide {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}
</style>