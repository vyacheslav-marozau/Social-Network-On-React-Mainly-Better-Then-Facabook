import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    //let profilePage = props.store.getState().profilePage;
    return <div>
        <ProfileInfo profile={props.profile}/>

        <MyPostsContainer /*posts={profilePage.posts}
                 newPostText={profilePage.newPostText}
                 dispatch={props.dispatch}*/
                 //store={props.store}
        />

    </div>
}

export default Profile;