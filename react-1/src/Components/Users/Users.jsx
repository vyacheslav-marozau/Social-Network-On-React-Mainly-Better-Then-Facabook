import React from 'react';
import w from './Users.module.css'
import avatar from "./Komisarenko_Avatar.png";

let Users = (props) => {
debugger;
if (props.users.length === 0) {
    props.setUsers(
        [
            {
                id: 1,
                photoUrl: avatar,
                followed: false,
                fullName: 'Dmitriy',
                status: 'I\'m a boss?',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: avatar,
                followed: true,
                fullName: 'Lautaro',
                status: 'I\'m a boss',
                location: {city: 'Milan', country: 'Italy'}
            },
            {
                id: 3,
                photoUrl: avatar,
                followed: true,
                fullName: 'Marshall Bruce Matters II',
                status: 'I\'m a boss',
                location: {city: 'Detroit', country: 'USA'}
            },
            {
                id: 4,
                photoUrl: avatar,
                followed: true,
                fullName: 'Ekaterina',
                status: 'I\'m a boss',
                location: {city: 'Soligorsk', country: 'Belarus'}
            },
            {
                id: 5,
                photoUrl: avatar,
                followed: true,
                fullName: 'Memphis',
                status: 'I\'m a boss',
                location: {city: 'Barcelona', country: 'Spain'}
            }
        ]
    )
    }
    return <div>
        {
        props.users.map(u => { return <div key={u.id}>
            <span>
                <div>
                    <img className={w.avatar} src={u.photoUrl} alt={'Avatar'}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

                </div>
            </span>
            <span>
                <span><div>{u.fullName}</div><div>{u.status}</div></span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>
        })
    }
    </div>
}
export default Users;