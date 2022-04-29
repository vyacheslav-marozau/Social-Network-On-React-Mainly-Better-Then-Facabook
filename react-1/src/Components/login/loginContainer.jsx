import React from 'react';
import Login from "./login";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    componentDidMount() {
       /* this.props.authorization();*/
    }

    render() {
        return <Login {...this.props}/* authorization={this.props.authorization}*//>
    }
}
const mapStateToProps = (state) => ({
    /*isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id*/
});
export default connect(mapStateToProps, {setAuthUserData}) (LoginContainer);