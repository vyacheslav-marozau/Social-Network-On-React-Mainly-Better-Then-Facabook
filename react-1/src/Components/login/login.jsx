import React from "react";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {authAPI, profileAPI} from "../../api/api";
import {NavLink, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Profile from "../Profile/Profile";
import ProfileContainer from "../Profile/ProfileContainer";
//import {authorization} from "../../redux/auth-reducer";

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
            <Field label='email' placeholder={"email"} name={"email"} component={renderField}/>
        </div>
        <div>
            <Field label='Password' placeholder={"Password"} name={"password"} component={renderField}/>
        </div>
        <div>
            <Field label='Remember Me' component={renderField} name={"rememberMe"} type="checkbox"/>
        </div>
        <div>
            <button>Login</button>
        </div>
        </form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {

    async function authorizationz(data) {
        try {
            let response = await fetch('https://social-network.samuraijs.com/api/1.0/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            let responseJson = response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
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
            // submit form to server
            debugger;
            authorizationz({email, password, rememberMe})
                //.then(data => console.log(data))
                // .then(data => profileAPI.getProfile(data.data.userId))

                .then(data => {render: {<ProfileContainer profile = {data.data.userId}></ProfileContainer>}})

            //console.log('Valid Submition');
        }
        //console.log(formData);
        //authorization(formData.login, formData.password, formData.rememberMe);
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;