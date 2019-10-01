import React, { Component } from 'react';
import './serviceBanner.css';

class serviceBanners extends Component {
    render() {
        return (
            <div>
                <div className="d-none d-sm-block">
                    <div className="row" style={{ paddingTop: '5vw' }}>
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                        <div className="col-12 col-md-5 col-lg-5 col-xl-5">
                            <h1 className="banNer_blaNk">We have go <br />all covered.</h1>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5 col-xl-5 CircleBanerBack">
                            <h1 className="banNer_iMgTeXt">t you</h1><br /><br />
                        </div>
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                        <div className="col-12 col-md-5 col-lg-5 col-xl-5"></div>
                        <div className="col-12 col-md-5 col-lg-5 col-xl-5">
                            <div className="divi_Color_Service">
                                <p className="serVice_Textt">
                                    KRL Creatives covers you for all your digital assets your brand needs to serve your audience well
                            <br /><br />
                                    We design, develop and produce
                        </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                    </div>
                </div>
                <div className="d-block d-sm-none">
                    <div className="row" style={{marginTop:'22vw'}}>
                        <div className="col-1"></div>
                        <div className="col-10">
                            <h1 className="banNer_blaNk">We have got you all covered.</h1>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row" style={{marginTop:'2.5vw'}}>
                        <div className="col-1"></div>
                        <div className="col-10 CircleBaner_Mob"></div>
                        <div className="col-1"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="divi_Color_Service">
                                    <p className="serVice_Textt">
                                        KRL Creatives covers you for all your digital assets your brand needs to serve your audience well
                                        <br /><br />
                                        We design, develop and produce
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default serviceBanners;