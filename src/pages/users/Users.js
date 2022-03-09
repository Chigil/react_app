import React, {useContext, useEffect, useState} from 'react';
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import MyModal from "../../components/MyModal/MyModal";
import Context from "../../context/context";
import Crud from "../../services/crud.service";
import {setUsers} from "../../reducer/reducer";

const Users = () => {
    const usersCrud = new Crud('users');
    const [showModal, setShowModal] = useState(false);
    const {state, dispatch} = useContext(Context);
    const getUsers = () => {
        usersCrud.getAll().then((res) => {
           dispatch(setUsers(res.data))
        })
    }
    useEffect(()=> {
        getUsers();
    },[])
    return (
        <div className="container">
         <UserList users={state.users} />
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
                <UserAdd closeModal={() => setShowModal(false)}  />
            </MyModal>
        </div>
    );
};

export default Users;