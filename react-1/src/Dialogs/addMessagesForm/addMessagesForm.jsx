import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "../Dialogs.module.css";
import {Textarea} from "../../Components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.addMessageWind}>
        <div className={s.addMessagePlace}>
            <Field component={Textarea} validate={[required, maxLength50]}
                   name="newMessageBody" placeholder="Enter Your Message" /*ref={newMessageElement}*//>
        </div>
        <div className={s.addMessageEll}>
            <button className={s.sendMessage}>Send a Message</button>
        </div>
    </form>
}
export default reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm)