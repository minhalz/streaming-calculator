<script setup>
const { plans, cost } = defineProps(['plans', 'cost'])
const amount = ref(cost)
</script>
<template>
    <ul class="absolute bottom-4 left-0 right-0 flex justify-center">
        <li v-for="{ id, label, cost } in plans" :key="id" class="relative">
            <input
                v-model="amount"
                class="opacity-0 absolute inset-0 cursor-pointer"
                type="radio"
                :value="cost"
                @change="$emit('updateService', amount)"
            />
            <label
                class="border border-blue-300 rounded-lg mx-1 text-sm text-blue-300 font-semibold px-2 py-1 transition-[color,background-color]"
                :class="[amount === cost ? 'text-white bg-blue-300' : 'text-blue-300']"
            >
                {{ label }}
            </label>
        </li>
    </ul>
</template>
