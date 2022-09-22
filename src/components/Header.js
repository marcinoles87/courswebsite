import React, { useContext, useState } from "react";

import { StoreContext } from "../store/StoreProvider";
import LoginForm from "./LoginForm/LoginForm";

const Header = () => {

    const [isModalOpen , setIsModalOpen] = useState(false);
    const {user,setUser} = useContext(StoreContext);
    const setProperlyLabel = Boolean(user) ? 'Wyloguj sie' : 'Zaloguj sie'

    const handleOnClick = () => {
        if(Boolean(user)) {
            setUser(null);
        }else {
            setIsModalOpen(true);
        }
    }


    const handleOnClose = () => setIsModalOpen(false);
    return ( 
        <header>
            <div className="logo"></div>
                <h1 className="title">Super kursy dla programistow  !!!</h1>
                <button>{setProperlyLabel}</button>
                <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}/>
        </header>
     );
}
 
export default Header;