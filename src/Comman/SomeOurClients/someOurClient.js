import React, { Component } from 'react';
import './someOurClients.css';


class SomeOurClients extends Component {
    
    constructor(props) {
        super(props);
      }
      
    render() {
        
      return (
        <div className="row sOClients">
               <h3 className="clients">Some of our clients</h3>
            
            
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo" src={require('../../Assets/Images/sindh-gov_logo.png')} />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo1" src={require('../../Assets/Images/jica_logo.png')} />
              </div>
              
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo" src={require('../../Assets/Images/circle_logo.png')} />
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo1" src={require('../../Assets/Images/selmore_logo.png')} />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo" src={require('../../Assets/Images/getfit_logo.png')} />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 logos">
                <img href="#" className="companiesLogo2" src={require('../../Assets/Images/drent_logo.png')} />
              </div>
            
          
        </div>
    );
  }
}

export default SomeOurClients;