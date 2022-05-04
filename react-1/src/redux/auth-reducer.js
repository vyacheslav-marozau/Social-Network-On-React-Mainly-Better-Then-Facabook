import {authAPI, profileAPI} from "../api/api";
import * as axios from "axios";
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null
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
            default:
                return state;
        }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth} });
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}

export const authorization = (email, password, rememberMe) => (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(getAuthUserData());
            }
            /*const userId = response.data.data.userId;
            return userId;*/

        });
}
export const logout = () => (dispatch) => {
    debugger;
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}
/*export const authorization = () => {
    return (dispatch) => {
        authAPI.login().then(data => {
            if (data.resultCode === 0) {
                profileAPI.getProfile(data.id);
                /!*let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));*!/
            }
        });
    }
}*/
export default authReducer;