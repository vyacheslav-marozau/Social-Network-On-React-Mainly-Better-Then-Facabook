import React from 'react';
import './App.css';
import './ava-scorpion-mortal-kombat-008.jpg'
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

/* import Footer from './Footer';
import Header from './Header.js';
import Technologies from './Technologies'; */
/*
let dialogs = [{id: 1, name: 'Pastor J'},
    {id: 2, name: 'Joakin'},
    {id: 3, name: 'Lautaro'},
    {id: 4, name: 'Marshall Bruce Mathers III'},
    {id: 5, name: 'Ansu Fati'},
    {id: 6, name: 'Ekaterina'}];
let messages = [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'How is your React-learning?'},
    {id: 1, message: 'Yo, Broz!'},
    {id: 1, message: 'Yo, Broz!'},
    {id: 1, message: 'Yo, Broz!'}
];
*/

const App = (props) => {

  return (
      <BrowserRouter>
    <div className="App">
      <div className='app-wrapper'>
      <Header />
      <NavBar />
          <div className='app-wrapper-content'>
                  <Routes>
                     <Route exact path='/dialogs'
                                  element={<Dialogs
                                      state={props.state.dialogsPage}/>}/>
                      <Route path='/profile'
                                  element={<Profile
                                      state={props.state.profilePage} />}/>
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
                  </Routes>
            {/*  News Music Settings */}
          </div>
      </div>
    </div>
            </BrowserRouter>
  );
}
  


export default App;
