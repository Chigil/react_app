import React from 'react';
import {useState} from "react";

const UserAdd = ({users, setUsers, closeModal}) => {
    const onChange = (e) => {
        const field = e.target.id;
        setValues({...values, [field]: e.target.value})
    };
    const addUser = () => {
        setUsers([...users, values]);
        setValues({
            name: '',
            age: '',
            country: '',
        })
        closeModal()
    };

    const [values, setValues] = useState({
        name: '',
        age: '',
        country: '',
    });

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