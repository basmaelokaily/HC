import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bg3 from '../../assets/third-bg.svg';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Mem_Hero.css';
import NavbarTest from '../NabarTest/NavbarTest';

/**<div class="carousel-caption">
                    <h1>Second slide label</h1>
                    <p>Some representative placeholder content for the second slide.</p>
                </div> */

function Mem_Hero() {
  return <>
    <NavbarTest/>
    <div className='au-hero-container min-vh-100'>
        <img className="au-background_image" src={bg3} alt="background_picture"/>
        <div className="au-backg_content">
            <h5>SAUDI SOCIETY FOR</h5>
            <h1>Health Information Managemant</h1>
            <p className="au-hero-parag">THE RITZ-CARLTON, RIYADH, FEBRUARY 19 - 20, 2024</p>
        </div>
    </div>
  </>
}

export default Mem_Hero
