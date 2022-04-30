import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../components/DeletePopup";
import { addToBasket } from "../basket/actions";
import Cart from "../assets/cart.svg";
import "../styles/cart.css";
const StudentNotices = (props) =>{
    const [popup, showPopup] = useState(false);
    const [index, setIndex] = useState(null);
    const {students, setStudentNotice , query, dispatch} = props;
    const navigate = useNavigate();

    const toComponent = (obj)=>{
        navigate('sendMessage',
        {
            state: [ {email: obj.email, name: obj.name}
                    ]
        } 
        );
    };
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
        return query === "" || it.name.toLowerCase().includes(query) 
                || it.description.toLowerCase().includes(query) 
                || it.tags.join(" ").toLowerCase().includes(query)
                || it.courses.join(" ").toLowerCase().includes(query);
    }).map((iterator, index) =>{
        return (
        <div className="col-sm-4 mt-4">
            <div className="card" key={index}>
            {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                
                <div className="card-header d-flex justify-content-around">
                    <span>Ogłoszenie</span>  
                    <a className="cart" onClick={ () => {toComponent(iterator) }}>
                    Wyślij wiadomość  </a>
                    <img src={Cart} className="bg-image hover-zoom cart" onClick={() =>{dispatch(addToBasket(iterator)); }}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{iterator.name}</h5>
                    <p className="card-text">{iterator.description}</p>
                    <div className="d-flex justify-content-around">
                        { generateTags(iterator.tags) }
                    </div>
                </div>
                <div className="card-footer">
                    { generateCourses(iterator.courses)}
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-secondary">Edit </button>
                        <button className="btn btn-danger" onClick={()=>{showPopup(true); setIndex(index)}}>Delete</button>
                    </div>
                </div>
                
            </div>
        </div>
        );
    });

    return(
        <>
            {popup ?  
            <DeletePopup list={students} stateFunc={setStudentNotice} id={index} setVisibility={showPopup} />
            :
            <div className="card-group ">
                {generateStudentsListHTML}
            </div>
            }
            
        </>
    );

}
export default StudentNotices;