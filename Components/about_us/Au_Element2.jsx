import React from 'react'
import man from '../../assets/dart.svg';
import './Au_Element2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Au_Element2() {
  return (
    <div className='container-fluid au-e2-container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className="card au-card">
                    <div className='au-e2-img-con'>
                        <img src={man} className="au-img-man" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="au-card-title">Hussein Albishi</h5>
                        <p className="au-card-text">chairman of the Saudi Health 
                        Information Management Association</p>
                    </div>            
                </div>
            </div>
            <div className="col-md-6">
                <p className='au-paragraph-wrapper'>Since the establishment of the Saudi Health Information Management Association in 2012, the association has been heavily involved in serving the healthcare fields a part of the greater goal which is achieving sustainable development in our beloved kingdom.
                    Throughout the way, SHIMA went through several developmental phases in which there were many accomplishments within the association in the search for achieving its larger goals in HIM, Health Informatics and relevant healthcare fields. Efforts has been made and are still being continuously made by SHIMA to be an entity of value to the Healthcare system in Saudi Arabia as well as actively participate in promoting the strategic healthcare transformation. Many initiatives and activities were held by SHIMA, the most prominent among them was hosting the International Federation of Health Information Management (IFHIMA) Congress in 2019.
                    SHIMA always looks up for supporting researches in the field, and the publication of accurate scientific analytics in the healthcare field as a whole. SHIMA also targets raising awareness among the public about the concept of health information privacy and confidentiality. </p>

            </div>
            <div className='row'>
                <p className='au-paragraph-wrapper'>
                    Moreover, SHIMA also aims towards encouraging the writing and translation of books and articles to serve the purpose of establishing a scientific database for HIM and relevant fields. Furthermore, SHIMA promotes developing the skills of HIM employees all over the Kingdom through providing scholarships for outstanding students.
                    SHIMA assures its consistent commitment to making more efforts to serve the healthcare field in Saudi Arabia through promoting cooperation between both public and private sectors, supporting communication between key stakeholders keeping track of national and international updates and seeking the goal of creating a reliable environment in healthcare field; all of which will have a significant impact over healthcare field advancement under the guidance of His Royal Highness, The Custodian of The Two Holy mosques King Salman Bin Abdulaziz Al-Saud and His Royal Highness Crown Prince.            
                </p>
            </div>
        </div>
    </div>
  )
}

export default Au_Element2
