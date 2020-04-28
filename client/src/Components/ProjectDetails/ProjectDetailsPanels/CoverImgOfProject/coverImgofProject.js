import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './coverImgofProject.css';
class DetailBanner extends Component {

    render() {
        const { data } = this.props
        return (
            <div className="animatedup animatedFadeInUp fadeInUp">
                {data.coverImg && <div className="d-none d-xl-block d-lg-block d-md-block">
                    <img src={data.coverImg[0]} alt="banner" className="bannerDetails" />
                </div>}
                {data.coverImg && <div className="d-block d-xl-none d-lg-none d-md-none">
                    <img src={data.coverImg[0]} alt="banner" className="bannerDetails-MOb" />
                </div>}
            </div>
        );
    }
}

export default DetailBanner;