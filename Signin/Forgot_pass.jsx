import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo.png';
import Rec from '../assets/bg.png';

const Forgot_pass = () => {
    const handleSubmit = async (e) => {}
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
                                {/*errormessage*/}
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                        <h1 className="title mt-4 mb-4 ms-3">&nbsp;&nbsp;Sign in to your Account</h1>
                                        <img src={logo} className="img-fluid" alt="Logo" style={{ maxHeight: '80px', width: 'auto' }} />
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit} className="ms-4 me-4">
                                    <label htmlFor="email">
                                        Email:
                                        {/**  <FontAwesomeIcon icon={faCheck} className={validemail ? "valid" : "hide"} />
                                              <FontAwesomeIcon icon={faTimes} className={validemail || !email ? "hide" : "invalid"} /> */}
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        type="text"
                                        id="email"
                                    />
                                    {/**onChange={(e) => setemail(e.target.value)}
                                        value={email} 
                                        required
                                        aria-invalid={validemail ? "false" : "true"}
                                        aria-describedby="emailnote"
                                        onFocus={() => setemailFocus(true)}
                                        onBlur={() => setemailFocus(false)}
                                    
                                    <p id="emailnote" className={emailFocus && !validemail ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        8 to 24 characters.<br />
                                        Must include uppercase and lowercase letters, a number and a special character.<br />
                                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                    </p>
                                        */
                                }

                                    <button className="btn mt-3" disabled={false   ? true : false}>Reset</button>
                                    {/**!validemail || !validpassword */}

                                    <p className="line mt-2">
                                        Don't have an Account?&nbsp;
                                        <span className="line">
                                            {/*put router link here*/}
                                            <a href="#">Sign Up</a>
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

export default Forgot_pass