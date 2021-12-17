import React from 'react';
import s from './Post.module.css'

    const Post = (props) => {
        return  <div className={s.item}>
                  <img src='https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large' alt='ava1'/>
                  <p>{props.message}</p>
                  <div><span>Like {props.likeCounter} </span></div>
                </div>
                
            //  It's our new program! Hey!  
    
    }

export default Post; 