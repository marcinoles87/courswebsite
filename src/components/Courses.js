import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

const Courses = () => {

    const {courses} = useContext(StoreContext);
    const coursesElement = courses.map(course => <Courses key={course.id} {...course}/>);
    return (
        <>
            <section>

            </section>

        </>
      );
}
 
export default Courses;

