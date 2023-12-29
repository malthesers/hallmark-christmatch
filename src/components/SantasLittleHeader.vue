<template>
  <header class="fixed w-full bg-black bg-opacity-50 text-white py-3 px-4">
    <div class="max-w-3xl mx-auto flex flex-row justify-between">
      <p class="font-title text-3xl">Hallmark Christmatch</p>
      <nav class="flex flex-row gap-2 items-center">
        <a href="https://github.com/malthesers/hallmark-christmatch" aria-label="github repository link" target="_blank"
          rel="noopener noreferrer" class="duration-200 hover:opacity-50">
          <Icon icon="mdi:github" width="36" height="36" />
        </a>
        <a href="https://ko-fi.com/malthesers" aria-label="kofi link" target="_blank" rel="noopener noreferrer"
          class="duration-200 hover:opacity-50">
          <Icon icon="simple-icons:kofi" width="38" height="38" />
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>