import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './card.css';
import { Button } from '../../Button/Button';

function card({item}) {
  return (
    <div>
        <div className="card membership-card">
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
        </div>
    </div>
  )
}

export default card