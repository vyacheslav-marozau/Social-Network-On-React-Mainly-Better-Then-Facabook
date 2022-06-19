import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    /*let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }*/
    return <div>
        <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} onPageChanged={onPageChanged} pageSize={pageSize}/>
        {/*<button onClick={this.getUsers}>Get Users</button>*/}
        <div>
        {
            users.map(u => {
                return <User user={u}
                             followingInProgress={props.followingInProgress}
                             follow={props.follow}
                             unFollow={props.unFollow}
                             key={u.id}/>

            })
        }
        </div>
    </div>
}
export default Users;