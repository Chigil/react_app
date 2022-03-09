import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import Crud from "../../services/crud.service";
import {editUser} from "../../reducer/reducer";
import Context from "../../context/context";

const UserEdit = () => {
    const userCrud = new Crud('users');
    const { dispatch } = useContext(Context);
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
            dispatch(editUser(res.data,user.id));
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