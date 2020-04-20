import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../DetailsPanel7/finalvideosYoutube.css';

class FinalVideosYouTube extends Component {

  render() {
    const { data } = this.props
    return (
        <div className="animatedup animatedFadeInUp fadeInUp"  style={{textAlign:'left'}}>
            {data.documentDemo && data.documentDemo != '' && <div>
                <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                        <h3 className="finalHedng">{data.documentHeading}</h3>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                </div>
                <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                        {data.documentDemo.map((elem,key)=>{
                            return (
                                    <img src={elem} alt="banner" className="devFinal" />
                                    )
                                })}
                        </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                </div>
            </div>}
        </div>
        );
    }
}
  
export default FinalVideosYouTube;