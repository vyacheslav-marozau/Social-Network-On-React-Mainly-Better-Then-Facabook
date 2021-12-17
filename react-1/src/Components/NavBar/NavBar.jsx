import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

    const NavBar = () => {
        return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }
            >Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
        </div>
            <div className={s.item}>
                <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
      </nav>
     } 
//{s.item + ' ' + s.active}
export default NavBar; 