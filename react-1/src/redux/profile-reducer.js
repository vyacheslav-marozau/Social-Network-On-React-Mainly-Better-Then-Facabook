import {usersAPI, profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCounter: 88},
            {id: 2, message: 'How is your React-learning?', likeCounter: 18},
            {id: 3, message: "It's my first post!", likeCounter: 152},
            {id: 4, message: "Yo, Bro'z!", likeCounter: 202},
            {id: 5, message: "Yo, Bro'z! Whats Up", likeCounter: 111}
        ],
        profile: null,
        status: ""
    };

const profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: state.posts.length+1,
                    message: action.newPostBody,
                    likeCounter: 14,
                }
                return {...state,
                    posts: [...state.posts, newPost]
                };
        }
            case SET_USER_PROFILE: {
                return {...state,
                    profile: action.profile
                };
            }
            case SET_STATUS: {
                return {...state,
                    status: action.status
                };
            }
            default:
                return state;
        }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status: status})
export const getUserProfile = (userId) => (dispatch) => {
    return profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        });
}
export const getUserStatus = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        });
}
export const updateStatus = (status) => (dispatch) => {
    return profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
}
export default profileReducer;