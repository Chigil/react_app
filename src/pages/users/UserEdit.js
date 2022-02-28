import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Crud from "../../services/crud.service";

const UserEdit = () => {
    const userCrud = new Crud('users');
    const [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(()=> {
        getUser()
    },[]);

    const getUser = () => {
        userCrud.get(`${id}`).then((res) => {
            setUser(res.data)
        })
    };

    return (
        <div>
            {user.name}
        </div>
    );
};

export default UserEdit;