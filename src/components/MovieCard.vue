<template>
  <article>
    <p>{{ movie.title }}</p>
  </article>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/movie';

defineProps<{ movie: Movie }>()
</script>