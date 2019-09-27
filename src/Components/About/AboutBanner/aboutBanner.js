import React, { Component } from 'react';
import './aboutBanner.css';

class AboutBanner extends Component {

    render() {
            const { Consl_text , solu_text , para_Text , para_ClaSs , descrip_Text , mOR_texT} = this.props
        return (
            <div>
                <div className="d-none d-sm-block">
                    <div className="row rawWW_Top">
                        <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                        </div>
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 backImgee_baner">
                            <h1 className="abut_banerText">{Consl_text} <br />{solu_text}</h1>
                        </div>
                        <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"></div>
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                            <div className={para_Text}>
                                <p className={para_ClaSs}>
                                    {descrip_Text}<br/><br/>{mOR_texT}
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                    </div>
                </div>
                <div className="d-block d-sm-none">
                    <div className="row">
                        <div className="col-1">             
                        </div>
                        <div className="col-10 backImgee_baner_Mob">  
                            <h1 className="abut_banerText_Mob">{this.props.conts_sol}<br />{this.props.With_sool}</h1>                          
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="divi_Colorsty_Mob">
                                    <p className="para_Textt_Mob">
                                       {this.props.bigGerText} <br/><br/> {this.props.bigGerInSmall}
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

export default AboutBanner;