import {authAPI, profileAPI} from "../api/api";
import * as axios from "axios";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    url: null
    };

const authReducer = (state = initialState, action) => {
        switch (action.type) {
            case SET_USER_DATA: {
                return {
                    ...state,
                    ...action.payload,
                    isAuth: true
                }
            }
            case SET_CAPTCHA_URL: {
                return {
                    ...state,
                    url: action.url,
                    isAuth: true
                }
            }
            default:
                return state;
        }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth} });
export const setCaptchaUrl = (url) => ({type: SET_CAPTCHA_URL, url: url });
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true, null));
            }
        });
    }
}
export const showCaptcha = () => {
    return (dispatch) => {
        authAPI.getCaptcha().then(data => {
            debugger;
            console.log(data);
            let url = data.url;
            dispatch(setCaptchaUrl(url));
        });

    }
}
export const authorization = (email, password, rememberMe) => (dispatch) => {

        authAPI.login(email, password, rememberMe).then(response => {
            //response.data.resultCode = 10;
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(getAuthUserData());
            } /*else if (response.data.resultCode === 10) {
                debugger;
                showCaptcha();
            }*/ else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }

        });
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false, null));
        }
    });
}
export default authReducer;