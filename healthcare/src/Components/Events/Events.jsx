import React from 'react'
import { listData } from '../../lib/dummydata';
import "./Events.css";
import { Button } from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Events({id}) {
    const data = listData;
    const item = data.find((data) => data.id === id);
    const list = ['α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling',
                  'Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume',
                  'Hands-free Voice Control, Always Ready', 
                  'Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode',
                  'Eye Comfort Display: Low-Blue Light, Flicker-Free'];

    return (
        <div className='container-fluid eve-container'>
            <div className='row p-5'>
                <div className='col-md-5'>
                    <dir className='eve-img-con'>
                        <img src={item.img} alt="" className='eve-img'/>
                    </dir>
                </div>
                <div className='col-md-6 pt-md-4 ps-md-5'>
                    <div className='eve-text-con'>
                        <h2 className='eve-header1'>{item.title}</h2>
                        <ul className='eve-list'>
                            {list.map(listitem => (
                                <li key={listitem} className='lh-lg'>{listitem}</li>
                            ))}
                        </ul>
                        <h3 className='eve-price-text'>USD(incl. of all taxes)</h3>
                        <h3 className='eve-price-money'>$600.72</h3>
                        <div className='button-container d-grid mt-auto mb-2'>
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
            </div>
        </div>
    )
    }

export default Events
