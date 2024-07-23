import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import man from '../../assets/dart.svg';
import rect from '../../assets/Rectangle.svg';
import './Message.css';

function Message() {
  return (
    <div>
      <div className='container-fluid fluid-container '>
        <div className='row message-sec'>
            <div className='row col-md-3 d-flex position-relative align-items-end'>
                <img src={rect} alt="triangle" className='tri-img position-absolute' />
                <img src={man} alt="man" className='man-img position-absolute' />
            </div>
            <div className='row col-md-8 message-text'>
                <h3 className='message-header'>Message from <span className='message-header-span'>Chairman</span></h3>
                <p className='message-para'>Since the establishment of the Saudi Health Information Management Association in 2012, the association has been heavily involved in serving the healthcare fields a part of the greater goal which is achieving sustainable development in our beloved kingdom.
                Throughout the way, SHIMA went through several developmental phases in which there were many accomplishments within the association in the search for achieving its larger goals in HIM, Health Informatics and relevant healthcare fields. Efforts has been made and are still being continuously made by SHIMA to be an entity of value to the Healthcare system in Saudi Arabia as well as actively participate in promoting the strategic healthcare transformation. Many initiatives and activities were held by SHIMA, the most prominent among them was hosting the International Federation of Health Information Management (IFHIMA) Congress in 2019. SHIMA always looks up for supporting researches in the field, and the publication of accurate scientific analytics in the healthcare field as a whole ...</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Message
