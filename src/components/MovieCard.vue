<template>
  <article
    :class="[(movie.id === chosenMovie?.id || guessedMovies.includes(movie.title)) ? 'brightness-100' : 'brightness-50']"
    class="border-2 border-white duration-200">
    <img :src="`src/assets/covers/${movie.cover}.jpg`" :alt="movie.title" class="w-full h-full object-cover">
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