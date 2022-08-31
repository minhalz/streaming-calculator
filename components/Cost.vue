<script setup>
const { label, cost } = defineProps(['label', 'cost'])
</script>
<template>
    <li class="p-5 flex-1">
        <span class="font-semibold text-3xl block mb-2">${{ cost }}</span>
        <h2 class="uppercase font-semibold text-blue-300 text-xl tracking-widest">{{ label }}</h2>
    </li>
</template>
