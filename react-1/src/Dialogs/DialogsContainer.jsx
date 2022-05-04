import React from 'react'
import {addMessageCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
//import StoreContext from '../StoreContext'
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: {...state.dialogsPage},
        /*newMessageText: state.dialogsPage.newMessageText*/
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageCreator(newMessageBody));
        }
    }
}
/*let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);