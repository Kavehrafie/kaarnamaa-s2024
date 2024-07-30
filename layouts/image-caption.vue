<script setup lang="ts">

type Props = {
    image: string
    caption: string
}

const props = defineProps<Props>()
let img = new Image();
img.src = props.image
let ratio = img.width / img.height

</script>
<template>
    <div class="slidev-layout">
        <div class="flex flex-col space-y-2" v-if="ratio > 1">
            <img class="w-full max-h-[70vh] object-contain" :src="props.image" :alt="props.caption">
            <p class="text-sm text-center">{{ props.caption }}</p>
        </div>
        <div class="flex space-x-2 justify-left items-end" v-else>
            <p class="text-sm text-right w-full">{{ props.caption }}</p>
            <img class="w-full max-h-[75vh] object-contain" :src="props.image" :alt="props.caption">
        </div>
        <div class="absolute top-10 left-10fflex justify-center items-center flex-col   ">
            <slot />
        </div>
    </div>
</template>