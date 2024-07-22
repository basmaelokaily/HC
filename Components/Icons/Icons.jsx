import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
///import './Board.css';
function Icons() {
  return (
    <div>
        <h3 className='header2 p-1 mt-3'>Partners</h3>
        <div class="hstack d-flex flex-column flex-md-row gap-3 p-2 ms-4 flex-wrap">
            <div class="p-2"><img src={icon1}/></div>
            <div class="p-2"><img src={icon2}/></div>
            <div class="p-2"><img src={icon3}/></div>
            <div class="p-2"><img src={icon4}/></div>
            <div class="p-2"><img src={icon5}/></div>
            <div class="p-2"><img src={icon6}/></div>
        </div>
        {/* <div className="d-flex justify-content-center align-items-center g-2">
          <div className="col-md-2">
            <div className="inner">
              <div class="p-2"><img src={icon1}/></div>

            </div>
          </div>
          <div className="col-md-2">
            <div className="inner">
              <div class="p-2"><img src={icon2}/></div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="inner">
              <div class="p-2"><img src={icon3}/></div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="inner">
              <div class="p-2"><img src={icon4}/></div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="inner">
              <div class="p-2"><img src={icon5}/></div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="inner">
              <div class="p-2"><img src={icon6}/></div>
            </div>
          </div>

        </div> */}
    </div>
  )
}

export default Icons