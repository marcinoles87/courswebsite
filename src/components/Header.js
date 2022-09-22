import React, { useContext } from "react";

import { StoreContext } from "../store/StoreProvider";

const Header = () => {

    const {user,setUser} = useContext(StoreContext);
    const setProperlyLabel = Boolean(user) ? 'Wyloguj sie' : 'Zaloguj sie'

    return ( 
        <header>
            <div className="logo">
                <h1>Super kursy dla programistow</h1>
                <button>{setProperlyLabel}</button>
            </div>
        </header>
     );
}
 
export default Header;