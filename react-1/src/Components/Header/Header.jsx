import React from 'react';
import s from './Header.module.css'
import logo from './Logo_New.png'
import {NavLink} from "react-router-dom";
    const Header = (props) => {
        return <header className={s.header}>
        <img src={logo} alt='Logo' />
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                <NavLink to={'/login'}>Login</NavLink>}
        </div>
        </header>
    }
//https://autoby.biz/i/news/2021/renault/new-logo.png
export default Header; 