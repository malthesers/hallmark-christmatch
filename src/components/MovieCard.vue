<template>
  <article
    ref="movieCard"
    @click="validateGuess"
    @animationend="movieCard?.classList.remove('shake')"
    :class="{
      flipped: movie.id === firstMovie?.id || movie.id === secondMovie?.id || guessedMovies.includes(movie.title)
    }"
    class="w-[60px] h-[90px] sm:w-[90px] sm:h-[135px] md:w-[100px] md:h-[150px] preserve-3d grid cursor-pointer duration-300 ease-in-out transform shadow-2xl *:size-full *:col-[1/1] *:row-[1/1] *:border-2 *:border-white"
  >
    <!-- Back side -->
    <div class="bg-green-950 grid">
      <CrownIcon class="w-3/5 h-auto m-auto" />
    </div>
    <!-- Front side -->
    <div :style="{ backgroundImage: `url('covers/${movie.cover}.jpg')` }" class="bg-cover bg-center backface-hidden">
      <CardShine v-if="guessedMovies.includes(movie.title)" />
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/movie'

const props = defineProps<{
  movie: Movie
  firstMovie: Movie | null
  secondMovie: Movie | null
  guessedMovies: string[]
  selectMovie: (movie: Movie) => void
}>()

const movieCard: Ref<HTMLElement | null> = ref(null)

function validateGuess(): void {
  if (movieCard.value) {
    // Shake if already guessed
    if (props.guessedMovies.includes(props.movie.title)) {
      movieCard.value.classList.add('shake')
    }

    // Shake if already selected
    else if (props.movie.id === props.firstMovie?.id && !props.secondMovie) {
      movieCard.value.classList.add('shake')
    }

    // Otherwise forward to selectMovie method
    else {
      props.selectMovie(props.movie)
    }
  }
}
</script>
