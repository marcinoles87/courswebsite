import React, { createContext, useEffect, useState } from 'react';

import request from '../helper/request';



const StoreProvider = ( {children}) => {

    const [courses,setCourses] = useState([]);
    const [user, setUser] = useState(null);

   
  

    const fetchData = async () => {
        const {data} = await request.get('/courses');

        setCourses(data.courses);

      


       
    };

   

    useEffect(() => {
        fetchData();
        
    },[]);

    console.log(courses)

  


    return (
        <StoreContext.Provider value={
        [courses ]
       }
        >
       
        {children}
      
        </StoreContext.Provider>
    );
}
 


export default StoreProvider;
export const StoreContext = createContext(null);