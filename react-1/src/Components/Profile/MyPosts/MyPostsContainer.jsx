import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
//import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";
/*    const MyPostsContainer = (props) => {
        return <StoreContext.Consumer>
            { store => {
                  let state = store.getState();
                  let addPost = () => {
                      store.dispatch(addPostActionCreator());
                  }
                  let onPostChange = text => {
                      let action = updateNewPostTextActionCreator(text);
                      store.dispatch(action);
                  }
                      return <MyPosts updateNewPostText={onPostChange}
                      addPost={addPost}
                      posts={state.profilePage.posts}
                      newPostText={state.profilePage.newPostText}/>}
                    }
        </StoreContext.Consumer>
    }*/
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
            let post1 = '';
            dispatch(updateNewPostTextActionCreator(post1));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;