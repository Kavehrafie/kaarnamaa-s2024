<template>
    <div class="slidev-layout full-screen-timeline">
        <div class="my-auto w-full h-full">
            <slot />
        </div>
    </div>
</template>

<style>
.slidev-layout.full-screen-timeline {
    @apply p-0;
}

.slidev-layout.full-screen-timeline h1 {
    @apply absolute top-2 left-5 text-shadow;
}

.full-screen-timeline .mermaid {
    width: 100vw;
    height: 100vh;
}

.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>