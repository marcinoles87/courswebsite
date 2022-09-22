import React, { useContext } from "react";

import { StoreContext } from "../store/StoreProvider";

const Header = () => {

    const {user,setUser} = useContext(StoreContext);
    const setProperlyLabel = Boolean(user) ? 'Wyloguj sie' : 'Zaloguj sie'

    return ( 
        <header>
            <div className="logo"></div>
                <h1 className="title">Super kursy dla programistow  !!!</h1>
                <button>{setProperlyLabel}</button>
            
        </header>
     );
}
 
export default Header;