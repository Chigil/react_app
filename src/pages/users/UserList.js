import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import Crud from "../../services/crud.service";
import Context from "../../context/context";
import {deleteUser} from "../../reducer/reducer";

const UserList = ({users}) => {
    const usersCrud = new Crud('users');
    const [showModal, setShowModal] = useState(false);
    const {dispatch} = useContext(Context);
    const removeUser = (id) => {
        usersCrud.delete(id).then((res) => {
            dispatch(deleteUser(id))
        })
    }
    return (
        <table className="table table_small">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            {users.map((user, index) =>
                <tbody key={index}>
                    <tr>
                        <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <button onClick={() => removeUser(user.id)} className="btn btn-outline-danger">Delete</button>
                    </tr>
                </tbody>
            )}
        </table>
    )
};

export default UserList;