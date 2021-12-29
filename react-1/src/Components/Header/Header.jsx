import React from 'react';
import s from './Header.module.css'
import logo from './Logo_New.png'
    const Header = () => {
        return <header className={s.header}>
        <img src={logo} alt='Logo' />
        </header>
    }
//https://autoby.biz/i/news/2021/renault/new-logo.png
export default Header; 