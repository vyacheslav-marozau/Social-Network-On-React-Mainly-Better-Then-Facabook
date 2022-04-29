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
                    ...action.data,
                    isAuth: true
                }
            }
            default:
                return state;
        }
}
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login} });
export const isMe = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
}

    /*return (dispatch) => {
        authAPI.login().then(data => {
            if (data.resultCode === 0) {
                profileAPI.getProfile(data.id);
                /!*let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));*!/
            }
        });
    }
}*/

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