import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Detailspanel3/visualIdentity.css';
class VisualIdentity extends Component {

  render() {

    return (
        <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row">
                
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-12 d-none d-xl-block d-lg-block d-md-block">
                    <h3 className="visulIdntityHedng">Visual Identity</h3>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 devVidentity">
                            <h3 className="V-IdentityLogo">Logo</h3>
                            <p className="IdentityPera">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-12" style={{paddingLeft: '0vw'}}>
                            <img href="#" className="D-logo" src={require('../../../../Assets/Images/drent-logo.png')} />
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 devVidentity2">
                            <h3 className="visulIdntityshortHedng">Color Palette</h3>
                            <p className="IdentityPera2">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-12 devVidentity3">
                            <div className="devColors"></div>

                            <div className="devColors"></div>

                            <div className="devColors"></div>

                            <div className="devColors"></div>

                            <div className="devColors"></div>

                            <div className="devColors"></div>

                            <div className="devColors"></div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 devVidentity4">
                            <h3 className="visulIdntityshortHedng1">Fonts</h3>
                            <p className="IdentityPera3">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-12" style={{paddingLeft: '0vw'}}>
                            <h3 className="visulIdntityshortHedng2">
                                Playfair Display
                            </h3>
                            <h3 className="visulIdntityshortHedng3">
                                Tajawal Regular
                            </h3>
                        </div>
                    </div>
                </div>



                <div className="col-12 d-block d-xl-none d-lg-none d-md-none">
                    <h3 className="visulIdntityHedng">Visual Identity</h3>
                    <div className="row">
                        <div className="col-12 devVidentity">
                            <h3 className="V-IdentityLogo">Logo</h3>
                            <p className="IdentityPeraMob">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        </div>
                        <div className="col-12" style={{paddingLeft: '0vw'}}>
                            <img href="#" className="D-logo" src={require('../../../../Assets/Images/drent-logo.png')} />
                        </div>

                        <div className="col-12 devVidentity2">
                            <h3 className="visulIdntityshortHedng">Color Palette</h3>
                            <p className="IdentityPeraMob2">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        </div>
                        <div className="col-12 devVidentity3">
                            <div className="devColors"></div>

                            <div className="devColors"></div>

                            <div className="devColors"></div>

                            <div className="devColors"></div>

                            <div className="devColors"></div>

                            <div className="devColors"></div>

                            <div className="devColors"></div>

                        </div>

                        <div className="col-12 devVidentity4">
                            <h3 className="visulIdntityshortHedng1">Fonts</h3>
                            <p className="IdentityPeraMob2">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        </div>
                        <div className="col-12" style={{paddingLeft: '0vw'}}>
                            <h3 className="visulIdntityshortHedng2">
                                Playfair Display
                            </h3>
                            <h3 className="visulIdntityshortHedng3">
                                Tajawal Regular
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
            </div>

        </div>
        );
    }
}
  
export default VisualIdentity;