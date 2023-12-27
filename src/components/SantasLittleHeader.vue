<template>
  <header class="fixed w-full bg-black bg-opacity-50 text-white py-3 px-4">
    <div class="max-w-3xl mx-auto flex flex-row justify-between">
      <p class="font-title text-3xl">Hallmark Christmatch</p>
      <nav class="grid place-content-center">
        <a href="https://github.com/malthesers/soulsborndle" aria-label="github repository link" target="_blank"
          rel="noopener noreferrer">
          <Icon icon="mdi:github" width="36" height="36" class="duration-200 hover:opacity-50" />
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>