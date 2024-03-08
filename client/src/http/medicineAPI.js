import {$host} from "./index";

export const CreateMedicine = async (medicine) => {
    const {data} = await $host.post('api/medicine', medicine)
    return data
}

export const fetchAllMedicines = async (storeId) => {
    const {data} = await $host.get('/api/medicine', {params: {storeId}})
    return data
}


export const fetchOneMedicine = async (id) => {
    const {data} = await $host.get('api/medicine/' + id)
    return data
}

export const CreateOrder = async (order) => {
    const {data} = await $host.post('api/order/shopping', order)
    return data
}

export const fetchStores = async () => {
    const {data} = await $host.get('/api/store', )
    return data
}