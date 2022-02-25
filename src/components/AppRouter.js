import React from 'react';
import {Route, Routes} from "react-router-dom";
import Users from "../pages/users/Users";
import Counter from "./Counter";
import Posts from "./Posts/Posts";
import UserEdit from "../pages/users/UserEdit";
import NotFound from "../pages/NotFound";



const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Users/>} />
            <Route exact path='/users' element={<Users/>} />
            <Route exact path='/users/:id' element={<UserEdit/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    );
};

export default AppRouter;