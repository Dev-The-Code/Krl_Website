import React, { Component } from 'react';
import Header2 from '../Header/header2';
import ArrowImg from '../../Assets/Images/latest-post-arrow.png';
import './banner.css';

class Banner extends Component {
 
    render() {
      return (
        <div>
           
            <div className={this.props.mainClas}>
              <div className={this.props.rawLateText}>
                  <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                  <div className="col-12 col-sm-2 col-md-3 col-lg-3 col-xl-3" style={{display:'flex'}}>
                        <p className="latest_text">{this.props.lateText}</p>
                        <img src={ArrowImg} className='arrow_banImg'/>
                  </div>
                  <div className="col-12 col-sm-9 col-md-8 col-lg-8 col-xl-8"></div>
              </div>
              <div className="row">
                  <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                  <div className="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                      <h2 className={this.props.styleHeading}>{this.props.bannerText}</h2>
                  </div>
              </div>
              <div className={this.props.rawLateText}>
                  <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                  <div className="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                      <p className="rebrand_text">{this.props.reBrandText}</p>
                  </div>
              </div>
            </div>  
        </div>
    );
  }
}

export default Banner;