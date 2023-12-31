<template>
  <ModalTemplate @closeModal="$emit('closeModal')" :showModal="showInstructionsModal">
    <p class="font-title text-5xl mb-2">Instructions</p>
    <p></p>
  </ModalTemplate>
</template>

<script setup lang="ts">
defineEmits(['closeModal'])
defineProps<{
  showInstructionsModal: boolean
}>()
</script>