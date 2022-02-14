import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import tag from './orange-round.png'

    const NavBar = (props) => {
        let sideBar = props.sidebar;
        return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/profile" activeClassName={s.active} className = {s.item}/*{ navData => navData.isActive ? s.active : */
            >Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active} className = {s.item}/*{ navData => navData.isActive ? s.active : */>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active} className = {s.item}/*{ navData => navData.isActive ? s.active : */>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active} className = {s.item}/*{ navData => navData.isActive ? s.active : */>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.active} className = {s.item}/*{ navData => navData.isActive ? s.active : */>Settings</NavLink>
        </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active} className = {s.item}/*{ navData => navData.isActive ? s.active : */>Find Users</NavLink>
            </div>
        <div className={s.item}>
            <NavLink to="/friends" activeClassName={s.active} className = {s.item}/*{ navData => navData.isActive ? s.active : */>Friends</NavLink>
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