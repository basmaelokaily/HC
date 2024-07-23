import React from 'react'
import './Section2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';
import dart from '../../assets/Group.svg'
import hand from '../../assets/hand.svg';
import lamb from '../../assets/lamb.svg';

function Section2() {
  return (
    <div className='container-fluid'>
      <div className='row second_half position-absolute w-100 mt-5'>
        <div className='col-md-12'>
            <h2 className='header_21 mx-4'>About Saudi Society for</h2>
            <h2 className='header_22 mx-4'> Health Information Management</h2>
        </div>
        <div className="row ms-md-3">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card mycard h-100 ">
                    <div className="card-body">
                        <hr className='seperatorcard-2'/>
                        <h5 className="card-title">Our <span className='card-title-2'>Mission & Value</span></h5>
                        <p className="card-text">Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu </p>
                    </div>
                    <img src={dart} className="card-img-top h-75 w-75 mx-auto" alt="..."/>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
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
            <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
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

export default Section2
/**<div className="card membership-card">
            <div className='mem-imgContainer'>
                <img src={item.img} className="mem-img-top" alt="..."/>
            </div>
            <div className="card-body">
                <h5 className="mem-card-title">Card title</h5>
                <p className="mem-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button
                    className='btns'
                    buttonStyle='btn--white2'
                    onClick={console.log('hey')}
                >
                    Register Now
                </Button>            </div>
        </div> */