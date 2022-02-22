import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3fff7fee-1d46-407e-9e6e-a8481ae27684"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (response => {
                return response.data
            });
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then (response => {
                return response.data
            });
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then (response => {
                return response.data
            });
    },
    authorization() {
        return instance.get(`auth/me`)
            .then (response => {
                return response.data
        });
    }
}
