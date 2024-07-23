import React,{useState} from 'react'
import './Desc_or_Spkrs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { listData } from '../../../lib/Spkrs';
import Spkrs from './Spkrs';


function desc_or_Spkrs() {
    const data = listData;
    const [isDescOpen, setisDescOpen] = useState(true);
    const [isSpkrsOpen, setisSpkrsOpen] = useState(false);

  return (
    <div className='container desc-or-spkrs-con'>
        <div className='row p-1 ms-1'>
            <p className="d-inline-flex gap-3">
                <button className={isDescOpen ? 'desc-btn-open text-start': 'desc-btn text-start'} onClick={()=>{setisDescOpen(true); setisSpkrsOpen(false)}}>Description</button>
                <button className={isSpkrsOpen ? 'spkrs-btn-open text-start': 'spkrs-btn text-start'} onClick={()=>{setisDescOpen(false); setisSpkrsOpen(true)}}>Speakers</button>
            </p>
            {isDescOpen&&!isSpkrsOpen ? 
            <>
                <div className="row">
                    <p className='desc-parag lh-lg text-start'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </>
            :
            <>
                {data.map((item) => {
                    return <Spkrs key={item.id} item={item} className="speakers" />;
                })}

            </>}
        </div>
    </div>
  )
}

export default desc_or_Spkrs
