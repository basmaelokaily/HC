import { useRef, useState, useEffect, useContext} from "react";
// import axios from '../api/axios';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo.png';
import Rec from '../assets/bg.png';
import {Link} from 'react-router-dom';
import AuthContext from '../Context/AuthProvider';
// import axios from "../api/axios";

const LOGIN_URL ='/login';

const Login = () => {
    
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [errMsg, seterrMsg] = useState("");
    const [Success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        seterrMsg("");
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let response = await axios.post('http://127.0.0.1:8000/api/login' , {
            'email':email , 'password':password
        });
        console.log(response);
        // try{
        //     const response = axios.post(LOGIN_URL, 
        //         // {'email':email , "password"}
        //         JSON.stringify({email, password}),
        //         {
        //             headers: {'Content-Type': 'application/json'},
        //             withCredentials: true
        //         }
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     console.log(response);
        //     const token =response?.data?.token;
        //     setAuth({email, password, token});
        //     setemail("");
        //     setpassword("");
        //     setSuccess(true);
        // }
        // catch (err){
        //     if(!err?.response){
        //         seterrMsg("No Server Response");
        //     } 
        //     else if(err.response?.status === 400){
        //         seterrMsg("Missing email or Password")
        //     }
        //     else if(err.response?.status === 401){
        //         seterrMsg("Unauthorized")
        //     }
        //     else{
        //         seterrMsg("Login Failed");
        //     }
        //     errMsg.current.focus();
        // }
    }
    return (
        <>{Success ? (
            <section>
                <h1>your logged in</h1>
            </section>):(
            <section>    
                    <div className="row vh-100">
                        <div className="col-md-6">
                            <div className="inner">
                                 <div className="image">
                                    <img src={Rec} alt="back_grount" className="w-100 h-100 vh-100" />
                                </div> 
                            </div>
                        </div>
                  
                        <div className="col-md-6 ">
                            <div className="inner p-2">
                                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                <div className="row ">
                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                        <h1 className="title mt-4 mb-4 ms-3">&nbsp;&nbsp;Sign in to your Account</h1>
                                        <img src={logo} className="img-fluid" alt="Logo" style={{ maxHeight: '80px', width: 'auto' }} />
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit} className="ms-4 me-4">
                                    <label htmlFor="email">
                                        Email:
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        type="text"
                                        id="email"
                                        ref={userRef}
                                        autoComplete="off"
                                        required
                                        onChange={(e) => setemail(e.target.value)}
                                        value={email}
                                    />

                                    <label htmlFor="password">
                                        Password:
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        type="password"
                                        id="password"
                                        required
                                        onChange={(e) => setpassword(e.target.value)}
                                        value={password}
                                    />
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-between align-items-center">
                                            <div className="form-check">
                                                <input 
                                                    className="form-check-input mt-3" 
                                                    type="checkbox" 
                                                    value="" 
                                                    id="defaultCheck1"
                                                    />
                                                <label 
                                                    className="form-check-label mt-3" 
                                                    for="defaultCheck1">
                                                    &nbsp; Remember Me
                                                </label>
                                            </div>        
                                            <div className="mt-3" >
                                                <Link to="/forgotpassword" className="forgot">Forgot Password?</Link>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <button className="btn submit mt-3" disabled={false   ? true : false}>Sign In</button>
                                    {/**!validemail || !validpassword */}

                                    <p className="line mt-2">
                                        Don't have an Account?&nbsp;
                                        <span className="line">
                                            {/*put router link here*/}
                                            <Link to="/register" >Sign Up</Link>
                                        </span>
                                    </p>
        
                                </form>
                            </div>

                            
                        </div>
                    </div>
                </section>
           )}         
        </>
    )
}

export default Login