<template>
  <ModalTemplate>
    <p class="font-title text-5xl mb-2">Victory!</p>
    <p>You succesfully matched all the movies in {{ guesses }} guesses.</p>
  </ModalTemplate>
</template>

<script setup lang="ts">
defineProps<{
  showVictoryModal: boolean
  guesses: number
}>()
</script>