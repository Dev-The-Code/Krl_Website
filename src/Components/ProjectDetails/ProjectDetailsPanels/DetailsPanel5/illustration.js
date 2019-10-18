import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../DetailsPanel5/illustration.css';
class Illustration extends Component {

  render() {

    return (
        <div>
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-none d-xl-block d-lg-block d-md-block devIlustration" style={{paddingLeft: '0vw'}}>
                            <h3 className="IlustrationHedng">Illustration</h3>

                            <p className="IlustrationPera">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        </div>

                        <div className="col-12 d-block d-xl-none d-lg-none d-md-none devIlustration" style={{paddingLeft: '0vw'}}>
                            <h3 className="IlustrationHedng">Illustration</h3>

                            <p className="IlustrationPeraMob">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 d-none d-xl-block d-lg-block d-md-block" style={{marginTop: '8vmax'}}>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-5 illustrImg1">
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-2"></div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-5 illustrImg2">
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-5 illustrImg3">
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-2"></div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-5 illustrImg4"></div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-5 illustrImg5"></div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-2"></div>

                            </div>
                        </div>
                        
                        
                        <div className="col-12 d-block d-xl-none d-lg-none d-md-none" style={{marginTop: '8vmax'}}>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-5 illustrImgMob1">
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-2"></div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-5 illustrImgMob2">
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-5 illustrImgMob3">
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-2"></div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-5 illustrImgMob4"></div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-5 illustrImgMob5"></div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-2"></div>

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
  
export default Illustration;