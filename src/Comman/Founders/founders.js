import React, { Component } from 'react';
import './founders.css';

class Founder extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="animatedup animatedFadeInUp fadeInUp">
        <div className="col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 devFond">
          <img href="#" className="devFondImg" src={require('../../Assets/Images/inverted-coma.png')} />
          <p className="devFondPera">KRL represented by Ms. Khumar Raza worked with LIGHT-F project since January 2018. They helped us to develop project logo, image color and logo usage guidelines. They also designed carious materials using logo and brand color such as leaflets and catalogues. They are young and energetic,
             trying to understand what we want very carefully. 
             We love their products and are very happy to work with them.</p>

          <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block" style={{ marginBottom: '9vw' }}>
            <div className="row">
              <div className="col-xl-1 col-lg-1"></div>
              <div className="col-xl-2 col-lg-2 imgDev">
                <img href="#" className="devFondProf" src={require('../../Assets/Images/profilePic.png')} />
              </div>
              <div className="col-xl-8 col-lg-8 devFond1">
                <p className="devFondName">Chiyo Mamiya</p>
                <p className="devFondcomp">Chief Advisor / Inter-Organizational Collaboration (JICA Project Team) </p>
              </div>
            </div>
          </div>

          <div className="d-none d-sm-block d-md-block d-lg-none d-xl-none" style={{ marginBottom: '10vw' }}>
            <div className="row">
              {/*<div className="col-md-1 col-sm-1 col-1"></div>*/}
              <div className="col-md-2 col-sm-2 col-4 imgDev1">
                <img href="#" className="devFondProf1" src={require('../../Assets/Images/profilePic.png')} />
              </div>
              <div className="col-md-10 col-sm-10 col-8 devFond1">
                <p className="devFondName1">Muzaffer Khan</p>
                <p className="devFondcomp1">CEO, Selmore Group</p>
              </div>
            </div>
          </div>

          <div className="d-block d-sm-none d-md-none d-lg-none d-xl-none">
            <div className="row">
              {/*<div className="col-md-1 col-sm-1 col-1"></div>*/}
              <div className="col-md-2 col-sm-2 col-4 imgDev1">
                <img href="#" className="devFondProf1" src={require('../../Assets/Images/profilePic.png')} />
              </div>
              <div className="col-md-10 col-sm-10 col-8 devFond1">
                <p className="devFondName1">Muzaffer Khan</p>
                <p className="devFondcomp1">CEO, Selmore Group</p>
              </div>
            </div>
          </div>




        </div>
      </div>
    );
  }
}

export default Founder;

// <div className="row">
//               <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
//                 <img href="#" className="devFondProf" src={require('../../Assets/Images/profilePic.png')}/>
//               </div> 
//               <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 devFond1">
//                 <p className="devFondName">Muzaffer Khan</p>
//                 <p className="devFondcomp">CEO, Selmore Group</p>
//               </div>
//             </div>