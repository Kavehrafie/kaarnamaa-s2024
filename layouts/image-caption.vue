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
    if (img.width === 0) console.log("image does not exist")
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
    <div class="slidev-layout relative">
        <div class="flex flex-col space-y-2" v-if="ratio > 1">
            <img class="w-full max-h-[60svh] object-contain" :src="props.image" :alt="props.caption">
            <p class="text-sm text-center">{{ props.caption }}</p>
        </div>
        <div class="flex space-x-2 justify-left items-end" v-else>
            <p class="text-sm rtl:text-left w-full">{{ props.caption }}</p>
            <img class="w-full max-h-[60vh] object-contain" :src="props.image" :alt="props.caption">
        </div>
        <div class="absolute top-10 flex left-10 rtl:right-10 rtl:left-auto items-center flex-col">
            <slot />
        </div>
    </div>
</template>
