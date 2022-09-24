import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import Course from "./Course";

const Courses = () => {

    const {courses} = useContext(StoreContext);
    const coursesElements = courses.map(course => <Course key={course.id} {...course}/>);
   
    return (
        <>
            <section>
                <h2>Title cours</h2>

                <ul>
                {coursesElements}
                <Course/>
                </ul>
               
            </section>

        </>
      );
}
 
export default Courses;

