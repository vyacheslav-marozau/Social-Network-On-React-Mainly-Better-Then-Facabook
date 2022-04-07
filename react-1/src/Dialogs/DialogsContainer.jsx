import React from 'react'
import {addMessageCreator, updateNewMessageTextCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
//import StoreContext from '../StoreContext'
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
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
        newMessageText: state.dialogsPage.newMessageText
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
/*let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);