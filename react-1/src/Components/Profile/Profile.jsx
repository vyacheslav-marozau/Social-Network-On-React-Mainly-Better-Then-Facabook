import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let profilePage = props.store.getState().profilePage;
    return <div>
        <ProfileInfo />
        <MyPosts posts={profilePage.posts}
                 newPostText={profilePage.newPostText}
                 dispatch={props.dispatch}
        />

    </div>
}

export default Profile;