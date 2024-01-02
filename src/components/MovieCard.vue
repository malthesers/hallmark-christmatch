<template>
  <article ref="movieCard" @click="validateGuess" @animationend="movieCard?.classList.remove('shake')" :class="{
    'flipped': (
      movie.id === firstMovie?.id
      || movie.id === secondMovie?.id
      || guessedMovies.includes(movie.title)
    )
  }" class=" w-[60px] h-[90px] sm:w-[90px] sm:h-[135px] md:w-[100px] md:h-[150px] grid cursor-pointer duration-300 ease-in-out transform shadow-2xl
    child:w-full child:h-full child:col-[1/1] child:row-[1/1] child:border-2 child:border-white">
    <div class="bg-green-950 grid">
      <CrownIcon class="w-3/5 h-auto m-auto" />
    </div>
    <div :style="{ backgroundImage: `url('covers/${movie.cover}.jpg')` }" class=" bg-cover bg-center backface-hidden">
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/movie';

const props = defineProps<{
  movie: Movie
  firstMovie: Movie | null
  secondMovie: Movie | null
  guessedMovies: string[]
  selectMovie: (movie: Movie) => void
}>()

const movieCard: Ref<HTMLElement | null> = ref(null)

function validateGuess(): void {
  if (movieCard.value && props.guessedMovies.includes(props.movie.title)) {
    // Shake if already guessed
    movieCard.value.classList.add('shake')
  } else {
    // Otherwise set movie as selected
    props.selectMovie(props.movie)
  }
}
</script>

<style scoped>
article {
  transform: perspective(40rem) rotateY(180deg);
  transform-style: preserve-3d;
}

.backface-hidden {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flipped {
  transform: rotateY(0);
}
</style>