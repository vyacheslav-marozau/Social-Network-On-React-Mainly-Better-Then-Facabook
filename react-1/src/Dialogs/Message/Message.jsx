import React from 'react'
import s from './../Dialogs.module.css'



const Message = (props) => {
        let currentUser = 'Pastor J'
        const style = {justifySelf: currentUser === props.sender ? "end" : "start"};
        return <div className={s.message} style={style}> {props.message} </div>;

}
export default Message;

