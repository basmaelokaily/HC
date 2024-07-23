import React from 'react'
import { Button } from '../Button/Button'
import reg from '../../assets/reg.png';
import './Registration.css';

function Registration() 
{
  return (
    <div>
      <div className='container-fluid reg-container fluid-container justify-content-center'>
{/**        <img src={reg} alt="registration" className='registration-img'/>
 */}
        <div className='row justify-content-center'>
            <div className='col-md-7 text-center mb-5 mt-5'>
                <h3 className='header-registration'>Do you want to registration for association membership</h3>
                <p className='header2-registration'>Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis sit phasellus mollis sit aliquam sit nullam neques.</p>
                <div className='mx-1'>
                    <Button
                        className='btns'
                        buttonStyle='btn--white'
                        onClick={console.log('hey')}
                        >
                        Registeration Now
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        onClick={console.log('hey')}
                        >
                        Learn more
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
