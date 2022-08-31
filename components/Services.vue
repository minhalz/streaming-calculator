<script setup>
import services from '@/content/services.json'
</script>
<template>
    <section class="container pb-32 lg:pb-20">
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            <Service
                v-for="{ id, name, logo, cost, plans } in services"
                :id="id"
                :key="id"
                :name="name"
                :logo="logo"
                :cost="cost"
                :plans="plans"
            />
        </ul>
    </section>
</template>
