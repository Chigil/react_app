import React, {useContext, useState} from 'react';
import AuthContext from "../context/context";

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const [values, setValues] = useState({ login:'', password:'' });
    const onChange = (e) => {
        const field = e.target.id;
        setValues({...values, [field]: e.target.value})
    };
    console.log(values)
    const login = () => {
        const user = {login: 'test@gmail.com', password: '12345'}
        if (values.password === user.password && values.login === user.login) {
            return setAuth(true)
        }
    }
    return (
        <form className="container mt-5 col-6">
            <div className="mb-3">
                <label htmlFor="login" className="form-label">Email address</label>
                <input type="email"
                       className="form-control"
                       id="login"
                       aria-describedby="emailHelp"
                       onChange={onChange}
                />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"
                       className="form-control"
                       id="password"
                       onChange={onChange}
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox"
                       className="form-check-input"
                       id="exampleCheck1"
                />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={login}>Submit</button>
        </form>
    );
};

export default Login;