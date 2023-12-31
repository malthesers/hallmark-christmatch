<template>
  <ModalTemplate @closeModal="$emit('closeModal')" :showModal="showVictoryModal">
    <p class="font-title text-5xl mb-2">Victory!</p>
    <p class="text-lg sm:text-xl">
      <span>You succesfully matched all the movies in </span>
      <span class="font-bold">{{ guesses }}</span>
      <span> guesses.</span>
    </p>
  </ModalTemplate>
</template>

<script setup lang="ts">
defineEmits(['closeModal'])
defineProps<{
  showVictoryModal: boolean
  guesses: number
}>()
</script>