import axios from "axios";

const api = axios.create({
    baseURL: "https://api.astrocoin.uz/api"
})

export default api;