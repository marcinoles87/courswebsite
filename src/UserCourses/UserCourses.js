import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

const UserCourses = () => {
    const { user , courses } = useContext(StoreContext);
    
    return ( 

        
      <div>
        <section>
            <h2>Twoje wykupione kursy : </h2>
            <ul>

            </ul>
        </section>
      </div>
     );
}
 
export default UserCourses;