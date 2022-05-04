import React, {createRef} from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./addMessagesForm/addMessagesForm";
import {Field, reduxForm} from "redux-form";
//import {addMessageCreator, updateNewMessageTextCreator} from "../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} avatar={d.avatar} /> );
    let messagesElements = state.messages.map(m => <Message id={m.id} key={m.id} message={m.message} sender={m.sender}/>);
    let newMessageElement = createRef();
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;
    return <div className={s.dialogs}>

        <div className={s.dialogsItems }>
            { dialogsElements }
            alert(props.state.message.id);
        </div>

        <div className={s.messages} >
            { messagesElements }
        </div>
        <AddMessageForm onSubmit={addNewMessage}/>
    </div>
}
/*const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.addMessageWind}>
        <div>
            <Field component="textarea" name="newMessageBody" placeholder="Enter Your Message" /!*ref={newMessageElement}*!//>
        </div>
        <div className={s.addMessageEll}>
            <button>Send a Message</button>
        </div>
    </form>
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)*/
export default Dialogs;