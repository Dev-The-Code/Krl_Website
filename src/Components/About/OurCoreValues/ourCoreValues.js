import React, { Component } from 'react';
import './ourCoreValues.css';
import ACF from '../../../Assets/Images/acf.png';

class OurCoreValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: 'Ocv3'
    };
  }

  coreSlider(param){
    console.log("TCL: OurCoreValues -> coreSlider -> param", param)
    // this.setState({carousel : param});
  }


  render() {
    return (
      <div>
        <div className="d-none d-sm-block">
          <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row" style={{ marginTop: '7vw' }}>
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 Ocv1">
                <div className={this.state.carousel}>

                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 Ocv1">
                <p className="Ocv2">Core values</p>
                <p className="onColor" onClick={this.coreSlider.bind('empathize',)}>empathize</p>
                <p className="onColor" onClick={this.coreSlider.bind('helpGood')}>help the good</p>
                <p className="onColor" onClick={this.coreSlider.bind('listenCarefull')}>listen carefully</p>
                <p className="onColor" onClick={this.coreSlider.bind('beHonest')}>be honest</p>
                <p className="onColor" onClick={this.coreSlider.bind('beCreative')}>be creative</p>
                <p className="onColor" onClick={this.coreSlider.bind('beArtistic')}>be artistic</p>
              </div>
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
            </div>
          </div>
        </div>
        <div className="d-block d-sm-none">
          <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row">
              <div className="col-12">
                <p className="Ocv2_mob">Core values</p>
              </div>
            </div>
            <div className="container">
              <div className="row" style={{ marginTop: '-4vw' }}>
                <div className="col-3">
                  <p className="onColor_mob">good</p>
                </div>
                <div className="col-6" style={{ textAlign: 'center' }}>
                  <p className="onColor_mob_emp">empathize</p>
                </div>
                <div className="col-3">
                  <p className="onColor_mob">listen</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="Ocv3_mob"></div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br />
      </div>

    );
  }
}

export default OurCoreValues;