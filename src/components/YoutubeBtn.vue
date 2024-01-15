<template>
    <a 
        :href="href" 
        target="_blank" 
        class="px-3 py-2 rounded border-2 border-red-500 bg-red-600 hover:bg-red-700 text-white transition-colors" 
    >
        <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>