<template>
  <main class="font-title text-white min-h-[100dvh] grid place-content-center p-4 pt-20">
    <section class="flex flex-col gap-4">
      <div class="flex flex-row justify-between">
        <button @click="startGame(1000)" class="text-2xl border-2 border-white px-3 py-2 rounded-lg">
          <span>New Game</span>
        </button>
        <p class="text-center text-4xl">Guesses: {{ guesses }}</p>
      </div>
      <div :class="{ 'pointer-events-none': paused }" class="max-w-xl grid grid-cols-5 gap-4">
        <MovieCard v-for="movie in memoryMovies" :movie="movie" :firstMovie="firstMovie" :secondMovie="secondMovie"
          :guessedMovies="guessedMovies" @click="selectMovie(movie)" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash'
import { allMovies } from '@/data/movies';
import type { Movie } from '@/types/movie';

const paused: Ref<boolean> = ref(true)
const gameSize: Ref<number> = ref(10)

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

      // If last pair was matched
      if (guessedMovies.value.length === gameSize.value) {
        paused.value = true
      }
    }

    // If clicked incorrect movie
    else if (firstMovie.value.title !== movie.title) {
      console.log('wrong')
    }
  }
}

function startGame(delay: number = 0): void {
  // Set paused to true
  paused.value = true

  // Clear game states
  firstMovie.value = null
  secondMovie.value = null
  guessedMovies.value = []
  guesses.value = 0

  // Create timeout to change movies after flip animation is done
  setTimeout(() => {
    // Shuffles array and cuts to first 10 duplicating each of those into another shuffled array adding id based on index
    memoryMovies.value = shuffle(shuffle(movies.value).slice(0, gameSize.value).flatMap(movie => [movie, movie])).map((movie, index) => ({ ...movie, id: index }))
    // Sets paused state to false after update
    paused.value = false
    console.log('start', memoryMovies.value)
  }, delay)
}

onMounted(() => startGame())
</script>