import React, { Component } from 'react';
import ContForm from './contForm';
import './requestQuote.css';

class requestQuote extends Component {

  render() {
    return (
      <div>
        <div className="d-none d-sm-block">
          <div className="row">
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-sm-11 col-md-11 col-lg-11 col-xl-11">
              <div className="row" style={{marginBottom:'10vw'}}>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 backgrund_cont">
                  <h4 className="head_quote">Request a qoute</h4>
                  <p className="quote_descrip">Enter your details here and our team<br />will get in touch with you within 24 hours</p>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 qoute_backColor">
                  <ContForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-sm-none">
          <div className="row">
            <div className="col-12 backgrund_cont_mob">
              <h4 className="head_quote">Request a qoute</h4>
              <p className="quote_descrip">Enter your details here and our team<br />will get in touch with you within 24 hours</p>
            </div>
            <div className="col-12">
              <div className="col-1"></div>
              <div className="col-10  qoute_backCol_mob">
                <ContForm />
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default requestQuote;