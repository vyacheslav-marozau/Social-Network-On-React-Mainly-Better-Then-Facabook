import React from "react";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {authAPI, profileAPI} from "../../api/api";
import {NavLink, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Profile from "../Profile/Profile";
import ProfileContainer from "../Profile/ProfileContainer";
import {createField, Input} from "../common/FormsControls/FormsControls";
import state from "../../redux/state";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {authorization} from "../../redux/auth-reducer";
import style from "./../common/FormsControls/FormsControl.module.css"

const renderField = ({type, label, input, meta: {touched, error}}) => (
    <div className="input-row">
        <label>{label}</label>
        <br/>
        <input {...input} type={type}/>
        {touched && error &&
        <span className="error">{error}</span>}
    </div>
)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input, null, 'email')}
            {createField("Password", "password", [required], Input, {type: "password"}, 'Password')}
            {createField(null, "rememberMe", [], renderField, {type: "checkbox"}, 'Remember Me')}
        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
        </form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {

    const onSubmit = ({email = '', password = '', rememberMe = false, captcha = null}) => {
        let error = {};
        let isError = false;
        if (email.trim() === '') {
            error.login = 'Enter Login!!!';
            isError = true;
        }
        if (email.length > 20) {
            error.login = 'Too Long!';
            isError = true;
        }
        if (password.trim() === '') {
            error.password = 'Enter Password!!!';
            isError = true;
        }
        if (isError) {
            throw new SubmissionError(error);
        }
        else {
            props.authorization(email, password, rememberMe, captcha);
           // debugger;
        }
    }
    if (props.isAuth) {
        return <Redirect to={"/profile/" /*+ props.userId*/} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect (mapStateToProps, {authorization}) (Login);