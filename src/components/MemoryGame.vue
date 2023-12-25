<template>
  <div class="max-w-2xl grid grid-cols-5 gap-4 p-4">
    <MovieCard v-for="movie in memoryMovies" :movie="movie" :chosenMovie="chosenMovie" :guessedMovies="guessedMovies"
      @click="selectMovie(movie)" />
  </div>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash'
import { allMovies } from '@/data/movies';
import type { Movie } from '@/types/movie';

const movies: Ref<Movie[]> = ref(allMovies)
const memoryMovies: Ref<Movie[]> = ref([])
const chosenMovie: Ref<Movie | null> = ref(null)
const guessedMovies: Ref<string[]> = ref([])

function selectMovie(movie: Movie): void {
  if (!chosenMovie.value) {
    // If no movie chosen, set clicked movie as chosen
    chosenMovie.value = movie
  } else if (chosenMovie.value.title === movie.title) {
    if (chosenMovie.value.id !== movie.id) {
      // If correct second movie, reset chosen movie and add title to list of guessed movies
      chosenMovie.value = null
      guessedMovies.value.push(movie.title)
    } else {
      // If the same card was clicked again
      console.log('clicked same movie')
    }
  } else {
    // If clicked incorrect movie
    chosenMovie.value = null
    console.log('wrong')
  }
}

function startGame(): void {
  // Shuffles array and cuts to first 10 duplicating each of those into another shuffled array adding id based on index
  memoryMovies.value = shuffle(shuffle(movies.value).slice(0, 10).flatMap(movie => [movie, movie])).map((movie, index) => ({ ...movie, id: index }))

  console.log('start', memoryMovies.value)
}

onMounted(() => startGame())
</script>