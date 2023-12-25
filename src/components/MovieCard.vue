<template>
  <article :class="[
    (
      movie.id === chosenMovie?.id
      || movie.id === secondMovie?.id
      || guessedMovies.includes(movie.title)
    ) ? '' : 'flipped']" class="relative grid preserve-3d duration-700 ease-in-out transform">
    <div class="w-full h-full col-[1/1] row-[1/1] bg-black"></div>
    <img :src="`src/assets/covers/${movie.cover}.jpg`" :alt="movie.title"
      class="w-full h-full col-[1/1] row-[1/1] object-cover backface-hidden">
  </article>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/movie';

defineProps<{
  movie: Movie
  chosenMovie: Movie | null
  secondMovie: Movie | null
  guessedMovies: string[]
}>()
</script>

<style scoped>
article {
  transform: perspective(40rem);
  transform-style: preserve-3d;
}

img {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flipped {
  transform: rotateY(180deg);
}
</style>