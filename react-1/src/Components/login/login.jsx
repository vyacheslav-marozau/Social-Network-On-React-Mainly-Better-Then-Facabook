import React from "react";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {authAPI, profileAPI} from "../../api/api";
import {NavLink, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Profile from "../Profile/Profile";
import ProfileContainer from "../Profile/ProfileContainer";
import {Input} from "../common/FormsControls/FormsControls";
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

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field label='email' placeholder={"email"} name={"email"} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field label='Password' placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"}/>
        </div>
        <div>
            <Field label='Remember Me' component={renderField} name={"rememberMe"} type="checkbox"/>
        </div>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
        </form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {

    const onSubmit = ({email = '', password = '', rememberMe = false}) => {
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
            props.authorization(email, password, rememberMe);
           // debugger;
        }
    }
    if (props.isAuth) {
        return <Redirect to={"/profile/" /*+ props.userId*/} />
    }
    if (props.url) {
        return <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
            <img src={props.url} alt="captcha"/>
            <div>
                <Field label='Captcha' placeholder={"Enter The Letters From A Picture Below"} name={"captcha"} component={Input} validate={[required]} type={"text"}/>
            </div>
        </div>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    url: state.auth.url
})
export default connect (mapStateToProps, {authorization}) (Login);