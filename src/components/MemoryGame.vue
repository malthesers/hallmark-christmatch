<template>
  <section class="flex flex-col">
    <p class="text-center text-2xl mb-2">{{ guesses }}</p>
    <button @click="startGame(1000)" class="mx-auto text-2xl border-2 border-white px-3 py-2 rounded-lg">New Game</button>
    <div :class="{ 'pointer-events-none': loading }" class="max-w-2xl grid grid-cols-5 gap-4 p-4">
      <MovieCard v-for="movie in memoryMovies" :movie="movie" :firstMovie="firstMovie" :secondMovie="secondMovie"
        :guessedMovies="guessedMovies" @click="selectMovie(movie)" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash'
import { allMovies } from '@/data/movies';
import type { Movie } from '@/types/movie';

const loading: Ref<boolean> = ref(true)

const movies: Ref<Movie[]> = ref(allMovies)
const memoryMovies: Ref<Movie[]> = ref([])

const firstMovie: Ref<Movie | null> = ref(null)
const secondMovie: Ref<Movie | null> = ref(null)

const guessedMovies: Ref<string[]> = ref([])
const guesses: Ref<number> = ref(0)

function selectMovie(movie: Movie): void {
  // If no movie chosen, set clicked movie as chosen
  if (!firstMovie.value) {
    firstMovie.value = movie
  }

  else if (secondMovie.value) {
    firstMovie.value = null
    secondMovie.value = null
  }

  // If a movie is already chosen and a different movie was clicked
  else if (firstMovie.value.id !== movie.id) {
    secondMovie.value = movie
    guesses.value++

    // If correct second movie, reset chosen movie and add title to list of guessed movies
    if (firstMovie.value.title === movie.title) {
      guessedMovies.value.push(movie.title)
      firstMovie.value = null
      secondMovie.value = null
    }

    // If clicked incorrect movie
    else if (firstMovie.value.title !== movie.title) {
      console.log('wrong')
    }
  }
}

function startGame(delay: number = 0): void {
  // Set loading to true
  loading.value = true

  // Clear game states
  firstMovie.value = null
  secondMovie.value = null
  guessedMovies.value = []
  guesses.value = 0

  // Create timeout to change movies after flip animation is done
  setTimeout(() => {
    // Shuffles array and cuts to first 10 duplicating each of those into another shuffled array adding id based on index
    memoryMovies.value = shuffle(shuffle(movies.value).slice(0, 10).flatMap(movie => [movie, movie])).map((movie, index) => ({ ...movie, id: index }))
    // Sets loading state to false after update
    loading.value = false
    console.log('start', memoryMovies.value)
  }, delay)
}

onMounted(() => startGame())
</script>