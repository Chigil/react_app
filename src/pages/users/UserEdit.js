import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Crud from "../../services/crud.service";

const UserEdit = () => {
    const userCrud = new Crud('users');
    const [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getUser()
    }, []);
    const getUser = () => {
        userCrud.get(`${id}`).then((res) => {
            setUser(res.data)
        })
    };
    const onChange = (e) => {
        const field = e.target.id;
        setUser({...user, [field]: e.target.value})
    };
    const saveUser = (e) => {
        e.preventDefault();
        userCrud.update(user.id, user).then((res)=> {
            console.log('UPDATE');
            setUser(res.data);
        });
    };
    return (
        <form className="container m-5 col-6" onSubmit={saveUser}>
            {user && Object.keys(user).map((field, index) => {
                if (field === "id" || field === "address" || field === "company") return;
                return (
                    <div className="mb-3" key={index}>
                        <label htmlFor={field} className="form-label">{field}</label>
                        <input type="text"
                               className="form-control"
                               required
                               value={user[field]}
                               id={field}
                               onChange={onChange}
                        />
                    </div>
                )
            })
            }
            <button type="submit"
                    className="btn btn-primary"
            >
                Save
            </button>
        </form>
    );
};

export default UserEdit;