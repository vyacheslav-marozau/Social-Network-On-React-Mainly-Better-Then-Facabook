import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
            return <Header {...this.props} getAuthUserData={this.props.getAuthUserData}/* logout={this.props.logout}*//>
        }
    }
    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id
    });
export default connect(mapStateToProps, {setAuthUserData, logout}) (HeaderContainer);