import { defineStore } from 'pinia'

const useServicesStore = defineStore('services', () => {
    const services = ref([])

    const monthlyCost = computed(() => {
        return services.value.reduce((acc, current) => acc + current.cost, 0).toFixed(2)
    })

    const yearlyCost = computed(() => {
        return (services.value.reduce((acc, current) => acc + current.cost, 0) * 12).toFixed(2)
    })

    function addItem(id, cost) {
        services.value.push({
            id,
            cost,
        })
    }

    function removeItem(id) {
        const newServices = services.value.filter((service) => service.id !== id)
        services.value = newServices
    }

    function updateItem(id, cost) {
        const newServices = services.value.map((service) => {
            if (service.id === id) {
                service.cost = cost
                return service
            }
            return service
        })

        services.value = newServices
    }

    return { services, monthlyCost, yearlyCost, addItem, removeItem, updateItem }
})

export default useServicesStore
