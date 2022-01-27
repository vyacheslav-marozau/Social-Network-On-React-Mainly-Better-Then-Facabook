import React from 'react';
import w from './Users.module.css'
import avatar from "./Komisarenko_Avatar.png";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    getUsers = () => {
        /*if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });
        }*/
    }

    render() {
        return <div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {
                this.props.users.map(u => { return <div key={u.id}>
            <span>
                <div>
                    <img className={w.avatar} src={u.photos.small != null ? u.photos.small : avatar} alt={'Avatar'}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}

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
}
export default Users;