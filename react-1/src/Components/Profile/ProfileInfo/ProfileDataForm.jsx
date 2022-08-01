import React from "react";
import s from "./ProfileInfo.module.css";
import Jobtrue from "./isLookingForAJobTrue.jpg";
import Jobfalse from "./isLookingForAJobFalse.jpg";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControl.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit} className={s.descriptionBlock}>
        <div><button>Save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>{profile.fullName}</b> {createField("Full Name", "fullName", [], Input)}
        </div>
        <div>
            <b>About Me: </b> {profile.aboutMe} {createField("About Me", "aboutMe", [], Textarea)}
        </div>
        <p>Date of Birth: 31 February</p>
        <p>City: London</p>
        <p>Education: BSPU'12</p>
        <div>
            <b>Looking For A Job:</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <br></br>
        <img src={profile.lookingForAJob === true ? Jobtrue : Jobfalse} title={profile.lookingForAJob === true ? 'YES' : 'NO'} alt={'I am looking for a job'} width = '80px' height = '80px' />
        {!profile.lookingForAJob &&
        <div>
            <b>My professional skills</b> : {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>}
        <div>
            <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key} :  {createField(key, "contacts." + key, [], Input)}</b>
            </div>/*<Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/
        })}
        </div>

    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm