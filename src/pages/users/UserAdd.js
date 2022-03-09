import React, {useContext} from 'react';
import {useState} from "react";
import Context from "../../context/context";
import Crud from "../../services/crud.service";
import {addNewUser} from "../../reducer/reducer";

const UserAdd = ({closeModal}) => {
    const {state, dispatch} = useContext(Context);
    const usersCrud = new Crud('users');
    const onChange = (e) => {
        const field = e.target.id;
        setValues({...values, [field]: e.target.value})
    };
    const addUser = () => {
        usersCrud.create(values).then((res) => {
            dispatch(addNewUser(res.data))
            setValues({
                name: '',
                age: '',
                country: '',
                id: Date.now(),
            })
            closeModal()
        })
    };

    const [values, setValues] = useState({
        name: '',
        age: '',
        country: '',
        id: Date.now(),
    });
    console.log(values)
    return (
        <>
            {Object.keys(values).map((value, index) => {
                if (value === 'age') {
                    return <input
                        id={value}
                        key={index}
                        type="number"
                        value={values[value]}
                        placeholder={`Input user ${value}`}
                        onChange={onChange}
                    />
                }
                return <input
                    id={value}
                    key={index}
                    value={values[value]}
                    placeholder={`Input user ${value}`}
                    onChange={onChange}
                />
            })
            }
            <button className="mt-4 btn btn-primary" onClick={addUser}>Add new User</button>
        </>
    );
};

export default UserAdd;