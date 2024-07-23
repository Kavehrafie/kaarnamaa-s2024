<script setup lang="ts">
defineProps({
  image1: {
    src: String,
    alt: String
  },
  image2: {
    src: String,
    alt: String
  }
})
</script>

<template>
  <div class="slidev-layout grid grid-cols-2 gap-4">
    <div v-if="image1">
      <img class="max-h-[70vh]" :src="image1?.src" :alt="image1?.alt">
      <span class="text-xs leading-tight">{{ image1?.alt }}</span>
    </div>
    <div v-if="image2">
      <img class="max-h-[70vh]" :src="image2?.src" :alt="image2?.alt">
      <span class="text-xs leading-tight">{{ image2?.alt }}</span>
    </div>
  </div>
  <slot />
</template>
