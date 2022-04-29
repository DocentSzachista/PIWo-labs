import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Popup from "../components/Popup";

const SendMessage = () => {
    
    const location = useLocation();
    const [img, setImg] = useState("");    
    const [popup, setPopUp] = useState(false);
    const updatePopup = ()=>{
        setPopUp(!popup);
    };
    
    const dataObj = location.state || JSON.parse(localStorage.getItem("users"));
    // const parameter = useParams();
    const onSubmit = async (values, {resetForm}) =>{
        dataObj.forEach( (element) => {
            const dataToSend = {
                param : element.email,
                value : values.message 
            };
            //Simulate sending
            console.log(dataToSend); 
        });
        updatePopup();
        resetForm();
    };
    const initialValues = {
        message: ""
    };
    const validation = values =>{
      
        const errors ={};
        if(values.message.length === 0)
            errors.message = "Empty";
        return errors;
    };
    const fetchImg = async () =>{
        const res = await fetch("https://random-memer.herokuapp.com/", 
            {mode: 'cors' }
        );
        const imgBlob = await res.blob();
        const imgObjURL = URL.createObjectURL(imgBlob);
        setImg(imgBlob);
    };
    useEffect(()=>{
        // fetchImg();
    });

    return(<>
        { popup && <Popup updatePopup={updatePopup}/>  }
        <div className="form-container">
                    <div className="form-wrapper">
                    <h3 className="mb-5 content-center"> Wyślij wiadomość </h3>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validation}>
            
            <Form >
            <div className="form-group">
                <label className="full-row"> Opis 
                    <Field className="form-control form-control-lg" name="message" as="textarea" rows='3' required />
                </label>
            </div>
            <div className="content-center">
                <button className="btn  btn-success" type="submit" >Wyślij wiadomość</button>
            </div>
            </Form>
        </Formik>
            </div>
        </div>
        <img src={img} alt="icons" width="250px" height="100px"/>
    </>);
};
export default SendMessage;