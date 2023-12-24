<template>
  <div class="max-w-lg">
    <MovieCard v-for="movie in allMovies" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import { movies } from '@/data/movies';
import type { Movie } from '@/types/movie';

const allMovies: Ref<Movie[]> = ref(movies)
</script>