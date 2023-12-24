<template>
  <article>
    <img :src="`src/assets/covers/${movie.cover}.jpg`" :alt="movie.title">
  </article>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/movie';

defineProps<{ movie: Movie }>()
</script>