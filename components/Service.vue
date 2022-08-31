<script setup>
import useServicesStore from '@/stores/useServicesStore'
const services = useServicesStore()
const { id, name, logo, cost, plans } = defineProps(['id', 'name', 'logo', 'cost', 'plans'])
const selected = ref(false)
const amount = ref(cost)
const imgType = logo.includes('svg') ? 'svg' : 'avif'

function toggleState() {
    if (!selected.value) {
        services.addItem(id, amount)
        selected.value = true
    } else {
        services.removeItem(id)
        selected.value = false
    }
}

function updateService(newAmount) {
    if (selected.value) {
        services.updateItem(id, newAmount)
        amount.value = newAmount
    } else {
        toggleState()
    }
}
</script>
<template>
    <li class="flex flex-col relative">
        <button
            class="flex flex-col h-full shadow-lg py-4 px-3 rounded w-full transition-[box-shadow] bg-white"
            :class="[
                selected ? 'shadow-blue-300/50 ring-2 ring-blue-300' : 'hover:shadow-blue-300/50',
                plans ? 'pb-14' : '',
            ]"
            @click="toggleState"
        >
            <div class="flex w-full items-center mb-4 min-h-[70px] sm:min-h-[100px]">
                <nuxt-picture
                    :src="logo"
                    sizes="xs:150px lg:300px"
                    class="block mx-auto w-[150px]"
                    :format="imgType"
                    :alt="name + ' logo'"
                    loading="lazy"
                    placeholder="15"
                    width="150px"
                />
            </div>
            <span class="font-medium w-full grow">{{ name }}</span>
        </button>
        <Plans v-if="plans" :plans="plans" :cost="cost" @updateService="updateService" />
    </li>
</template>
