import React, {createRef} from 'react'
import {addMessageCreator, updateNewMessageTextCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.dispatch(addMessageCreator());
        let body1 = '';
        props.dispatch(updateNewMessageTextCreator(body1));
    }
    let onNewMessageChange = (body) => {
        props.dispatch( updateNewMessageTextCreator(body)); //newMessageElement.current

    }

    return ( <Dialogs updateNewMessageText={onNewMessageChange} addMessage={onSendMessageClick} dialogsPage={state} newMessageText={props.newMessageText}/>

    )
}

export default DialogsContainer;