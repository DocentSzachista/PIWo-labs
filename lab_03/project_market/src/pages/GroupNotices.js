import React from "react";
import { Link } from "react-router-dom";
import { addToBasket } from "../basket/actions";
import Cart from "../assets/cart.svg";
import "../styles/cart.css";
class GroupNotice extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    createUsersHTML = (users) => {
        return users.map( (iterator, id) => {return (
            <span className=""  key={id}>
                {`${iterator.name} `} 
            </span>
         )}   );
     };

     
    
    render() {
        // normally i would use useNavigate but it is not supported in class components, so there goes localStorage
        // react classes sucks \_('_')_/
        const navigation = (obj) =>{
            localStorage.setItem("users", JSON.stringify(obj));
        };
        
        const {groupNotices, query, dispatch} = this.props;
        const groupNoticesHTML = groupNotices.filter( (it) =>{
            return query ==="" 
                    || it.groupName.toLowerCase().includes(query)
                    || it.course.toLowerCase().includes(query)
                    || it.description.toLowerCase().includes(query)
                    || it.people.join(" ").toLowerCase().includes(query)
        }  )
        .map( (iterator, index) =>{
            return(
            <div className="col-sm-4 mt-4">
                <div className="card" key={index}>
                    <div className="card-header">Grupa: {iterator.groupName} <Link to={{
                        pathname: `sendGroupMessage`
                    }} onClick ={() => {navigation(iterator.people)}}>Wyślij wiadomość</Link>
                    <img src={Cart} className="bg-image hover-zoom cart" onClick={() =>{dispatch(addToBasket(iterator)); }}/>
                    </div>
                    <h5 className="card-title">Kurs: {iterator.course}</h5>
                    <p className="card-text">{iterator.description}</p>
                    <div className="card-footer">
                        {`Uczestnicy:  `}
                        {this.createUsersHTML(iterator.people)}

                        <div className="d-flex justify-content-between">
                        <Link className="btn btn-secondary" to={`edit/${iterator.id}`}>Edit </Link>
                            <Link className="btn btn-danger" to={`delete/${iterator.id}`}>Delete</Link>
                        </div>    
                    </div>
                </div>
            </div>
            );
        });
         // class components are real shit 
        return (   
        <div className="card-group ">
            {groupNoticesHTML}
        </div>
        );
    }
};

export default GroupNotice;