import React from "react";
import styles from "./Users.module.css";
import avatar from "./Komisarenko_Avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {follow, usersAPI} from "./../../api/api"

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? styles.selectedPage : styles.pointer}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {/*<button onClick={this.getUsers}>Get Users</button>*/}
        {
            props.users.map(u => {
                return <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img className={styles.avatar} src={u.photos.small != null ? u.photos.small : avatar}
                         alt={'Avatar'}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            usersAPI.unFollow(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unFollow(u.id);
                                    }
                                });

                        }}>Unfollow</button>
                        : <button onClick={() => {
                            usersAPI.follow(u.id).then(data => {
                                if (data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                            });


                        }}>Follow</button>}

                </div>
            </span>
                    <span>
                <span><div>{u.name}</div><div>{u.status}</div></span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
                </div>
            })
        }
    </div>
}
export default Users;