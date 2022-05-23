import {authAPI, profileAPI} from "../api/api";
import * as axios from "axios";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
    };

const appReducer = (state = initialState, action) => {
        switch (action.type) {
            case INITIALIZED_SUCCESS: {
                return {
                    ...state,
                    initialized: true
                }
            }
            default:
                return state;
        }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const initializeApp = () => (dispatch) => {
        let promise = dispatch(getAuthUserData());
        debugger;
        // dispatch(somethingelse());
        // dispatch(somethingelse());
        Promise.all([promise])
            .then(() => {
            dispatch(initializedSuccess());
        });
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
/*export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false, null));
        }
    });
}*/
export default appReducer;