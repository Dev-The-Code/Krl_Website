import React, { Component } from 'react';
import './contactBanner.css';

class ContactBanner extends Component {

  render() {
    return (
      <div>
        <div className="d-none d-sm-block">
          <div className="row rawWW_Top">
            <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5" style={{ paddingTop: '19vw' }}>
              <h1 className="baner_Text">Hi! Drop us</h1>
            </div>
            <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 backgrond_baner">
              <h1 className="backk_Text">a line below</h1>
            </div>
            <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
        </div>
        <div className="d-block d-sm-none">
          <div className="row">
            <div className="col-6">
                <h1 className="backkMOB_Textblck">Hi! Drop us</h1>
            </div>
            <div className="col-6 backMob_baner">
                <h1 className="backkMOB_Text">a line below</h1>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ContactBanner;