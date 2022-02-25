import React from 'react';
import {Link} from "react-router-dom";

const UserList = ({users}) => {
    return (
        <table className="table table_small">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Country</th>
                </tr>
            </thead>
            {users.map((user, index) =>
                <tbody key={index}>
                    <tr>
                        <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.country}</td>
                    </tr>
                </tbody>
            )}
        </table>
    )
};

export default UserList;