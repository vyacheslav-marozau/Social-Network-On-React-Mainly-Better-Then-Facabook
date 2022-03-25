import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {authorization, setAuthUserData} from "../../redux/auth-reducer"
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.authorization();
    }

    render() {
            return <Header {...this.props} authorization={this.props.authorization}/>
        }
    }
    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id
    });
export default connect(mapStateToProps, {setAuthUserData, authorization}) (HeaderContainer);