import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bg1 from '../../assets/Topback.svg';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './HeroSection.css';
import { useState } from 'react'
import Modal from '../../Signup/Modal';
import Register from '../../Signup/Register';

function HeroSection() {
  const [isopen, setisopen] = useState(false)
  return <>
    <div className='container-fluid hero-container vh-100'>
      <img className="background_image" src={bg1} alt="background_picture"/>
      <div className='overlay'>
          <div className='row col-md-6'>
              <div className="backg_content p-5">
                  <h5 className='home-hero-h2'>SAUDI SOCIETY FOR</h5>
                  <h3 className='home-hero-h1'>Health Information Management</h3>
                  <p className='home-hero-para'>THE RITZ-CARLTON, RIYADH, FEBRUARY 19 - 20, 2024</p>
                  <div className='hero-btns'>
                    <Button
                      className='btns'
                      buttonStyle='btn--primary'
                      buttonSize='btn--large'
                      onClick={()=> 
                      setisopen(true)}
                    >
                    Join Us
                    {/* <Link to="/register" className='no-underline-btn'>Join Us</Link> */}
                    </Button>
                    <Modal open={isopen} onClose={()=> setisopen(false)}><Register/></Modal>
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                    Learn More
                    </Button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </>
}

export default HeroSection
