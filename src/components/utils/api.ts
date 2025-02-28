import axios from "axios";

const instance = axios.create({
    baseURL:"http://35.186.147.241:1880",
});

export const api = {
    get: <T>(url: string, params?: object) => instance.get<T>(url, params),
};