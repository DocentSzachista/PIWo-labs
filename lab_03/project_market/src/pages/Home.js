import { useState } from "react";
import { Link } from "react-router-dom";
const Home = (props) =>{
    const {students, query} = props;
    const generateTags = (tags) =>{
        return tags.map( (iterator, id) =>{
            return (
                <p className="p-2 badge badge-pill badge-primary"  key={id}>
                    {iterator} 
                </p>
            );
        } )
    };
    const generateCourses = (courses) => {
        return courses.map( (iterator, index) =>{
            return(
                <p className="text-muted" key={index}>{iterator}</p>
            );
        }
        );
    }

    const generateStudentsListHTML = students.filter((it) => {
        return query === "" || it.firstname.includes(query) 
                || it.description.includes(query) 
                || it.tags.join(" ").toLowerCase().includes(query)
                || it.courses.join(" ").toLowerCase().includes(query);
    }).map((iterator, index) =>{
        return (
        <div className="col-sm-4 mt-4">
            <div className="card" key={index}>
                <div className="card-header d-flex justify-content-around">
                    <span>Ogłoszenie</span>  
                    <Link to={`/sendMessage/${iterator.email}`}>  Wyślij wiadomość  </Link> 
                </div>
                <h5 className="card-title">{iterator.firstname}</h5>
                <p className="card-text">{iterator.description}</p>
                <div className="d-flex justify-content-around">
                    { generateTags(iterator.tags) }
                </div>
                <div className="card-footer">
                    { generateCourses(iterator.courses)}
                </div>
            </div>
        </div>
        );
    });

    return(
        <>
            <div className="card-group ">
            
                {generateStudentsListHTML}
            </div>
        </>
    );

}
export default Home;