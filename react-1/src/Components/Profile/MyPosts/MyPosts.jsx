import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';

    const MyPosts = (props) => {
        let postsElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />);
        
        return <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div className={s.addButton}>
                    <button>Add post</button>
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