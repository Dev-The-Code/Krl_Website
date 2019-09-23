import React, { Component } from 'react';
import './services.css';
import Contains from '../../../Comman/ServiceContainer/contain';



class Services extends Component {

constructor(props) {
  super(props);

  this.state = {
    kuchBhi : 'Development',
    bhejDo : 'We create high quality digital products. we develop website, mobile apps and desktop apps.',
    DsgnHedng : 'Design',
    DsgnPrgh : 'Our designers work hard to design delightful experiences that help you achieve business goals.',
    prductnHedng : 'Production',
    prductnPrgh : 'Did you say photos and videos? Our producers are here with all their experience and expertise!',
  };
  
} 
    render() {
        const {kuchBhi, bhejDo, DsgnHedng, DsgnPrgh, prductnHedng, prductnPrgh}= this.state
      return (
          <div>
            <div className="">
              
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 sh_main">
                <div className="row">
                  <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="">
                      <p className="sh">Services</p>
                      <p className="sh1">KRL Creatives covers you for all digital assets your brand need to serve your audience well.</p>
                      <p className="sh2">We design, develop and produce.</p>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 mr-0 pr-0">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 sh3">
                      <p className="sh4">Consultation</p>
                      <p className="sh5">With the power of empathy, transparent communication and honest dealing, we work with you to help you find the right path to maximising the outcome your brand creates.</p>
                    </div>
                    <div className="row">
                    <Contains kuchBhi={kuchBhi} bhejDo={bhejDo} colurChange= {"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 sh6"}/>
                    <Contains kuchBhi={DsgnHedng} bhejDo={DsgnPrgh} colurChange= {"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 sh9"}/>
                    <Contains kuchBhi={prductnHedng} bhejDo={prductnPrgh} colurChange= {"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 sh10"}/>
                      {/*<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 sh6">
                        <p className="sh7">Development</p>
                        <p className="sh8">We create high quality digital products. we develop website, mobile apps and desktop apps.</p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 sh9">
                        <p className="sh7">Design</p>
                        <p className="sh8">Our designers work hard to design delightful experiences that help you achieve business goals.</p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 sh10">
                        <p className="sh7">Development</p>
                        <p className="sh8">We create high quality digital products. we develop website, mobile apps and desktop apps.</p>
      </div>*/}
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"></div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        
    );
  }
}

export default Services;