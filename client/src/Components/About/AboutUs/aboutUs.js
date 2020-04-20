import React, { Component } from 'react';
import './aboutUs.css';


class AboutUs extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid" style={{ marginBottom: '10.4vw' }}>
          <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row">
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4" style={{ marginTop: '7vw' }}>
                <small className="pnl_h">About Us</small>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6" style={{ marginTop: '7vw' }}>
                <p className="pnl_p2">We provide consultation with great solutions.</p>
                <p className="pnl-p3">KRL Creatives consults business to help them grow. We listen thouroughly  to the problem,empathize with you and your customers and come up with  useful digital solutions that maximise your return on investments.</p>
              </div>
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default AboutUs;