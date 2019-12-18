import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../DetailsPanel7/finalvideosYoutube.css';

class FinalVideosYouTube extends Component {

  render() {

    return (
        <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

                <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                    <h3 className="finalHedng">Final Video</h3>
                
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12 devFinal"></div>
                </div>
                

                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

            </div>

        </div>
        );
    }
}
  
export default FinalVideosYouTube;