import {useEffect, useState} from "react";
import {userService} from "../Services/user.service";
import User from "./User";
import UserDetails from "./UserDetails";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const showUser = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))
    }, [])
    return (
        <div>
            {
                users.map(user => <User key = {user.id} user = {user} showUser = {showUser}/>)
            }
            {
                user && <UserDetails key = {user.id} user = {user}/>
            }
        </div>
    );
};

export default Users;