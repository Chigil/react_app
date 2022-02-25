import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Crud from "../../services/crud.service";

const UserEdit = () => {
    const userCrud = new Crud('users');
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(()=> {
        getUser()
    },[]);

    const getUser = () => {
        userCrud.get(`${id}`).then((res) => {
            setUser(res.data)
        }).catch((e) => {
            setError(e.message)
        })
    };

    return (
        <div>
            {error ?
                <h1>
                    {error}
                </h1>

            :
                <div>
                    {user.name}
                </div>
            }
        </div>
    );
};

export default UserEdit;