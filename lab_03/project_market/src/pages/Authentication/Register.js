import {Form, Field, Formik} from 'formik';
import { Link } from 'react-router-dom';
import { registerUser } from '../../api/fetchData';
const Register = () =>{

    const initial = {
        "login" : "",
        "password": "",
        "passwordCheck": ""
    }; 
    const validate = values => {
        let errors = {};
        if( !values.login ) {
            errors.login = "Login is required";
        } else if ( values.login.length < 5)
            errors.login = "login length is too short";
        if (!values.password) {
            errors.password = "Password is required";
        }
        if (values.password !== values.passwordCheck){
            errors.passwordCheck = "Passwords must match";
        }
        return {};
    };
    const onSubmit = async values =>{
        const user=  await registerUser(values);
        if(!user){
            alert("Rejestracja się nie powiodła");
        }
        else{
            alert("Rejestracja się udała ")
        }
    };

    return(
    <>
            <Formik initialValues={initial} validate={validate} onSubmit={onSubmit}>
                
                <div className="form-container">
                    <div className="form-wrapper">
                        <h3 className="mb-5 content-center"> Zarejestruj się </h3>
                        <Form >
                            <div className="row">
                                
                                <div className="form-outline">
                                    <label > Login
                                        <Field className="form-control form-control-lg" name="login" type="input" required />
                                    </label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-outline">
                                    <label > Hasło
                                        <Field className="form-control form-control-lg" name="password" type="password" required />
                                    </label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-outline">
                                    <label > Powtórz hasło
                                        <Field className="form-control form-control-lg" name="passwordCheck" type="password" required />
                                    </label>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="content-center">
                                <button className="btn  btn-success" type="submit"> Zarejestruj się </button>
                            </div>
                        </Form>
                    </div>
                </div>
                
            </Formik>
        </>
    );

} ;
export default Register;