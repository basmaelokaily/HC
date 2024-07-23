import React from 'react'
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';
import time from '../../../assets/cal_icon.svg';
import date from '../../../assets/watch.svg';
import loc from '../../../assets/location.svg';


function card({item}) {
  return (
    <div className="card card-cal" >
        <Link to='/events'
            state={item.id}
            className='imageContainer'>
            <img src={item.img} className="card-img-top" alt="..."/>
        </Link>
        <div className="card-body">
            <div className='row textContainer mb-3'>
                <h5 className="card-title header--card">{item.title}</h5>
                <p className="card-text paragraph--card">Lorem ipsum dolor sit amet, consectere adipiscing elit.</p> 
                <hr/>   
                <div className="scnd-section">
                    <div className="date-and-time">
                        <div className="date">
                            <p className='data-time-loc-text lh-sm me-5'><img src={time} alt="" className='text-start'/>&nbsp;{item.time}</p>
                        </div>
                        <div className="time">
                            <p className='data-time-loc-text lh-sm'><img src={date} alt="" className='text-end'/>&nbsp;{item.date}</p>
                        </div> 
                    </div>
                    <div className="location">
                        <p className='data-time-loc-text '><img src={loc} alt="" />&nbsp;{item.location}</p>
                    </div>
                </div>
            </div>
            <div className='button-container d-grid gap-2 mt-auto mb-2'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    onClick={console.log('hey')}
                    >
                    Book Now
                </Button>
            </div>
        </div>
    </div>
  )
}

export default card
