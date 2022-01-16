import React, {createRef} from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} avatar={d.avatar} /> );
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message} sender={m.sender}/>);
    let newMessageElement = createRef();


    let onSendMessageClick = () => {
        props.addMessage();
        //props.dispatch(addMessageCreator());
        let body1 = '';
        props.updateNewMessageText(body1);
        //props.dispatch(updateNewMessageTextCreator(body1));
    }
    let onNewMessageChange = (e) => {
        debugger;
        let body = e.target.value;                  //newMessageElement.current
        props.updateNewMessageText(body);
        //props.dispatch( updateNewMessageTextCreator(body));

    }

    return <div className={s.dialogs}>

        <div className={s.dialogsItems }>
            { dialogsElements }
            alert(props.state.message.id);
        </div>

        <div className={s.messages} >
            { messagesElements }
        </div>
        <div className={s.addMessageWind}>
            <div>
                <textarea placeholder='Enter Your Message' onChange={onNewMessageChange} ref={newMessageElement}
                          value={props.newMessageText}
                 />
            </div>
            <div className={s.addMessageEll}>
                <button onClick={onSendMessageClick} >Send a Message</button>
            </div>
        </div>
    </div>
}

export default Dialogs;