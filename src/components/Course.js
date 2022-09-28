import React from "react";
import { StoreContext } from "../store/StoreProvider";
import CourseStyle from './CourseStyle.css';

const Course = ( { authors , img , price , title} ) => {

// const allAuthors = authors.join(', ');

 
    

    return ( 

        <article>
            <h1>{authors}</h1>
            <h3 className="article">{title}</h3>
            {/* <img alt="title" className="imgStyle" src={img}></img> */}
            <p>cena kursu to : blaaaa{price}</p>
            <h1>{price}</h1>
            
        </article>
     );
}
 
export default Course;