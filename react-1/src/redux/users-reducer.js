import avatar from './../Components/Users/Komisarenko_Avatar.png';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
        users: [
        ]
    };

const usersReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW: {
                let stateCopy = {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })
                }
                return stateCopy;
            }
            case UNFOLLOW: {
                let stateCopy = {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    })
                }
                return stateCopy;
            }
            case SET_USERS: {
                return {...state, users: [...state.users, ...action.users]}
            }
            default:
                return state;
        }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;