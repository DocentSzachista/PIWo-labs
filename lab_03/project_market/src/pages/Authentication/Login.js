import {Form, Field, Formik} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {  loginUser } from '../../api/fetchData';
import { useContext } from 'react';
import { UserContext } from '../../context/Context';
const Login = () =>{
    const {user, addUserToStorages} = useContext(UserContext);
    const navigate = useNavigate();
    const initial = {
        "login" : "",
        "password": ""
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
        return errors;
    };
    const onSubmit = async values =>{
        const response=  await loginUser(values);
        if(!response){
            alert("Logowanie się nie powiodło");
        }
        else{
            await addUserToStorages(response);
            navigate("/home");
        }
        // console.log(users.filter( (it) => { return it.login === values.login  }));
        console.log(user);
    };

    return(
    <>
            <Formik initialValues={initial} validate={validate} onSubmit={onSubmit}>
                
                <div className="form-container">
                    <div className="form-wrapper">
                        <h3 className="mb-5 content-center"> Zaloguj się </h3>
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
                                    <label > Login
                                        <Field className="form-control form-control-lg" name="password" type="password" required />
                                    </label>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="content-center">
                                <button className="btn  btn-success" type="submit"> Zaloguj się </button>
                            </div>
                            <div className='text-center fs-6' >
                                Nie masz konta? <Link to="/register" >  Zarejestruj się </Link>
                            </div> 
                        </Form>
                    </div>
                </div>
                
            </Formik>
        </>
    );

} ;
export default Login;