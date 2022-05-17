import React from 'react';
import Login from "./login";
import {connect} from "react-redux";
import {logout, setAuthUserData, setCaptchaUrl} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    componentDidMount() {
       /* this.props.authorization();*/
    }

    render() {
        return <Login {...this.props} authorization={this.props.authorization}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    url: state.auth.url
});
export default connect(mapStateToProps, {setAuthUserData, logout, setCaptchaUrl}) (LoginContainer);