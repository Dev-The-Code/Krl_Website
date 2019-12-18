import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../DetailsPanel8/someImages.css';

class SomeImages extends Component {

  render() {

    return (
        <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

                <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                    <div className="row" style={{marginTop: '10vmax'}}>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-none dxl-block d-lg-block d-md-block devSum">
                            <h3 className="sumHedng">Some Images</h3>
                            <h3 className="sumShortHedng">Headings</h3>
                            <p className="sumPera">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        
                        </div>

                        <div className="col-12 d-block dxl-none d-lg-none d-md-none devSum">
                            <h3 className="sumHedng">Some Images</h3>
                            <h3 className="sumShortHedng">Headings</h3>
                            <p className="sumPeraMob">
                                The color consists of a luxurious leaves and wines to represent the nature of the brand.
                            </p>
                        
                        </div>
                        
                        <div className="col-xl-8 col-lg-8 col-md-8 col-12 d-none d-xl-block d-lg-block d-md-block sumImg"></div>
                        <div className="d-block d-xl-none d-lg-none d-md-none col-12 sumImgMob"></div>
                    </div>
                
                </div>
                

                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

            </div>

        </div>
        );
    }
}
  
export default SomeImages;