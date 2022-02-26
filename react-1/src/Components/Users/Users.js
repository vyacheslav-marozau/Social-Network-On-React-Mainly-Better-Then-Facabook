import React from "react";
import styles from "./Users.module.css";
import avatar from "./Komisarenko_Avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleIsFollowingProgress} from "../../redux/users-reducer";

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
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            debugger;
                            props.toggleIsFollowingProgress(true, u.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "3fff7fee-1d46-407e-9e6e-a8481ae27684"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unFollow(u.id);
                                    }
                                    props.toggleIsFollowingProgress(false, u.id);
                                });

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            //debugger;
                            props.toggleIsFollowingProgress(true, u.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "3fff7fee-1d46-407e-9e6e-a8481ae27684"
                                }
                            })
                                .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                                    props.toggleIsFollowingProgress(false, u.id);
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