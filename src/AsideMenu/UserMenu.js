import React from "react";
import {Link} from 'react-router-dom';

const UserMenu = ({isUserLogged}) => (
    <>
    <p className="aside-title">Panel Uzytkownika</p>
    <nav>
        <ul>
            <li className="aside-link">
                <Link to="/" > Kursy w sprzedazy</Link>
                <p> dostepne dla ciebie to :</p>
            </li>
            {isUserLogged && <li><Link to="/my-courses">Moje zakupione kursy</Link></li>}
        </ul>
    </nav>
    </>
)
    

 
export default UserMenu;