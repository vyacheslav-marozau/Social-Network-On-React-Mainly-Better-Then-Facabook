import * as axios from "axios";

let state = {
    name: '',
}
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
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile) {
        debugger;
        const formData = new FormData();
        formData.append( "image", photoFile);

        /*formData.append(
            "image",
            photoFile,
            photoFile.name
        );*/
        return instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-type': 'multipart/form-data'
                },
            })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`/auth/login`, { email, password, rememberMe, captcha});
            /*.then(response => {
                //debugger;
                return response.data
            })*/
    },
    logout() {
        return instance.delete(`/auth/login`);
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);/*.then(response => {
            debugger;
            console.log(response.data)
            return response.data
        })*/
    }
}
