import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../DetailsPanel8/someImages.css';

class SomeImages extends Component {

    render() {
        const { data } = this.props
        // console.log("TCL: SomeImages -> render -> data", data)
        return (
            <div>
                {data.mainHead && data.mainHead != '' && <div className="animatedup animatedFadeInUp fadeInUp">
                    {data.mainVideoPanel.map((elem, key) => {
                        return (
                            <div className="row">
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-12" style={{textAlign:'left'}}>
                                    <div className="row" style={{ marginTop: '10vmax' }}>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-12" style={{ paddingLeft: '0vw' }}>
                                            <h3 className="sumShortHedng">{elem.mainHead}</h3>
                                            <p className="sumPera">
                                                {elem.mainHeadsubText}
                                            </p>
                                        </div>
                                        {elem.mainVideos != '' && <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                                            <video className="mainDemoImg video-container video-container-overlay" controls="true" autoPlay="true" loop>
                                                <source src={elem.mainVideos} type="video/mp4" />
                                            </video>
                                        </div>}
                                    </div>
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                            </div>
                        )
                    })}
                </div>}
            </div>
        );
    }
}

export default SomeImages;