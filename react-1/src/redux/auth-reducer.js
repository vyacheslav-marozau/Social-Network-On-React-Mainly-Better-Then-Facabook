import {authAPI, profileAPI, securityAPI} from "../api/api";
import * as axios from "axios";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    captchaUrl: null  // if null, then captcha isn't requared
    };

const authReducer = (state = initialState, action) => {
        switch (action.type) {
            case SET_USER_DATA:
            case GET_CAPTCHA_URL_SUCCESS: {
                return {
                    ...state,
                    ...action.payload
                    //isAuth: true
                }
            }
            default:
                return state;
        }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth} });
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload:
    {captchaUrl} });
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    /*.then(data => {*/
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
    /*});*/
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    console.log("response", response);
    const captchaUrl = response.data.url;
            dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export const authorization = (email, password, rememberMe, captcha) => async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
            if (response.data.resultCode === 0) {
                // success get auth data
                let {id, email, login} = response.data.data;
                dispatch(getAuthUserData());
            } else {
                if (response.data.resultCode === 10) {
                    dispatch(getCaptchaUrl());
                }
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }

        /*});*/
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    console.log(response.data.resultCode);
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
}
export default authReducer;