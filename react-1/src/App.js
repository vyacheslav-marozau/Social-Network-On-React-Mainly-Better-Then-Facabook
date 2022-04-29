import React from 'react';
import './App.css';
import NavBarContainer from './Components/NavBar/NavBarContainer';
//import Dialogs from "./Dialogs/Dialogs";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {Route, Switch} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./../src/Components/login/loginContainer";

const App = (props) => {
  return (
    <div className="App">
      <div className='app-wrapper'>
         <HeaderContainer />
          { <NavBarContainer/>}
          <div className='app-wrapper-content'>
              <Switch>
                     <Route exact path='/dialogs'
                            render = {() => <DialogsContainer
                                        //newMessageText={props.state.dialogsPage.newMessageText}
                                        //state={props.state.dialogsPage}
                                        //dispatch={props.dispatch}
                                        /*store={props.store}*/ />
                            }

                                  /*component={<DialogsContainer
                                      //store={props.store}
                                  />}*//>
                      <Route path='/profile/:userId?'
                             render = {() => <ProfileContainer
                                              //profilePage={props.state.profilePage}
                                              //dispatch={props.dispatch}
                                              /*store={props.store}*/
                                              />}

                             /*component={<ProfileContainer
                                      //store={props.store}
                                  />}*//>
                      <Route path='/users'
                             render = {() => <UsersContainer/>}
                      />
                  <Route path='/Login'
                         component={LoginPage}/>
                  {/*<Route path='/login'
                         render = {() => <LoginPage />*/}}
                  />
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
  


export default App;
