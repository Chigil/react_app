import React, {useState} from 'react';
import UserList from "./UserList";
import UserAdd from "./UserAdd";

const Users = () => {
    const [users, setUsers] = useState([
        {
            name: 'Franko',
            age: 32,
            country: 'USA',
        },
        {
            name: 'Stefano',
            age: 25,
            country: 'Italy',
        },
        {
            name: 'Macumoto',
            age: 66,
            country: 'Japan',
        },
    ]);
    return (
        <div className="container">
            <UserList users={users}/>
            <UserAdd users={users} setUsers={setUsers}/>
        </div>
    );
};

export default Users;