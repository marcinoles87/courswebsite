import React, { createContext, useEffect, useState } from 'react';

import request from '../helper/request';

export const StoreContext = createContext(null);

const StoreProvider = ( {children}) => {

    const [courses,setCourses] = useState([]);
    const [user, setUser] = useState(null);

   
  

    const fetchData = async () => {
        const {data} = await request.get('/courses');

        setCourses(data.courses);

        console.log(data.courses)
        console.log(data.courses[3])
       
    };

   

    useEffect(() => {
        fetchData();
        
    },[]);

    

    return (
        <StoreContext.Provider value={[courses,user,setCourses,setUser]} >
        {children}
      
        </StoreContext.Provider>
    );
}
 


export default StoreProvider;