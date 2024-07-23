import React, { useState } from 'react'
// import css style
import './NavbarTest.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import About_us from '../../Pages/About_us';
import './NavbarTest.css';

export default function NavbarTest() {

  return <>
      <nav className={`navbar navbar-expand-lg `}> 
        {/* ${styles.navbar} */}
      <div className="container">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <button className="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active text-white" aria-current="page" >&nbsp;Home&nbsp;</Link>
            </li>
            <li className="nav-item">
              <Link to={'/about-us'} className="nav-link active text-white" aria-current="page" >&nbsp;About&nbsp;</Link>
            </li>
            <li className="nav-item">
              <Link to={'/'} className="nav-link active text-white" aria-current="page" >&nbsp;Board Members&nbsp;</Link>
            </li>
            <li className="nav-item">
              <Link to={'/membership'} className="nav-link active text-white" aria-current="page" >&nbsp;Membership&nbsp;</Link>
            </li>
            <li className="nav-item">
              <Link to={'/'} className="nav-link active text-white" aria-current="page" >&nbsp;Contact us&nbsp;</Link>
            </li>
          </ul>   
        </div>
      </div>
    </nav>
  </>
   
  
}
