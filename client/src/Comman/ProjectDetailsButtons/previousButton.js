import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '.././ProjectDetailsButtons/projectDetailsButton.css';

class PreviousButton extends Component {

  render() {

    return (
        <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row devProDetail">
                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-12 devChildProDetail">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-12"></div>
                        <div className="col-xl-10 col-lg-10 col-md-10 col-12 devPrev">
                        <Link rel="noopener noreferrer" to={`/project`}  className="changingdec">

                            <h4 className="preHedng">ACF Animal Rescue</h4>
                            <h4 className="preHedng">Mobile Application</h4>
                            <p className="prePera">
                                <img href="#" className="rightAeroImage" src={require('../../Assets/Images/leftarrow.png')} />&nbsp;&nbsp;&nbsp;&nbsp; Previous</p>
                        </Link>
                        </div>
                    </div>


                </div> */}
                
                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-12 devChildProDetail">
                    <div className="row">
                        
                        <div className="col-xl-10 col-lg-10 col-md-10 col-12 devNext">
                        <Link rel="noopener noreferrer" to={`/project`}  className="changingdec">

                            <h4 className="preHedng">Online Design Softwear</h4>
                            <h4 className="preHedng">For Circle Women</h4>
                            <p className="prePera">Next &nbsp;&nbsp;&nbsp;&nbsp;
                                <img href="#" className="rightAeroImage" src={require('../../Assets/Images/arrowPurple.png')} /></p>
                        </Link>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-12"></div>

                    </div>
                </div> */}

            </div>

        </div>
        );
    }
}
  
export default PreviousButton;