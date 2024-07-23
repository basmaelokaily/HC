import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { listData } from '../../lib/membership';
import './Membership.css';
import Card from './card/card';

function Membership() {
    const data = listData;

    return (
        <div className='container-fluid membership-container p-5'>
            <div className='col-md-9 mx-auto'>
                <h5 className='membership-h1'>Membership</h5>
                <p className='membership-p'>Through the registration process as an active member of the association, in accordance with the regulations and conditions existing by the association, which qualifies the applicant to obtain the type of membership appropriate to him with the benefits that the association will provide to him as an active member listed under it.
                </p>
                <div>
                    <div className='row membership-cards'>
                        {data.map((item, index) => (
                            <div key={item.id} className="col-md-4 mb-2">
                                <Card item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Membership
