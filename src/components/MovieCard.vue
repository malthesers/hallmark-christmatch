<template>
  <article :class="[(movie.id === chosenMovie?.id || guessedMovies.includes(movie.title)) ? '' : 'flipped']"
    class="relative h-full preserve-3d duration-700 ease-in-out">
    <div class="absolute w-full h-full bg-black opacity-50"></div>
    <img :src="`src/assets/covers/${movie.cover}.jpg`" :alt="movie.title"
      class="w-full h-full object-cover backface-hidden">
  </article>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/movie';

defineProps<{
  movie: Movie
  chosenMovie: Movie | null
  guessedMovies: string[]
}>()
</script>

<style scoped>
article {
  transform: perspective(40rem);
}

.flipped {
  transform: rotateY(180deg);
}

.preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>