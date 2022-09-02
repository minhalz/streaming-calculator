<script setup>
const { label, cost, modelValue } = defineProps(['label', 'cost', 'modelValue'])
defineEmits(['update:modelValue'])
</script>
<template>
    <li class="relative">
        <input
            class="opacity-0 absolute inset-0 cursor-pointer"
            type="radio"
            :value="cost"
            :checked="modelValue === cost"
            @change="$emit('update:modelValue', cost)"
        />
        <label
            class="border border-blue-300 rounded-lg mx-1 text-sm text-blue-300 font-semibold px-2 py-1 transition-[color,background-color]"
            :class="[modelValue === cost ? 'text-white bg-blue-300' : 'text-blue-300']"
        >
            {{ label }}
        </label>
    </li>
</template>
