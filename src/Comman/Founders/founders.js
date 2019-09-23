import React, { Component } from 'react';
import './founders.css';

class Founder extends Component {
    
    constructor(props) {
        super(props);
      }
      
    render() {
        
      return (
        
          
          <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 devFond">
            <img href="#" className="devFondImg" src={require('../../Assets/Images/inverted-coma.png')}/>
            <p className="devFondPera">KRL Creatives workek on the project with a blend of pragmatic approach and creativity. They are meticulous and always receptive to feedback.
             We are so pleased with the outcome and look forward to a continued working relationship with them.</p>


            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1">
                  <img href="#" className="devFondProf" src={require('../../Assets/Images/profilePic.png')}/>
                </div> 
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 devFond1">
                  <p className="devFondName">Muzaffer Khan</p>
                  <p className="devFondcomp">CEO, Selmore Group</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"></div>
          </div>
    );
  }
}

export default Founder;