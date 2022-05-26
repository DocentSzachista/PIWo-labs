import { Link, useNavigate } from 'react-router-dom';
import {  loginUser } from '../../api/fetchData';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/Context';
import { logInWithGoogle, logInWithEmailAndPwd } from '../../firebase/users';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase/init';
import { useState } from 'react';
const Login = () =>{
    const {user, addUserToStorages} = useContext(UserContext);
    const [log_user, loading, error] = useAuthState(auth);

    const [email, setEmail] = useState("");
    const [pwd, setPWD] = useState("");

    const navigate = useNavigate();
    const initial = {
        "email" : "",
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
    const onSubmit = async() =>{
        if(!logInWithEmailAndPwd(email, pwd)) {
            alert("Nie powiodło się logowanie");
        }
    };
    useEffect(() => {
        if (loading)
            return
        if (log_user){
            addUserToStorages(log_user);
            navigate("/home");
        }
        if(error)
            console.error({error});
        }, [log_user, loading]);

    return(
    <>

                
                <div className="form-container">
                    <div className="form-wrapper">
                        <h3 className="mb-5 content-center"> Zaloguj się </h3>
                                                
                            <div className="row">
                                
                                <div className="form-outline">
                                    <label > Email
                                        <input className="form-control form-control-lg" name="email" type="email" onChange={(e) => setEmail(e.target.value)} required />
                                    </label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-outline">
                                    <label > Hasło
                                        <input className="form-control form-control-lg" name="password" type="password" onChange={(e) => setPWD(e.target.value)} required />
                                    </label>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="content-center" style={{"display": "flex", "flexDirection": "column"}}>
                                <button className="btn  btn-success" type="submit" onClick={onSubmit}> Zaloguj się </button>
                                <button className='btn btn-secondary' onClick={logInWithGoogle}> Zaloguj sie google'em </button>
                            </div>
                                
                            <div className='text-center fs-6' >
                                Nie masz konta? <Link to="/register" >  Zarejestruj się </Link>
                            </div> 
                    </div>
                </div>
               
          
            
        </>
    );

} ;
export default Login;