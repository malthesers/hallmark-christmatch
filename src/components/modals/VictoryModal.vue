<template>
  <ModalTemplate @closeModal="$emit('closeModal')" :showModal="showVictoryModal">
    <p class="font-title text-5xl mb-2">Victory!</p>
    <section class="text-lg sm:text-xl text-center space-y-2">
      <p>
        <span>You succesfully matched all the movies in </span>
        <span class="font-bold">{{ guesses }}</span>
        <span> guesses.</span>
      </p>
      <p v-if="record">
        <span>Your fastest victory was </span>
        <span class="font-bold">{{ record }}</span>
        <span> guesses.</span>
      </p>
    </section>
  </ModalTemplate>
</template>

<script setup lang="ts">
defineEmits(['closeModal'])
defineProps<{
  showVictoryModal: boolean
  guesses: number
  record: number
}>()
</script>