import React from 'react'
import { Link } from 'react-router-dom';
import { faFacebookF, faDribbble, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.css';

function card({item}) {
  return (
    <div>
        <div className="card board-card col-md mb-4 mx-2">
            <div className="row">
                <div className="col-md-4 imageContainer-bod">
                    <img src={item.img} className="img-fluid bod-card-img-top rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 textContainer-bod">
                    <div className="card-body">
                        <h5 className="card-title bod-header1">{item.title}</h5>
                        <h5 className="card-text bod-header2">This is a wider card with supporting </h5>
                        <p className="card-text bod-header3"><small className="text-body-secondary">kcj</small></p>
                        <div className='socials'>
                            <Link to='/' className='no-underline text-navy'><FontAwesomeIcon icon={faFacebookF} size="sm" />&nbsp;&nbsp;</Link>
                            <Link to='/' className='no-underline text-navy'><FontAwesomeIcon icon={faTwitter} size="sm"/>&nbsp;&nbsp;</Link>
                            <Link to='/' className='no-underline text-navy'><FontAwesomeIcon icon={faDribbble} size="sm"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default card
/**<div className="card board-card col-md-5 mb-3 mx-auto">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={man2} className="img-fluid rounded-start" alt="..."/>
                </div>
                
        </div>
    </div> */