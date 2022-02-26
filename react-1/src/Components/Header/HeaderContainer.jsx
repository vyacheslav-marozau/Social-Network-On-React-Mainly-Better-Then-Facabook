import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "./../../api/api"

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authorization().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setAAuthUserData(id, email, login);
            }
        });
    }

    render() {
            return <Header {...this.props}/>
        }
    }
    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    });
export default connect(mapStateToProps, {setAAuthUserData}) (HeaderContainer);