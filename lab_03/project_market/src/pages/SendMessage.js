import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Popup from "../components/Popup";

const SendMessage = () => {
    const [popup, setPopUp] = useState(false);
    const updatePopup = ()=>{
        setPopUp(!popup);
        
    };
    const parameter = useParams();
    console.log(parameter);
    const onSubmit = async (values, {resetForm}) =>{
        const dataToSend = {
            param : parameter.id,
            value : values.message 
        };
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
    </>);
};
export default SendMessage;