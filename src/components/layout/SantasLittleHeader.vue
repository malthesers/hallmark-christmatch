<template>
  <header class="fixed z-10 w-full bg-black bg-opacity-30 backdrop-blur-sm text-white sm:py-2 px-3 sm:px-4">
    <div class="max-w-3xl mx-auto flex flex-col xs:flex-row justify-between">
      <!-- Left side -->
      <p class="font-title text-2xl md:text-3xl pt-2">Hallmark Christmatch</p>
      <!-- Right side -->
      <nav class="flex flex-row gap-[2px] sm:gap-1 items-center">
        <!-- Restart button -->
        <button @click="startGame(500)" aria-label="open instructions button"
          :class="{ 'opacity-50 pointer-events-none': disableRestart }" class="duration-200 hover:opacity-50">
          <Icon icon="mdi:refresh-circle" class="w-7 h-7 sm:w-9 sm:h-9" />
        </button>
        <!-- Instructions button -->
        <button @click="showInstructionsModal = true" aria-label="open instructions button"
          class="duration-200 hover:opacity-50">
          <Icon icon="mdi:help-circle" class="w-7 h-7 sm:w-9 sm:h-9" />
        </button>
        <!-- GitHub link -->
        <a href="https://github.com/malthesers/hallmark-christmatch" aria-label="github repository link" target="_blank"
          rel="noopener noreferrer" class="duration-200 hover:opacity-50">
          <Icon icon="mdi:github" class="w-7 h-7 sm:w-9 sm:h-9" />
        </a>
        <!-- Ko-fi link -->
        <a href="https://ko-fi.com/malthesers" aria-label="kofi link" target="_blank" rel="noopener noreferrer"
          class="duration-200 hover:opacity-50">
          <Icon icon="simple-icons:kofi" class="w-7 h-7 sm:w-[38px] sm:h-[38px] ml-1" />
        </a>
      </nav>
    </div>
  </header>
  <InstructionsModal @closeModal="showInstructionsModal = false" :showInstructionsModal="showInstructionsModal" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  disableRestart: boolean
  startGame: (delay: number) => void
}>()

const showInstructionsModal: Ref<boolean> = ref(false)
</script>