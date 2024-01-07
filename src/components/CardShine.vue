<template>
  <div class="relative w-full h-full overflow-hidden">
    <div class="absolute w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent slide">
    </div>
  </div>
</template>

<style scoped>
.slide {
  animation: slide 1000ms linear infinite;
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