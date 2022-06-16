import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/// import store from "./redux/redux-store";
/// import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import SamuraiJSApp from "./App";
/*let h1 = document.createElement("h1");
h1.innerHTML = "HELLO";
document.querySelector("body")
    .appendChild(h1);
React.createElement("h1", [React.createElement(App)]);*/
     /*setInterval(() => {
        store.dispatch({type: "FAKE"})
    }, 1000);*/
ReactDOM.render(<React.StrictMode><SamuraiJSApp/></React.StrictMode>, document.getElementById('root'));

/*store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

