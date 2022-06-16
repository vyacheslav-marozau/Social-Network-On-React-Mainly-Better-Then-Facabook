import React from 'react';
import './App.css';
import NavBarContainer from './Components/NavBar/NavBarContainer';
//import Dialogs from "./Dialogs/Dialogs";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./../src/Components/login/loginContainer";
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect, Provider} from "react-redux";
//import {getAuthUserData} from "./redux/auth-reducer"
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloder/Preloader";
import store from "./redux/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        //return <Preloader/>
        //alert(!this.props.initialized);
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    {<NavBarContainer/>}
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/Login' component={LoginPage}/>
                            {/*<Route path='/news'
                                  element={<News
                                      newsPage={props.state.newsPage}
                                      dispatch={props.dispatch}
                                       />}/>
                      <Route path='/music'
                                  element={<Music
                                      musicPage={props.state.musicPage}
                                      dispatch={props.dispatch}
                                       />}/>
                      <Route path='/settings'
                                  element={<Settings
                                      profilePage={props.state.profilePage}
                                      dispatch={props.dispatch} />}/>
                      <Route path='/friends'
                             element={<Dialogs
                                 state={props.state.dialogsPage} />}/>*/}
                        </Switch>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store} >
            <AppContainer />
        </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp;