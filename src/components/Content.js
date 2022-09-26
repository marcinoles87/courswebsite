import React, { useContext } from "react";
import { Route  , Routes, Navigate } from "react-router-dom";
import { StoreContext } from "../store/StoreProvider";
import ContentStyle from './ContentStyle.css';
import Courses from './Courses';
import Course from "./Course";
import UserCourses from "../UserCourses/UserCourses";

const Content = () => {

    const { user }  = useContext(StoreContext);
    console.log(user);

    const isUserLogged = Boolean(user);
    const isAdmin = user?.accessLevel === 1;

    const ADMIN_TYPE = 1;

    return ( 
       <main className="main">
       
        <Routes>
            <Route exact path="/" element={<Course/>}  render={ () => <Courses/>}/>
            { isUserLogged && <Route exact path="/my-courses"  render={ () => <UserCourses/>}/> }
            { isUserLogged && <Route exact path="/manage-courses"  render={ () => <p>Zarzadzanie kursami</p>}/> }
            {/* <Navigate to="/" /> */}
        </Routes>
        </main>
     );
}
 
export default Content ;