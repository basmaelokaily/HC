import { useRef, useState, useEffect } from "react";
import axios from '../api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo.png';
import Rec from '../assets/bg.png';

const Sign_up_verf = () => {
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
                            <div className="col-md-6 ">
                                <div className="inner p-2">
                                    {/*errormessage*/}
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-between align-items-center">
                                            <h1 className="title mt-4 mb-4 ms-3">&nbsp;&nbsp;Sign in to your Account</h1>
                                            <img src={logo} className="img-fluid" alt="Logo" style={{ maxHeight: '80px', width: 'auto' }} />
                                        </div>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    
        </>
    )
}

export default Sign_up_verf