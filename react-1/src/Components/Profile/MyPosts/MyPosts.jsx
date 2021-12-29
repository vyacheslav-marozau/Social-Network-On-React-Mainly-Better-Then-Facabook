import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';

    const MyPosts = (props) => {
        let postsElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />);

        let newPostElement = createRef();

        let addPost = () => {
            props.addPost();
            props.updateNewPostText('');
        }
        let onPostChange = () => {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }
        return <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div className={s.addButton}>
                    <button onClick={addPost} >Add post</button>
                </div>
                <div className={s.remButton}>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    
    }

export default MyPosts; 