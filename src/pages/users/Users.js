import React, {useState} from 'react';
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import MyModal from "../../components/MyModal/MyModal";

const Users = () => {
    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Franko',
            age: 32,
            country: 'USA',
        },
        {
            id: 2,
            name: 'Stefano',
            age: 25,
            country: 'Italy',
        },
        {
            id: 3,
            name: 'Macumoto',
            age: 66,
            country: 'Japan',
        },
    ]);
    return (
        <div className="container">
            <UserList users={users} />
            <button
                className="btn btn-secondary"
                onClick={() => setShowModal(true)}
            >
                Add User
            </button>
            <MyModal
                visible={showModal}
                onCancel={() => setShowModal(false)}
                closeButtonShow
            >
                <UserAdd users={users} setUsers={setUsers} closeModal={() => setShowModal(false)}  />
            </MyModal>
        </div>
    );
};

export default Users;