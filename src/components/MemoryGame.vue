<template>
  <div class="max-w-lg">
    <MovieCard v-for="movie in allMovies" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash'
import { movies } from '@/data/movies';
import type { Movie } from '@/types/movie';

const allMovies: Ref<Movie[]> = ref(movies)

function startGame() {
  console.log('start')
  // Shuffle array
  const randomMovies = shuffle(allMovies.value).slice(0, 10)

  console.log(randomMovies)

  // Get random movies


  // Duplicate into pairs
}

onMounted(() => {
  startGame()
})
</script>