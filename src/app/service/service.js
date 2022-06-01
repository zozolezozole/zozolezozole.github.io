
import axios from "axios";
import { PATHS } from "./ServicePath";

axios.interceptors.request.use(
    async config => {
        config.headers['Content-Type'] = 'application/json';
        if (
            config.url.includes(PATHS.api_routes.rooms)
            || config.url.includes(PATHS.api_routes.room_detail)
            || config.url.includes(PATHS.api_routes.all_data)
            || config.url.includes(PATHS.api_routes.room_hourly_data)
        ) {
            config.headers = { 'Authorization': 'Token ' + PATHS.token };
            return config;
        } else {
            return config;
        }
    },
    error => {
        Promise.reject(error);
    }
)

export const getRequest = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                resolve(response);
            }).catch(error => {
                reject(error.response);
            });
    })
};

export const postRequest = (url, body) => {
    return new Promise((resolve, reject) => {
        axios.post(url, body)
            .then((response) => {
                resolve(response);
            }).catch(error => {
                reject(error.response);
            });
    })
}

