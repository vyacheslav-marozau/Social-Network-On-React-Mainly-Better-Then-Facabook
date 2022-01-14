import React, {createRef} from 'react'
import {addMessageCreator, updateNewMessageTextCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../StoreContext'
const DialogsContainer = () => {
    return <StoreContext.Consumer>
        { store => {
            let state = store.getState().dialogsPage;
            let onSendMessageClick = () => {
                store.dispatch(addMessageCreator());
                let body1 = '';
                store.dispatch(updateNewMessageTextCreator(body1));
            }
            let onNewMessageChange = body => {
                store.dispatch(updateNewMessageTextCreator(body));
            }
            return <Dialogs updateNewMessageText={onNewMessageChange} addMessage={onSendMessageClick}
                            dialogsPage={state}
                            newMessageText={state.newMessageText}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;