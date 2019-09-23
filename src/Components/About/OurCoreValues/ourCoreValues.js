import React, { Component } from 'react';
import './ourCoreValues.css';


class OurCoreValues extends Component {

  render() {
    return (
      <div>
        <div className="d-none d-sm-block">
          <div className="row" style={{marginTop:'4vw'}}>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 Ocv1">
              <div className="Ocv3"></div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 Ocv1">
              <p className="Ocv2">Core values</p>
              <p className="onColor">empathize</p>
              <p className="onColor">help the good</p>
              <p className="onColor">listen carefully</p>
              <p className="onColor">be honest</p>
              <p className="onColor">be creative</p>
              <p className="onColor">be artistic</p>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
          </div>
        </div>
        <div className="d-block d-sm-none">
          <div className="row">
            <div className="col-12">
              <p className="Ocv2_mob">Core values</p>
              <div className="Ocv3_mob"></div>
            </div>
          </div>
          <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="onColor_mob">empathize</p>
              <p className="onColor_mob">help the good</p>
              <p className="onColor_mob">listen carefully</p>
              <p className="onColor_mob">be honest</p>
              <p className="onColor_mob">be creative</p>
              <p className="onColor_mob">be artistic</p>
            </div>
          </div>
          </div>
        </div>
        <br /><br /><br /><br />
      </div>

    );
  }
}

export default OurCoreValues;