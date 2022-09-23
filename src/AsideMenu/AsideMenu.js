import React, { useContext } from "react";

import Aside from '../AsideMenu/Aside'
import { StoreContext } from "../store/StoreProvider";
import AdminMenu from "./AdminMenu";
import UserMenu from "./UserMenu";



const AsideMenu = () => {

    const ADMIN_TYPE =1;


    const {user} = useContext(StoreContext)

    const adminMenuComponent =  user.accessLevel === ADMIN_TYPE ?
    <AdminMenu/>
    :null;

    return (  
        <section className="aside-menu">
            <UserMenu isUserLogged={Boolean(user)} />
            {adminMenuComponent}

        </section>
    );
}
 
export default AsideMenu;