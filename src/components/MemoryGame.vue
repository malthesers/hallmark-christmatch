<template>
  <div class="max-w-xl grid grid-cols-5 gap-4 p-4">
    <MovieCard v-for="movie in memoryMovies" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash'
import { allMovies } from '@/data/movies';
import type { Movie } from '@/types/movie';

const movies: Ref<Movie[]> = ref(allMovies)
const memoryMovies: Ref<Movie[]> = ref([])

function startGame() {
  console.log('start')
  // Shuffles array and cuts to first 10 duplicating each of those into another shuffled array
  memoryMovies.value = shuffle(shuffle(movies.value).slice(0, 10).flatMap(movie => [movie, movie]))
  // .map((movie, index) => ({ ...movie, id: index })) --- add id based on index
  console.log(memoryMovies.value)
}

onMounted(() => startGame())
</script>