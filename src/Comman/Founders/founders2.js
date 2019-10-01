import React, { Component } from 'react';
import './founders2.css';

class Founders2 extends Component {
    
    constructor(props) {
        super(props);
      }
      
    render() {
        
      return (
        
          
          <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 devFondp2">
            <img href="#" className="devFondp2Img" src={require('../../Assets/Images/inverted-coma.png')}/>
            <p className="devFondp2Pera">KRL Creatives worked on the project with a blend of pra- gmatic approach and creativity. They are meticulous and always receptive to feedback.
             We are so pleased with the outcome and look forward to a continued working relationship with them.</p>


            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1"></div>
                <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1 imgDev">
                  <img href="#" className="devFondp2Prof" src={require('../../Assets/Images/profilePic.png')}/>
                </div> 
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-9 devFond1">
                  <p className="devFondp2Name">Muzaffer Khan</p>
                  <p className="devFondp2comp">CEO, Selmore Group</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"></div>
          </div>
    );
  }
}

export default Founders2;