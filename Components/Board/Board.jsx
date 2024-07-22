import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { listData } from '../../lib/BOD';
import Card from './card/card';
import './Board.css';
import { Button } from '../Button/Button';

function Board() {
    const data = listData;

    return (
        <div className='container-fluid'>
            <div className='row headers'>
                <h6 className='header1'>Board of Direction</h6>
                <h3 className='header2'>Board Members</h3>
                <p className='parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='row bod-cards'>
                {data.map((item, index) => (
                    <div key={item.id} className="col-md-6 mb-2">
                        <Card item={item} />
                    </div>
                ))}
            </div>
            <div className='mb-4 text-center'>
                <Button
                    className='btns'
                    buttonStyle='btn--navy'
                    onClick={console.log('hey')}
                >
                    Learn more&nbsp;
                    <FontAwesomeIcon icon={faArrowRight} size='lg' className='align-items-center'/>
                </Button>
            </div>
        </div>
    );
}

export default Board;

/**<div className="card board-card col-md-5 mb-3 mx-auto">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={man1} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card board-card col-md-5 mb-3 mx-auto">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={man2} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card board-card col-md-5 mb-3 mx-auto">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={women1} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card board-card col-md-5 mb-3 mx-auto">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={women2} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div> */