import React from "react";
import { StoreContext } from "../store/StoreProvider";
import CourseStyle from './CourseStyle.css';

const Course = ( {authors , img , price , title} ) => {

// const allAuthors = authors.join(', ');


    return ( 

        <article>
            <h3 className="article">{authors}</h3>
            <img alt="title" className="imgStyle" src={img}></img>
            <p>cena kursu to : {price}</p>
            <h1>{title}</h1>
            
        </article>
     );
}
 
export default Course;