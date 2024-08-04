<script setup lang="ts">
defineProps({
  image1: {
    src: String,
    alt: String
  },
  image2: {
    src: String,
    alt: String
  },
})
</script>

<template>
  <div class="slidev-layout grid grid-cols-2 gap-4 place-items-center place-content-center justify-content-center">
    <div v-if="image1">
      <img class="max-h-[70vh]" :src="image1?.src" :alt="image1?.alt">
      <span class="text-xs leading-tight flex justify-center py-2">{{ image1?.alt }}</span>
    </div>
    <div v-if="image2">
      <img class="max-h-[70vh]" :src="image2?.src" :alt="image2?.alt">
      <span class="text-xs leading-tight flex justify-center py-2">{{ image2?.alt }}</span>
    </div>
  </div>
  <slot />
</template>
