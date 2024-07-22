import { useRef, useState, useEffect } from "react";
import axios from '../api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo.png';
import Rec from '../assets/bg.png';
import {Link} from 'react-router-dom';

const Login_version2 = () => {
    
    const userRef = useRef();
    const errRef = useRef();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [errMsg, seterrMsg] = useState("");
    const [Sucess, setSuccess] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        seterrMsg("");
    }, [email, password]);

    const handleSubmit = async (e) => {
        const values = {email, password};
        console.log(values);
    }
    return (
        <>
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

                                    <button className="btn mt-3" disabled={false   ? true : false}>Sign In</button>
                                    {/**!validemail || !validpassword */}

                                    <p className="line mt-2">
                                        Don't have an Account?&nbsp;
                                        <span className="line">
                                            {/*put router link here*/}
                                            <Link to='/signup'>Sign Up</Link>
                                        </span>
                                    </p>
        
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </section>
                    
        </>
    )
}

export default Login_version2