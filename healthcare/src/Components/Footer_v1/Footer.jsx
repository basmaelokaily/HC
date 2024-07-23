import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import logo_white from '../../assets/logo_white.svg';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="container-fluid fluid-container">
      <div className="inner_container">
        <div className='row footer-subscription '>
          <div className="newsletter col-md-6" >
            <p className='footer-subscription-heading'>
              Join Our Newsletter</p>
            <p className='footer-subscription-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* <div className='input-areas col-md-6'>
            <form>
              <div className='inline_form'>
                <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder='Email'
                />
                <Button         
                  className='subscribe-btn'                    
                  buttonStyle='btn--primary'
                >
                Subscribe</Button>
              </div>
              <p className='under_sub'>By subscribing you agree to with our Privacy Policy</p>
            </form>
          </div> */}
        </div>
        <div className='row footer-links'>
          <div className='footer-link-items col-md-3'>
            <div className="logo_white">
              <img src={logo_white}></img>
            </div>
          </div>
          <div className='footer-link-items col-md-3'>
            <h5>Main Page</h5>
            <Link to='/' className='no-underline'><p className='text-white'>Home</p></Link>
            <Link to='/' className='no-underline'><p className='text-white'>About Us</p></Link>
            <Link to='/' className='no-underline'><p className='text-white'>Board of Directors</p></Link>
            <Link to='/' className='no-underline'><p className='text-white'>Activities</p></Link>
          </div>
          <div className='footer-link-items col-md-3'>
            <h5>About Us</h5>
            <Link to='/' className='no-underline'><p className='text-white'>Our Vision</p></Link>
            <Link to='/' className='no-underline'><p className='text-white'>Our Values</p></Link>
            <Link to='/' className='no-underline'><p className='text-white'>Our Goals</p></Link>
            <Link to='/' className='no-underline'><p className='text-white'>Our Regulations</p></Link>
          </div>
          <div className='footer-link-items col-md-3'>
            <h5>Board of Directors</h5>
            <Link to='/' className='no-underline'><p className='text-white'>Board of Directors</p></Link>
            <Link to='/' className='no-underline'><p className='text-white'>General Assembly Meeting</p></Link>
          </div>
        </div>

        <hr className='seperator'/>
        <div className='row social-media-wrap'>
          <div className='rights col-md-3'> 
            <p>© 2023 Relume. All rights reserved</p>
          </div>
          <div className='col-md-2'>
            <Link to='/' className='no-underline'><p className='text-white'>Privacy Policy</p></Link>
          </div>
          <div className='col-md-2'>
            <Link to='/' className='no-underline'><p className='text-white'>Terms of Service</p></Link>
          </div>
          <div className='col-md-2'>
            <Link to='/' className='no-underline'><p className='text-white'>Cookies Settings</p></Link>
          </div>
          <div className='col-md-2 offset-md-1'>
            <Link to='/' className='no-underline text-white'><FontAwesomeIcon icon={faFacebook} size="lg" />&nbsp;&nbsp;</Link>
            <Link to='/' className='no-underline text-white'><FontAwesomeIcon icon={faInstagram}size="lg"/>&nbsp;&nbsp;</Link>
            <Link to='/' className='no-underline text-white'><FontAwesomeIcon icon={faTwitter} size="lg"/>&nbsp;&nbsp;</Link>
            <Link to='/' className='no-underline text-white'><FontAwesomeIcon icon={faLinkedin} size="lg"/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;