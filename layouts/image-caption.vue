<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useNumberTranslation } from '../snippets/external'
type Props = {
    image: string
    caption: string
}

const props = defineProps<Props>()

const ratio = computed(() => {
    let img = new Image();
    img.src = props.image
    return img.width / img.height
})


const { convertNumbers } = useNumberTranslation()

onMounted(() => {
    const elements = document.querySelectorAll('.slidev-layout *')
    elements.forEach(el => {
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
            el.textContent = convertNumbers(el.textContent || '')
        }
    })
})

</script>
<template>
    <div class="slidev-layout">
        <div class="flex flex-col space-y-2" v-if="ratio > 1">
            <img class="w-full max-h-[60svh] object-contain" :src="props.image" :alt="props.caption">
            <p class="text-sm text-center">{{ props.caption }}</p>
        </div>
        <div class="flex space-x-2 justify-left items-end" v-else>
            <p class="text-sm text-right w-full">{{ props.caption }}</p>
            <img class="w-full max-h-[75vh] object-contain" :src="props.image" :alt="props.caption">
        </div>
        <div class="absolute top-10 flex justify-center items-center flex-col" >
            <slot />
        </div>
    </div>
</template>
