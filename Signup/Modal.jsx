import React from 'react'
import './Modal.css';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Modal({open, children, onClose}) {
if (!open) return null
return ReactDom.createPortal(
    <>
        <div className='modal-style'>
            {React.Children.map(children, child => {
                return React.cloneElement(child, { onClose });
            })}
        </div>
    </>,
    document.getElementById("portal")
)
}

export default Modal
