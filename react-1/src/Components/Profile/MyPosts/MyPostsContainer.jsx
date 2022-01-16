import React, {createRef} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
//import StoreContext from "../../../StoreContext";
import {addMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";
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
let mapStateToProps1 = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps1 = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
            /*let post1 = '';
            dispatch(updateNewMessageTextCreator(post1));*/
        }
    }
}
const MyPostsContainer = connect(mapStateToProps1, mapDispatchToProps1)(MyPosts);
export default MyPostsContainer;