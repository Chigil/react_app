import React from 'react';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <h1>Page not found</h1>
            <NavLink className="btn btn-primary" to='/'>go to Home</NavLink>
        </div>
    );
};

export default NotFound;