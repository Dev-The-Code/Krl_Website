import React, { Component } from 'react';
import Dot from '../../../Assets/Images/dots.png';
import './homeBanner.css';

class Home extends Component {

    render() {
        return (
            <div>
                <div className="row rAw_PadD">
                    <div className="col-12 col-md-3 col-lg-4 col-xl-4"></div>
                    <div className="col-12 col-md-4 col-lg-5 col-xl-5">
                        <img src={Dot} className="dot_imgBaner"/>
                        <h1 className="Banerr_texxt">We help you <br />help others</h1>
                    </div>
                    <div className="col-12 col-md-5 col-lg-3 col-xl-3"></div>
                </div>
                
            </div>
        );
    }
}

export default Home;