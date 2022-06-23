import {usersAPI, profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
            case DELETE_POST:
                return {...state, posts: state.posts.filter(p => p.id != action.postId)
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
            case SAVE_PHOTO_SUCCESS: {
                return {...state, profile: {...state.profile, photos: action.photos}}
            }
            default:
                return state;
        }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status: status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))

}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
            dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    console.log(response);
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export default profileReducer;