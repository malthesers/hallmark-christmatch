<template>
  <section>
    <p class="text-center text-2xl">{{ guesses }}</p>
    <div class="max-w-2xl grid grid-cols-5 gap-4 p-4">
      <MovieCard v-for="movie in memoryMovies" :movie="movie" :chosenMovie="chosenMovie" :secondMovie="secondMovie"
        :guessedMovies="guessedMovies" @click="selectMovie(movie)" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash'
import { allMovies } from '@/data/movies';
import type { Movie } from '@/types/movie';

const movies: Ref<Movie[]> = ref(allMovies)
const memoryMovies: Ref<Movie[]> = ref([])

const chosenMovie: Ref<Movie | null> = ref(null)
const secondMovie: Ref<Movie | null> = ref(null)

const guessedMovies: Ref<string[]> = ref([])
const guesses: Ref<number> = ref(0)

function selectMovie(movie: Movie): void {
  // If no movie chosen, set clicked movie as chosen
  if (!chosenMovie.value) {
    chosenMovie.value = movie
  }

  else if (secondMovie.value) {
    chosenMovie.value = null
    secondMovie.value = null
  }

  // If a movie is already chosen and a different movie was clicked
  else if (chosenMovie.value.id !== movie.id) {
    secondMovie.value = movie
    guesses.value++

    // If correct second movie, reset chosen movie and add title to list of guessed movies
    if (chosenMovie.value.title === movie.title) {
      guessedMovies.value.push(movie.title)
      return
    }

    // If clicked incorrect movie
    if (chosenMovie.value.title !== movie.title) {
      console.log('wrong')
    }
  }
}

function startGame(): void {
  // Shuffles array and cuts to first 10 duplicating each of those into another shuffled array adding id based on index
  memoryMovies.value = shuffle(shuffle(movies.value).slice(0, 10).flatMap(movie => [movie, movie])).map((movie, index) => ({ ...movie, id: index }))

  console.log('start', memoryMovies.value)
}

onMounted(() => startGame())
</script>