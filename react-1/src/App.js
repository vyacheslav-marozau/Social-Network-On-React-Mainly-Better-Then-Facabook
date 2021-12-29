import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addMessage, updateNewMessageText, updateNewPostText} from "./redux/state";


const App = (props) => {
  return (

    <div className="App">
      <div className='app-wrapper'>
      <Header />
      <NavBar sideBar = {props.state.sideBar}/>
          <div className='app-wrapper-content'>
                  <Routes>
                     <Route exact path='/dialogs'
                                  element={<Dialogs
                                      state={props.state.dialogsPage}
                                      newMessageText={props.state.dialogsPage.newMessageText}
                                      addMessage={props.addMessage}
                                      updateNewMessageText={props.updateNewMessageText}
                                  />}/>
                      <Route path='/profile'
                                  element={<Profile
                                      profilePage={props.state.profilePage}
                                      addPost={props.addPost}
                                      updateNewPostText={props.updateNewPostText}
                                  />}/>
                      {/*postsAr = {posts}*/}
                      <Route path='/news'
                                  element={<Dialogs
                                      state={props.state.dialogsPage} />}/>
                      <Route path='/music'
                                  element={<Dialogs
                                      state={props.state.dialogsPage} />}/>
                      <Route path='/settings'
                                  element={<Dialogs
                                      state={props.state.dialogsPage} />}/>
                      <Route path='/friends'
                             element={<Dialogs
                                 state={props.state.dialogsPage} />}/>
                  </Routes>
          </div>
      </div>
    </div>

  );
}
  


export default App;
