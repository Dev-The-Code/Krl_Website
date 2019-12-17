import React, { Component } from 'react';
import './weStandFor.css';


class WeStandFor extends Component {

    render() {
        return (
            <div>
                <div className="d-none d-xl-block d-lg-block d-md-block">
                    <div className="animatedup animatedFadeInUp fadeInUp">
                        <div className="row DevWeStandFor">
                            <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                            <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                                <div className="row">
                                    <h1 className="weStandHedng">What we stand for</h1>
                                </div>
                                <div className="row">
                                    <h1 className="ourLogoHedng">Our logo</h1>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-12 ">
                                        <img href="#" className="weHelp" src={require('../../../Assets/Images/AboutPageImages/Aboutpage-02.png')} />
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-12 ">
                                        <img href="#" className="youHelp" src={require('../../../Assets/Images/AboutPageImages/Aboutpage-03.png')} />
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-12 ">
                                        <img href="#" className="audience" src={require('../../../Assets/Images/AboutPageImages/Aboutpage-04.png')} />
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-12 ">
                                        <img href="#" className="helpOthers" src={require('../../../Assets/Images/AboutPageImages/Aboutpage-05.png')} />
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>




                        </div>
                        <div className="row">
                            <div className="col-xl-1 col-lg-1 col-md-1 col-12 "></div>

                            <div className="col-xl-10 col-lg-10 col-md-10 col-12 ">
                                <h1 className="ourLogoHedng">Our colors</h1>
                            </div>

                            <div className="col-xl-1 col-lg-1 col-md-1 col-12 "></div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 ">

                                <div className="row" style={{ display: 'inline-block', height: '20vw', width: '49vw', }}>

                                    <div className="ourLogoImg"></div>

                                    <div className="ourLogoImg1"></div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 " style={{ padding: '0.3vmax 4.1vw 3.1vw 3.1vw' }}>
                                <div className="row">
                                    <div className="col-xl-10 col-lg-10 col-md-11 col-12 ">
                                        <p className="ourColorText">KRL Creatives brand uses to diffrent gradients to show or
                                        dynamic nature. The blue to purple gradients represents our
                                        imaginative thinking and leadership quality. The orange to
                                        red gradients shows our energy.
                            </p>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-1 col-12 "></div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="d-block d-xl-none d-lg-none d-md-none">
                    <div className="animatedup animatedFadeInUp fadeInUp">
                        <div className="row DevWeStandForMob">
                            <div className="col-1 "></div>
                            <div className="col-10 DevWeStandForChildMob">
                                <h1 className="weStandHedng">What we stand for</h1>
                                <h1 className="ourLogoHedng">Our logo</h1>

                                <div className="col-12 DevweHelpMob">
                                    <img href="#" className="weHelpMob" src={require('../../../Assets/Images/AboutPageImages/Aboutpage-02.png')} />
                                </div>
                                <div className="col-12 DevweHelpMob">
                                    <img href="#" className="youHelpMob" src={require('../../../Assets/Images/AboutPageImages/Aboutpage-03.png')} />
                                </div>
                                <div className="col-12 DevweHelpMob">
                                    <img href="#" className="audienceMob" src={require('../../../Assets/Images/AboutPageImages/Aboutpage-04.png')} />
                                </div>
                                <div className="col-12 DevweHelpMob">
                                    <img href="#" className="helpOthersMob" src={require('../../../Assets/Images/AboutPageImages/Aboutpage-05.png')} />
                                </div>
                            </div>
                            <div className="col-1 "></div>

                            <div className="col-1"></div>
                            <div className="col-10" style={{ padding: '0vw' }}>
                                <h1 className="ourLogoHedng">Our colors</h1>
                            </div>
                            <div className="col-1"></div>


                            <div className="col-12 " style={{ display: 'inline-block', height: '20vw', width: '100vw' }}>

                                <div className="ourLogoImgMob"></div>

                                <div className="ourLogoImgMob1"></div>

                            </div>


                            <div className="col-12 " style={{ padding: '0.3vmax 4.1vw 3.1vw 3.1vw' }}>
                                <div className="row">
                                    <div className="col-xl-10 col-lg-10 col-md-11 col-12 ">
                                        <p className="ourColorTextMob">KRL Creatives brand uses to diffrent gradients to show or
                                            dynamic nature. The blue to purple gradients represents our
                                            imaginative thinking and leadership quality. The orange to
                                            red gradients shows our energy.
                                    </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default WeStandFor;

