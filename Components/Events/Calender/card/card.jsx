import React from 'react'
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from '../../../Button/Button';

function card({item}) {
  return (
    <div className="card card-cal" >
        <Link to='/events'
            state={item.id}
            className='imageContainer'>
            <img src={item.img} className="card-img-top" alt="..."/>
        </Link>
        <div className="card-body">
            <div className='row textContainer mb-2'>
                <h5 className="card-title header--card">{item.title}</h5>
                <p className="card-text paragraph--card">Some quick example text to build on the card title and make up the bulk of the card's content.</p>    
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
/**<div className='card-cal'>
        <Link to={`/${item.id}`} className='imageContainer'>
            <img src={item.img} className='card-image'></img>
        </Link>
        <div className='textContainer'>
            <h4 className='header--card'>{item.title}</h4>
            <p className='paragraph--card'>{item.title}</p>
        </div>
        <div className='button-container'>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                onClick={console.log('hey')}
                >
                Book Now
            </Button>
        </div>
    </div> */