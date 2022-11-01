import axios from "axios"

export const dogApi = axios.create({
    baseURL: "https://api.thedogapi.com/v1"
})


export const apiLocal = axios.create({
    baseURL: "https://localhost:8080"
})