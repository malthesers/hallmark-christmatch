<template>
  <SantasLittleHeader :disableRestart="guesses === 0" :startGame="startGame" />
  <main class="text-white min-h-[100dvh] grid place-content-center p-4 pt-20">
    <section class="flex flex-col gap-4">
      <!-- <div class="flex flex-row justify-between text-xl">
        <button @click="startGame(500)"
          class="bg-green-900 bg-opacity-70 border-2 border-white px-3 py-2 rounded-lg duration-200 hover:bg-opacity-100">
          <span>Restart</span>
        </button>
        <div class="flex flex-row items-center">
          <span>Guesses: </span>
          <Transition name="counter" mode="out-in">
            <span class="w-8 text-center" :key="guesses">{{ guesses }}</span>
          </Transition>
        </div>
      </div> -->
      <div :class="{ 'pointer-events-none': paused }" class="grid grid-cols-5 gap-2 sm:gap-4">
        <MovieCard v-for="(movie, index) in pairedMovies" :key="index" :movie="movie" :firstMovie="firstMovie"
          :secondMovie="secondMovie" :guessedMovies="guessedMovies" :selectMovie="selectMovie" />
      </div>
    </section>
  </main>
  <VictoryModal @closeModal="showVictoryModal = false" :showVictoryModal="showVictoryModal" :guesses="guesses"
    :record="record" />
</template>

<script setup lang="ts">
import { shuffle } from 'lodash'
import { allMovies } from '@/data/movies';
import type { Movie } from '@/types/movie';

const paused: Ref<boolean> = ref(true)
const gameSize: Ref<number> = ref(10)

const movies: Ref<Movie[]> = ref(allMovies)
const pairedMovies: Ref<Movie[]> = ref([])

const firstMovie: Ref<Movie | null> = ref(null)
const secondMovie: Ref<Movie | null> = ref(null)

const guessedMovies: Ref<string[]> = ref([])
const guesses: Ref<number> = ref(0)
const record: Ref<number> = ref(0)

const showVictoryModal: Ref<boolean> = ref(false)

function selectMovie(movie: Movie): void {
  // If no movie chosen, set clicked movie as chosen
  if (!firstMovie.value || secondMovie.value) {
    firstMovie.value = movie
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
        showVictoryModal.value = true
        paused.value = true

        if (!record.value || guesses.value < record.value) {
          record.value = guesses.value
        }
      }
    }

    // If clicked incorrect movie
    else if (firstMovie.value.title !== movie.title) {
      // Nothing happens - so far
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
    pairedMovies.value = shuffle(shuffle(movies.value).slice(0, gameSize.value).flatMap(movie => [movie, movie])).map((movie, index) => ({ ...movie, id: index }))
    // Sets paused state to false after update
    paused.value = false
  }, delay)
}

// Save record to localStorage
watch(record, () => localStorage.setItem('christmatch/record', String(record.value)))

onMounted(() => {
  // Load saved record if any
  if (localStorage.getItem('christmatch/record')) record.value = parseInt(localStorage.getItem('christmatch/record') as string)

  // Start initial game
  startGame()
})
</script>