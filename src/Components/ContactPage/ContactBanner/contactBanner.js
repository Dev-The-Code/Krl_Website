import React, { Component } from 'react';
import WhiteArrow from '../../../Assets/Images/white-arrow.png';
import './contactBanner.css';

class ContactBanner extends Component {

  render() {
    return (
      <div className="animatedup animatedFadeInUp fadeInUp">
        <div className="d-none d-sm-block">
          <div className="row rawWW_BOtop">
            <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10">
              <div className="row">
                <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5" style={{ paddingTop: '15vw' }}>
                  <h1 className="baner_Text">Hi! Drop us</h1>
                </div>
                <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 backgrond_baner">
                  <h1 className="backk_Text">a line below</h1><img src={WhiteArrow} className="whitEArow" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
        </div>
        <div className="d-block d-sm-none">
          <div className="row" style={{ PaddingTop: '25vw' }}>
            <div className="col-1"></div>
            <div className="col-2">
              <h1 className="backkMOB_Textblck_hi">Hi!</h1>
            </div>
            <div className="col-8 backMob_baner">
              <h1 className="backkMOB_Textblck">Drop us a</h1>
              <div className="dv_iNlinNE">
                <h1 className="backkMOB_Text">below.</h1>
              </div>
            </div>
            <div className="col-1"></div>
            {/* <div className="col-8 backMob_baner">
              <h1 className="backkMOB_Text">a line below</h1><img src={WhiteArrow} className="whitEArow"/>
            </div> */}
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2">
              <h1 className="backkMOB_Textblck_linE">line</h1>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>

    );
  }
}

export default ContactBanner;