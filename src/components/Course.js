import React from "react";
import { StoreContext } from "../store/StoreProvider";
import CourseStyle from './CourseStyle.css';

const Course = ( {courses, authors , img , price , title} ) => {

// const allAuthors = authors.join(', ');

 
    console.log(courses);

    return ( 

        <article>
            <h3 className="article">{courses}</h3>
            <img alt="title" className="imgStyle" src={img}></img>
            <p>cena kursu to : blaaaa{price}</p>
            <h1>{title}</h1>
            
        </article>
     );
}
 
export default Course;