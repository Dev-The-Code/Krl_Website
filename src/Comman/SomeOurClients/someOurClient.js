import React, { Component } from 'react';
import './someOurClients.css';


class SomeOurClients extends Component {
    
    constructor(props) {
        super(props);
      }
      
    render() {
        
      return (
        <div className="row sOClients">
            <div className="col-xl-12 col-lg-12 col-md-3 col-12"></div>
            <div className="col-xl-12 col-lg-12 col-md-9 col-10">
              <h3 className="clients">Some of our clients</h3>
            </div>
            
            <div className="col-xl-12 col-lg-12 col-md-2 col-sm-12 col-12"></div>
            <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo2" src={require('../../Assets/Images/clientLogo/gvtLogo.png')} />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo2" src={require('../../Assets/Images/clientLogo/jicaLogo.png')} />
              </div>
              
              <div className="col-xl-12 col-lg-12 col-md-2 col-sm-12 col-12"></div>
              <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo2" src={require('../../Assets/Images/clientLogo/circleLogo.png')} />
              </div>

              <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo2" src={require('../../Assets/Images/clientLogo/selmoreLogo.png')} />
              </div>

              <div className="col-xl-12 col-lg-12 col-md-2 col-sm-12 col-12"></div>
              <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo2" src={require('../../Assets/Images/clientLogo/getfitLogo.png')} />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo2" src={require('../../Assets/Images/clientLogo/drentLogo.png')} />
              </div>
            
          
        </div>
    );
  }
}

export default SomeOurClients;