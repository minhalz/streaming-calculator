<script setup>
import useServicesStore from '@/stores/useServicesStore'
const services = useServicesStore()
</script>
<template>
    <section class="container lg:py-20 flex justify-center">
        <ul
            class="drop-shadow fixed z-10 bottom-0 left-0 right-0 lg:static min-w-[350px] flex items-center text-center shadow-md bg-white shadow-blue-200 lg:rounded-md"
        >
            <Cost label="Monthly" :cost="services.monthlyCost" />
            <span class="h-16 w-[1px] bg-gray-300"></span>
            <Cost label="Yearly" :cost="services.yearlyCost" />
        </ul>
    </section>
</template>
