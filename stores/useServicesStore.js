import { defineStore } from 'pinia'

const useServicesStore = defineStore('services', () => {
    const services = reactive([])

    const cost = computed(() => {
        return services.reduce((acc, current) => acc + current.cost, 0)
    })

    const monthlyCost = computed(() => {
        return cost.value.toFixed(2)
    })

    const yearlyCost = computed(() => {
        return (cost.value * 12).toFixed(2)
    })

    function addItem(id, cost) {
        services.push({
            id,
            cost,
        })
    }

    function getIndex(id) {
        return services.findIndex((service) => service.id === id)
    }

    function removeItem(id) {
        const removeIndex = getIndex(id)
        services.splice(removeIndex, 1)
    }

    function updateItem(id, cost) {
        const updateIndex = getIndex(id)
        services[updateIndex].cost = cost
    }

    return { services, monthlyCost, yearlyCost, addItem, removeItem, updateItem }
})

export default useServicesStore
