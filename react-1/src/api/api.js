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
    /*auth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    },*/
     getProfile(id) {
         console.warn('Obsolete method. Please use profileAPI object.')
            return profileAPI.getProfile(id);
        }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status: status})
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    }
}
