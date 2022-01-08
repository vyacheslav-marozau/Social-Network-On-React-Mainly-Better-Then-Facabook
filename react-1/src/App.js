import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


const App = (props) => {
  return (
    <div className="App">
      <div className='app-wrapper'>
      <Header />
      <NavBar store = {props.store}/>
          <div className='app-wrapper-content'>
                  <Routes>
                     <Route exact path='/dialogs'
                                  element={<Dialogs
                                      newMessageText={props.state.dialogsPage.newMessageText}
                                      //state={props.state.dialogsPage}
                                      dispatch={props.dispatch}
                                      store={props.store}
                                  />}/>
                      <Route path='/profile'
                                  element={<Profile
                                      //profilePage={props.state.profilePage}
                                      dispatch={props.dispatch}
                                      store={props.store}
                                  />}/>
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
                  </Routes>
          </div>
      </div>
    </div>

  );
}
  


export default App;
