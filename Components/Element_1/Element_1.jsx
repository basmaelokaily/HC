import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import circles from '../../assets/circles.svg';
import bluecircle from '../../assets/bluecircle.svg';
import dart from '../../assets/Group.svg'
import hand from '../../assets/hand.svg';
import lamb from '../../assets/lamb.svg';

import './Element_1.css';
import { Button } from '../Button/Button';


function Element_1() {
  return (
    <div className='continer-fluid my_container position-relative '>
      <img src={circles} alt="circles" className='circles img-fluid' />
      <div className='row first_half position-absolute top-0 start-0 w-100'>
         {/**top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center */}
        <div className='cards_1 col-md-6 col-12 my-4'>
            <h2 className='header_2'>Health Information Managment</h2>
            <p className='paragraph'>The Saudi Health Information Management Association (SHIMA) is a non-profit professional association, established under the auspices of the Saudi Commission for Health Specialties (SCFHS). The association aims to develop and promote the profession of health information management in the Kingdom of Saudi Arabia through organizing training and educational programs to qualify and train professionals in the field of health information management and informatics.</p>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('hey')}
                >
                About Us
            </Button>
        </div>
        <div className='cards_2 col-md-5 col-12 my-4'>
            <div className='first_event '>
              <p className='date_day'>05</p>
              <p className='date_month'>JULY</p>
              <hr className='seperatorcard'/>
              <p className='event'>Conferences and<br/> Workshops</p>
              <div className='second_event'>
                  <p className='date_day'>06</p>
                  <p className='date_month'>JULY</p>
                  <hr className='seperatorcard'/>
                  <p className='event'>Mentoring and Q&A's</p>
              </div>
              <img src={bluecircle} alt="bluecircle" className='bluecircle'/>
            </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className='row second_half position-absolute w-100 mt-5'>
          <div className='col-12'>
              <h2 className='header_21 mx-4'>About Saudi Society for</h2>
              <h2 className='header_22 mx-4'> Health Information Management</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mycard h-100 ">
              <div className="card-body">
                  <hr className='seperatorcard-2'/>
                  <h5 className="card-title">Our <span className='card-title-2'>Mission & Value</span></h5>
                  <p className="card-text">Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu </p>
              </div>
              <img src={dart} className="card-img-top  h-75 w-75 mx-auto" alt="..."/>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mycard h-100">
              <div className="card-body">
                  <hr className='seperatorcard-2'/>
                  <h5 className="card-title">Our <span className='card-title-2'>Goals</span></h5>
                  <p className="card-text">Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Dictum
                      sollicitudin diam ac lorem cras tellus
                      facilisis ut. Morbi dictum ut sed.</p>
              </div>
              <img src={lamb} className="card-img-top w-75 h-75 mx-auto" alt="..."/>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mycard h-100">
              <div className="card-body">
                  <hr className='seperatorcard-2'/>
                  <h5 className="card-title">Our <span className='card-title-2'>Regulations</span></h5>
                  <p className="card-text">Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Dictum
                      sollicitudin diam ac lorem cras tellus
                      facilisis ut. Morbi dictum ut sed.</p>
              </div>
              <img src={hand} className="card-img-top  h-75 w-75 mx-auto" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Element_1


/**import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import circles from '../../assets/circles.svg';
import bluecircle from '../../assets/bluecircle.svg';

import './Element_1.css';
import { Button } from '../Button/Button';

function Element_1() {
  return (
    <div className='container-fluid my_container position-relative'>
      <img src={circles} alt="circles" className='circles img-fluid' />
      <div className='row first_half position-absolute top-0 start-0 w-100'>
        <div className='col-md-6 my-4'>
          <h2 className='header_2'>Health Information Management</h2>
          <p className='paragraph'>
            The Saudi Health Information Management Association (SHIMA) is a non-profit professional association, established under the auspices of the Saudi Commission for Health Specialties (SCFHS). The association aims to develop and promote the profession of health information management in the Kingdom of Saudi Arabia through organizing training and educational programs to qualify and train professionals in the field of health information management and informatics.
          </p>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            About Us
          </Button>
        </div>
        <div className='col-md-5 my-4'>
          <div className='first_event'>
            <p className='date_day'>05</p>
            <p className='date_month'>JULY</p>
            <hr className='seperatorcard' />
            <p className='event'>Conferences and<br /> Workshops</p>
            <div className='second_event'>
              <p className='date_day'>06</p>
              <p className='date_month'>JULY</p>
              <hr className='seperatorcard' />
              <p className='event'>Mentoring and Q&A's</p>
            </div>
            <img src={bluecircle} alt="bluecircle" className='bluecircle' />
          </div>
        </div>
      </div>
      <div className='row second_half position-absolute top-50 start-0 w-100'>
        <h2 className='header_21'>About Saudi Society for</h2>
        <h2 className='header_22'> Health Information Management</h2>
      </div>
    </div>
  );
}

export default Element_1;
 */