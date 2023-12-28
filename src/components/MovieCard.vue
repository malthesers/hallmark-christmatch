<template>
  <article :class="{
    'flipped': (
      movie.id === firstMovie?.id
      || movie.id === secondMovie?.id
      || guessedMovies.includes(movie.title)
    )
  }" class="relative grid cursor-pointer duration-700 ease-in-out transform
    child:w-full child:h-full child:col-[1/1] child:row-[1/1] child:border-2 child:border-white">
    <div class="bg-green-950 grid place-content-center">
      <span class="text-2xl">
        <CrownIcon class="w-12" />
      </span>
    </div>
    <img :src="`src/assets/covers/${movie.cover}.jpg`" :alt="movie.title" class="object-cover backface-hidden">
  </article>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/movie';

defineProps<{
  movie: Movie
  firstMovie: Movie | null
  secondMovie: Movie | null
  guessedMovies: string[]
}>()
</script>

<style scoped>
article {
  transform: perspective(40rem) rotateY(180deg);
  transform-style: preserve-3d;
}

img {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flipped {
  transform: rotateY(0);
}
</style>