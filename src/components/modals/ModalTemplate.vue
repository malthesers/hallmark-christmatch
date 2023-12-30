<template>
  <Teleport to="body">
    <Transition name="modal">
      <aside v-if="showModal" @click.self="$emit('closeModal')"
        class="fixed z-20 top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div
          class="overflow-auto w-full max-w-lg max-h-[80%] mx-auto bg-green-950 text-white border-2 border-white p-4 pt-6 text-center md:text-lg cursor-auto">
          <slot></slot>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineEmits(['closeModal'])
defineProps<{
  showModal: boolean
}>()
</script>