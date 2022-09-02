<script setup>
const { plans, cost } = defineProps(['plans', 'cost'])
const emit = defineEmits(['updateService'])
const amount = ref(cost)

watch(amount, (newAmount) => {
    emit('updateService', newAmount)
})
</script>
<template>
    <ul class="absolute bottom-4 left-0 right-0 flex justify-center">
        <Plan v-for="{ id, label, cost } in plans" :key="id" v-model.number="amount" :label="label" :cost="cost" />
    </ul>
</template>
