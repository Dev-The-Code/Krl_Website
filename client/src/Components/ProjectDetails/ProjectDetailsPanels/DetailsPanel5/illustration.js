import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../DetailsPanel5/illustration.css';
import DImg from '../../../../Assets/Images/ProjectDetail/Asset1.png';
class Illustration extends Component {

    render() {
        const { data } = this.props
        return (
            <div className="animatedup animatedFadeInUp fadeInUp">
                {data.illustration && <div>

                    {data.illustration.map((elem, key) => {
                        return (
                            <div className="row">
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-12" style={{textAlign:'left'}}>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-none d-xl-block d-lg-block d-md-block devIlustration" style={{ paddingLeft: '0vw' }}>
                                            <h3 className="IlustrationHedng">{elem.illustrationText}</h3>

                                            <p className="IlustrationPera">
                                                {elem.illustrationSubText}
                                            </p>
                                        </div>
                                        <div className="col-12 d-block d-xl-none d-lg-none d-md-none devIlustration" style={{ paddingLeft: '0vw' }}>
                                            <h3 className="IlustrationHedng">{elem.illustrationText}</h3>

                                            <p className="IlustrationPeraMob">
                                                {elem.illustrationSubText}
                                            </p>
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-md-8 d-none d-sm-block" style={{ marginTop: '8vmax' }}>
                                            <div className="row">
                                                {elem.illustrationImages.map((elem,key)=>{
                                                    return (

                                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                                            <img src={elem} className="illustrImg1"/>
                                                        </div>

                                                    )
                                                })}                 
                                            </div>
                                        </div>

                                        <div className="col-12 d-block d-sm-none" style={{ marginTop: '8vmax' }}>
                                            <div className="row">
                                                {elem.illustrationImages.map((elem,key)=>{
                                                    return (
                                                        <div className="col-12" style={{ marginRight: "5vw" }}>
                                                            <img src={elem} className="illustrImgMob1"/>
                                                        </div>
                                                    )
                                                })}
                                                
                                            </div>
                                        </div>
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

export default Illustration;