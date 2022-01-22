import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (UserId) => {
            dispatch(followAC(UserId))
        },
        unfollow: (UserId) => {
            dispatch(unFollowAC(UserId))
        },
        setUsers: (Users) => {
            dispatch(setUsersAC(Users))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Users);