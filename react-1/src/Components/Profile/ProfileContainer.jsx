import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "../../Dialogs/Dialogs";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1049;
        }
        this.props.getUserProfile(userId);
        //setTimeout( () => {
            this.props.getUserStatus(userId);
        //}, 1000);

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status || "------------"} updateStatus={this.props.updateStatus}/>
            )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
export default compose(
    connect( mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);