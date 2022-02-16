import React from 'react';

const UserList = ({users}) => {
    return (
        <table className="table table_small">
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
            </thead>
            {users.map((user, index) =>
                <tbody>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.country}</td>
                </tbody>
            )}
        </table>
    )
};

export default UserList;