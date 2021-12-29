import React, {createRef} from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} avatar={d.avatar} /> );
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message} sender={m.sender}/>);
    let newMessageElement = createRef();

    let addMessage = () => {
        props.addMessage();
        props.updateNewMessageText('');
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);

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
                <textarea onChange={onMessageChange} ref={newMessageElement}
                          value={props.newMessageText}
                 />
            </div>
            <div className={s.addMessageEll}>
                <button onClick={addMessage} >Send a Message</button>
            </div>
        </div>
    </div>
}

export default Dialogs;