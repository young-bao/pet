import axios from "axios"

export function sendAioxs(config,shuju) {
    let instance = axios.create({
        baseURL: "http://localhost:3000",
        method: "POST",
        timeout: 5000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' //这里重点
        }
    })
    return instance(config)
}

export function sendSuggest(data) {
    return axios.request({
        url: 'http://localhost:3000/suggest',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' //这里重点
        }
        ,data: data})
}

