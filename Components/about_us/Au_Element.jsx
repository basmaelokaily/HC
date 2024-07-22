import React from 'react'
import './Au_Element.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pic1 from '../../assets/Image1.svg';

function Au_Element() {
  return (
    <div className='container-fluid au-e1-con'>
        <div className='row'>
            <div className='col-md-6'>
                <p className='au-e1-p1'>About SHIMA</p>
                <h3 className='au-e1-header'>The Saudi <span className='au-e1-h-green'>Health Information Management</span> Association </h3>
                <p className='au-e1-p2'>The Saudi Health Information Management Association (SHIMA) is a non-profit professional association, established under the auspices of the Saudi Commission for Health Specialties (SCFHS). The association aims to develop and promote the profession of health information management in the Kingdom of Saudi Arabia through organizing training and educational programs to qualify and train professionals in the field of health information management and informatics. These efforts aim to raise awareness of the importance of health information management and contribute to the development of standards and professional practices, enhancing the ability to communicate and coordinate with relevant government and private entities to develop the healthcare sector in the Kingdom. It also aims to represent professionals in the field of health information management and informatics at the local, regional, and international levels.
                </p>
            </div>
            <div className='col-md-6'>
                <img src={pic1} className='img-con'/>
            </div>
        </div>
    </div>
  )
}

export default Au_Element
