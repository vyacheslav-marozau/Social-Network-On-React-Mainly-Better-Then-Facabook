import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    //console.log("profile");
    //let profilePage = props.store.getState().profilePage;
    return <div>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     isOwner={props.isOwner}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
        />

        <MyPostsContainer /*posts={profilePage.posts}
                 newPostText={profilePage.newPostText}
                 dispatch={props.dispatch}*/
                 //store={props.store}
        />

    </div>
}

export default Profile;