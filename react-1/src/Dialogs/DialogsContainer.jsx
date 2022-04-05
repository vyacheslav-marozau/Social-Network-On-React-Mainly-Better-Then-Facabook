import React from 'react'
import {addMessageCreator, updateNewMessageTextCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
//import StoreContext from '../StoreContext'
import { connect } from "react-redux";
/*const DialogsContainer = () => {
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
}*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: {...state.dialogsPage},
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextCreator(body))
        },
        addMessage: () => {
            dispatch(addMessageCreator());
            let body1 = '';
            dispatch(updateNewMessageTextCreator(body1));
        }
    }
}

//const connectToStore = connect(mapStateToProps, mapDispatchToProps);
//const DialogsContainer = connectToStore(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

//export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
export default DialogsContainer;