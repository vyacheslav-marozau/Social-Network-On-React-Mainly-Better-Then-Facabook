import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
//import {addPostActionCreator} from "../../../redux/profile-reducer";



    const MyPosts = (props) => {
        let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likeCounter={p.likeCounter} />);

        let newPostElement = createRef();
        let addNewPost = (values) => {
            props.addPost(values.newPostBody);
        }
        return <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddPostFormRedux onSubmit={addNewPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    
    }
    const maxLength10 = maxLengthCreator(10);
const AddPostForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10]} component={Textarea} placeholder={"Post message"} name="newPostBody"/>
            </div>
            <div className={s.addButton}>
                <button>Add post</button>
            </div>
            <div className={s.remButton}>
                <button>Remove</button>
            </div>
        </form>
}
const AddPostFormRedux = reduxForm({form: "profileAddPostForm"}) (AddPostForm)
export default MyPosts;