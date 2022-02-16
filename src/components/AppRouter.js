import React from 'react';
import {Route, Routes} from "react-router-dom";
import Users from "../pages/users/Users";
import Counter from "./Counter";
import Posts from "./Posts/Posts";



const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Users/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path='/posts' element={<Posts/>} />
        </Routes>
    );
};

export default AppRouter;