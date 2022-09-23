import React from "react";
import {Link} from 'react-router-dom';

const AdminMenu = ({isUserLogged}) => (
    <>
    <p className="aside-title">Panel Administratora</p>
    <nav>
        <ul>
            <li className="aside-link">
                <Link to="/" >Zarzadzanie w sprzedazy</Link>
            </li>
            {isUserLogged && <li><Link to="/my-courses">Moje kursy</Link></li>}
        </ul>
    </nav>
    </>
)
    

 
export default AdminMenu;