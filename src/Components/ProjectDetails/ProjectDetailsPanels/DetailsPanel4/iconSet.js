import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../DetailsPanel4/iconSet.css';
class IconSet extends Component {

  render() {

    return (
        <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                    <h3 className="iconSetHedng">Icon Set</h3>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-none d-xl-block d-lg-block d-md-block devIcon" style={{paddingLeft: '0vw'}}>
                            <h3 className="iconSetShortHedng">Icons</h3>
                            <p className="iconPera">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        </div>
                        <div className="col-12 d-block d-xl-none d-lg-none d-md-none devIcon" style={{paddingLeft: '0vw'}}>
                            <h3 className="iconSetShortHedng">Icons</h3>
                            <p className="iconPeraMob">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                                    <img href="#" className="iconImg" src={require('../../../../Assets/Images/ProjectDetail/choose-your-dress-icon.png')} />

                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                                    <img href="#" className="iconImg1" src={require('../../../../Assets/Images/ProjectDetail/wear-new-dresses-icon.png')} />
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                                    <img href="#" className="iconImg2" src={require('../../../../Assets/Images/ProjectDetail/pay-less-for-more-icon.png')} />
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                                    <img href="#" className="iconImg3" src={require('../../../../Assets/Images/ProjectDetail/return-repeat-icon.png')} />

                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                                    <img href="#" className="iconImg4" src={require('../../../../Assets/Images/ProjectDetail/place-order-icon.png')} />
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                                    <img href="#" className="iconImg5" src={require('../../../../Assets/Images/ProjectDetail/make-money-icon.png')} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
            </div>

        </div>
        );
    }
}
  
export default IconSet;