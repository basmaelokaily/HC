import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import man from '../../assets/dart.svg';
import './inquiry.css';
import { Button } from '../Button/Button';

function Inquiry() {
  return (
    <div>
        <div className='container-fluid fluid-container'>
            <div className='row p-5'>
                <div className='col-md-6 header-inquiry-container'>
                    <h3 className='header-inquiry me-5'>For general inquiries and questions related to members</h3>
                    <p className='header2-inquiry'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
                </div>
  

                <div className='form-inquiry col-md-6'>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <label htmlFor="nameInput" className="form-label">Name</label>
                            <input type="text" className="form-control" id="nameInput" placeholder="name" aria-label="Name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phoneInput" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="phoneInput" placeholder="(123) 456 7890" aria-label="Phone" />
                        </div>
                    </div>
                    <div class="col mb-2">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input type="email" className="form-control form-email" id="emailInput" placeholder="example@email.com" aria-label="email" />
                        </div>
                    <div className="col mb-2">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className='mb-2'>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            onClick={console.log('hey')}
                            >
                            Send Message
                        </Button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inquiry
/**<div className="mb-2">
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            onClick={console.log('hey')}
                            >
                            Send Message
                        </Button>
                    </div> */