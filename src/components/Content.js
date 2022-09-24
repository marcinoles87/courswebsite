import React, { useContext } from "react";
import { Route  , Routes, Navigate } from "react-router-dom";
import { StoreContext } from "../store/StoreProvider";
import ContentStyle from './ContentStyle.css';
import Courses from './Courses';

const Content = () => {

    const { user }  = useContext(StoreContext);

    const isUserLogged = Boolean(user);
    const isAdmin = user?.accessLevel === 1;

    const ADMIN_TYPE = 1;

    return ( 
       <main className="main">
        <Routes>
            <Route exact path="/"  render={ () => <Courses/>}/>
            { isUserLogged && <Route exact path="/my-courses"  render={ () => <p>Moje kursy</p>}/> }
            { isUserLogged && <Route exact path="/manage-courses"  render={ () => <p>Zarzadzanie kursami</p>}/> }
            {/* <Navigate to="/" /> */}
        </Routes>
        </main>
     );
}
 
export default Content ;