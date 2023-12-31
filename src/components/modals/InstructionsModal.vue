<template>
  <ModalTemplate @closeModal="$emit('closeModal')" :showModal="showInstructionsModal">
    <h2 class="font-title text-5xl mb-2">Instructions</h2>
    <section class="text-center space-y-2">
      <p>20 cards are laid out in the grid, those being 10 pairs of Hallmark christmas movie covers.</p>
      <p>Start by clicking a card to flip it over and reveal the movie, then click a new card to reveal it and see if they
        match.</p>
      <p>As you progress the cards, you will reveal more and more movies until you will be able to match them.</p>
      <p>But will you be able to distinguish these unique christmas movie covers and match them all?</p>
    </section>
  </ModalTemplate>
</template>

<script setup lang="ts">
defineEmits(['closeModal'])
defineProps<{
  showInstructionsModal: boolean
}>()
</script>