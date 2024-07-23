import { useRef, useState, useEffect } from "react";
import '../index.css';
import { faCheck, faTimes, faInfoCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import close from '../assets/close2.svg';
import {Link} from 'react-router-dom';
import './Register.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
const REGISTER_URL = '/register';

const Register = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [Fname, setFname] = useState('');
    const [validFname, setValidFname] = useState(false);
    const [FnameFocus, setFnameFocus] = useState(false);

    const [Lname, setLname] = useState('');
    const [validLname, setValidLname] = useState(false);
    const [LnameFocus, setLnameFocus] = useState(false);

    const [email, setemail] = useState('');
    const [validemail, setValidemail] = useState(false);
    const [emailFocus, setemailFocus] = useState(false);

    const [password, setpassword] = useState('');
    const [validpassword, setValidpassword] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);

    const [password_confirmation, setpassword_confirmation] = useState('');
    const [validconfirmation, setValidconfirmation] = useState(false);
    const [confirmationFocus, setconfirmationFocus] = useState(false);

    const [phone, setphone] = useState('');
    const [validphone, setValidphone] = useState(false);
    const [phoneFocus, setphoneFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidFname(USER_REGEX.test(Fname));
    }, [Fname])

    useEffect(() => {
        setValidLname(USER_REGEX.test(Lname));
    }, [Lname])

    useEffect(() => {
        setValidemail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidpassword(PWD_REGEX.test(password));
        setValidconfirmation(password === password_confirmation);
    }, [password, password_confirmation])

    useEffect(() => {
        setValidphone(PHONE_REGEX.test(phone));
    }, [phone])

    useEffect(() => {
        setErrMsg('');
    }, [Fname, Lname, email, password, password_confirmation, phone])

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack

        const values = { Fname, Lname, email, password, password_confirmation, phone };
        console.log(values);

        const v1 = USER_REGEX.test(Fname);
        const v2 = USER_REGEX.test(Lname);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = PWD_REGEX.test(password);
        const v5 = PHONE_REGEX.test(phone);
        const v6 = isChecked;
    
        if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6) {
            setErrMsg("Invalid Entry");
            return;
        }

        try {
            const response = axios.post(REGISTER_URL,
                JSON.stringify(values),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                });

            console.log("Response received:", JSON.stringify(response?.data));
            console.log("Access token:", response?.accessToken);
            /*await axios.post(REGISTER_URL, {Fname, Lname, email, password, password_confirmation, phone}).then(response => {
                console.log(response.data);
               }).catch(error => {
                    console.log(error);
               })*/
            setSuccess(true);
            // clear state and controlled inputs
            // need value attrib on inputs for this
            setFname('');
            setLname('');
            setemail('');
            setpassword('');
            setpassword_confirmation('');
            setphone('');
            setIsChecked(false);
        } catch (err) {
            console.error('Error during request:', err);
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
    };
    
    // if (!isopen) return null
    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <div className="">
                    <section className="conatiner-fluid reg-bg-con p-5">    
                        <div className="row vh-100">
                            <div className="col-md-4">
                                <div className="form-container">
                                    <div className="inner">
                                        <div className="close-btn-container">
                                            <Link to="/" className='no-underline-close'><img src={close}/>
                                            </Link> 
                                        </div>
                                        
                                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-between align-items-center">
                                                <h1 className="title mx-auto">&nbsp;&nbsp;Create a New Account</h1>                                                
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit} className="ms-4 me-4">
                                            <div className="fname-lname">
                                                <div className="row">
                                                    <div className="col-sm-6 ">
                                                        <div className="inner">
                                                            <label htmlFor="Fname">
                                                                First Name:
                                                                <FontAwesomeIcon icon={faCheck} className={validFname ? "valid" : "hide"} />
                                                                <FontAwesomeIcon icon={faTimes} className={validFname || !Fname ? "hide" : "invalid"} />
                                                            </label>
                                                            <input
                                                                placeholder="Type your first name"
                                                                className="form-control mt-2"
                                                                type="text"
                                                                id="Fname"
                                                                ref={userRef}
                                                                autoComplete="off"
                                                                onChange={(e) => setFname(e.target.value)}
                                                                value={Fname}
                                                                required
                                                                aria-invalid={validFname ? "false" : "true"}
                                                                aria-describedby="uidnote"
                                                                onFocus={() => setFnameFocus(true)}
                                                                onBlur={() => setFnameFocus(false)}
                                                            />
                                                            <p id="uidnote" className={FnameFocus && Fname && !validFname ? "instructions" : "offscreen"}>
                                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                                4 to 24 characters.<br />
                                                                Must begin with a letter.<br />
                                                                Letters, numbers, underscores, hyphens allowed.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="inner">
                                                            <label htmlFor="Lname">
                                                                Last Name:
                                                                <FontAwesomeIcon icon={faCheck} className={validLname ? "valid" : "hide"} />
                                                                <FontAwesomeIcon icon={faTimes} className={validLname || !Lname ? "hide" : "invalid"} />
                                                            </label>
                                                            <input
                                                                placeholder="Type your nast name"                                                            
                                                                className="form-control mt-2"
                                                                type="text"
                                                                id="Lname"
                                                                autoComplete="off"
                                                                onChange={(e) => setLname(e.target.value)}
                                                                value={Lname}
                                                                required
                                                                aria-invalid={validLname ? "false" : "true"}
                                                                aria-describedby="uidnote"
                                                                onFocus={() => setLnameFocus(true)}
                                                                onBlur={() => setLnameFocus(false)}
                                                            />
                                                            <p id="uidnote" className={LnameFocus && Lname && !validLname ? "instructions" : "offscreen"}>
                                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                                4 to 24 characters.<br />
                                                                Must begin with a letter.<br />
                                                                Letters, numbers, underscores, hyphens allowed.
                                                            </p>                                    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <label htmlFor="email">
                                                Email:
                                                <FontAwesomeIcon icon={faCheck} className={validemail ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validemail || !email ? "hide" : "invalid"} />
                                            </label>
                                            <input
                                                placeholder="Type your email"
                                                className="form-control mt-2"
                                                type="text"
                                                id="email"
                                                onChange={(e) => setemail(e.target.value)}
                                                value={email}
                                                required
                                                aria-invalid={validemail ? "false" : "true"}
                                                aria-describedby="emailnote"
                                                onFocus={() => setemailFocus(true)}
                                                onBlur={() => setemailFocus(false)}
                                            />
                                            <p id="emailnote" className={emailFocus && !validemail ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                Allowed Email Pattern Username<span aria-label="at symbol">@</span>site<span aria-label="hashtag">.</span>com
                                            </p>

                                            <label htmlFor="phone">
                                                Mobile number:
                                                <FontAwesomeIcon icon={faCheck} className={validphone ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validphone || !phone ? "hide" : "invalid"} />
                                            </label>
                                            <input
                                                placeholder="+966 512 345 678"
                                                className="form-control mt-2"
                                                type="number"
                                                id="phone"
                                                onChange={(e) => setphone(e.target.value)}
                                                value={phone}
                                                required
                                                aria-invalid={validphone ? "false" : "true"}
                                                aria-describedby="phonenote"
                                                onFocus={() => setphoneFocus(true)}
                                                onBlur={() => setphoneFocus(false)}
                                            />
                                            <p id="phonenote" className={phoneFocus && !validphone ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                Saudia Arabia phone number<br />
                                            </p>


                                            <label htmlFor="password">
                                                Password:
                                                <FontAwesomeIcon icon={faCheck} className={validpassword ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validpassword || !password ? "hide" : "invalid"} />
                                            </label>
                                            <input
                                                placeholder="********"
                                                className="form-control mt-2"
                                                type="password"
                                                id="password"
                                                onChange={(e) => setpassword(e.target.value)}
                                                value={password}
                                                required
                                                aria-invalid={validpassword ? "false" : "true"}
                                                aria-describedby="passwordnote"
                                                onFocus={() => setpasswordFocus(true)}
                                                onBlur={() => setpasswordFocus(false)}
                                            />
                                            <p id="passwordnote" className={passwordFocus && !validpassword ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                8 to 24 characters.<br />
                                                Must include uppercase and lowercase letters, a number and a special character.<br />
                                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                            </p>


                                            <label htmlFor="password_confirmation">
                                                Confirm Password:
                                                <FontAwesomeIcon icon={faCheck} className={validconfirmation && password_confirmation ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validconfirmation || !password_confirmation ? "hide" : "invalid"} />
                                            </label>
                                            <input
                                                placeholder="********"
                                                className="form-control mt-2"
                                                type="password"
                                                id="password_confirmation"
                                                onChange={(e) => setpassword_confirmation(e.target.value)}
                                                value={password_confirmation}
                                                required
                                                aria-invalid={validconfirmation ? "false" : "true"}
                                                aria-describedby="confirmnote"
                                                onFocus={() => setconfirmationFocus(true)}
                                                onBlur={() => setconfirmationFocus(false)}
                                            />
                                            <p id="confirmnote" className={confirmationFocus && !validconfirmation ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                Must match the first password input field.
                                            </p>

                                            
                                            <div className="form-check">
                                                <input 
                                                    className="form-check-input mt-3" 
                                                    type="checkbox" 
                                                    value="" 
                                                    id="defaultCheck1"
                                                    checked={isChecked}
                                                    onChange={handleCheckboxChange}/>
                                                <label 
                                                    className="form-check-label mt-3" 
                                                    for="defaultCheck1">
                                                    &nbsp; By clicking (Signup) I'm confirming that I'm 16 or older, and I accept the <a href="#">Terms of Use</a>
                                                </label>
                                            </div>
                                            
                                            <button className="btn submit mt-2 mb-2 btn--border" disabled={!validFname || !validLname || !validemail || !validpassword || !validconfirmation || !validphone || !isChecked ? true : false}>Sign Up</button>
                                            
                                            <p className="line">
                                                Already registered?&nbsp;
                                                <span className="line">
                                                    {/*put router link here*/}
                                                    <Link to="/login">Sign In</Link>
                                                </span>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </section>
                </div>
                
            )}
        </>
    )

}

export default Register