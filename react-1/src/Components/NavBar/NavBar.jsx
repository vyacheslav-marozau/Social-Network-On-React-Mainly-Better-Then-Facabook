import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import tag from './orange-round.png'

    const NavBar = (props) => {
        let sideBar = props.store.getState().sidebar;

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
        <div className={s.item}>
            <NavLink to="/friends" className = { navData => navData.isActive ? s.active : s.item }>Friends</NavLink>
        </div>
            <ul className={s.friendsList}>
                <img src={tag} alt="Tag" />
                <img src={tag} alt="Tag" />
                <img src={tag} alt="Tag" />
                <li>{sideBar.friends[0].name}</li>
                <li>{sideBar.friends[1].name}</li>
                <li>{sideBar.friends[2].name}</li>
            </ul>

      </nav>
     }
export default NavBar;