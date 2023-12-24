<template>
  <div class="max-w-2xl grid grid-cols-5 gap-4 p-4">
    <MovieCard v-for="movie in memoryMovies" :movie="movie" :chosenMovie="chosenMovie" @click="chosenMovie = movie" />
  </div>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash'
import { allMovies } from '@/data/movies';
import type { Movie } from '@/types/movie';

const movies: Ref<Movie[]> = ref(allMovies)
const memoryMovies: Ref<Movie[]> = ref([])
const chosenMovie: Ref<Movie | null> = ref(null)

function startGame(): void {
  // Shuffles array and cuts to first 10 duplicating each of those into another shuffled array adding id based on index
  memoryMovies.value = shuffle(shuffle(movies.value).slice(0, 10).flatMap(movie => [movie, movie])).map((movie, index) => ({ ...movie, id: index }))

  console.log('start', memoryMovies.value)
}

onMounted(() => startGame())
</script>