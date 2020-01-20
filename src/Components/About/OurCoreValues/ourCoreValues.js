import React, { Component } from 'react';
import './ourCoreValues.css';
import ACF from '../../../Assets/Images/acf.png';

class OurCoreValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: 'empathize',
      empathize: 'onColorClicked',
      helpGood: 'onColor',
      listenCarefull: 'onColor',
      beHonest: 'onColor',
      beCreative: 'onColor',
      beArtistic: 'onColor'
    };
  }

  coreSlider = (param) => {
    if (param == 'empathize') {
      console.log("TCL: OurCoreValues -> coreSlider -> param", param)
      this.setState({
        carousel: param,
        empathize: "onColorClicked",
        helpGood: 'onColor',
        listenCarefull: 'onColor',
        beHonest: "onColor",
        beCreative: "onColor",
        beArtistic: "onColor",
      });

    }
    else if (param == 'helpGood') {
      this.setState({
        carousel: param,
        helpGood: "onColorClicked",
        empathize: 'onColor',
        listenCarefull: 'onColor',
        beHonest: "onColor",
        beCreative: "onColor",
        beArtistic: "onColor",
      });
    }

    else if (param == 'listenCarefull') {
      this.setState({
        carousel: param,
        listenCarefull: "onColorClicked",
        empathize: 'onColor',
        helpGood: 'onColor',
        beHonest: "onColor",
        beCreative: "onColor",
        beArtistic: "onColor",
      });
    }

    else if (param == 'beHonest') {
      this.setState({
        carousel: param,
        beHonest: "onColorClicked",
        empathize: 'onColor',
        helpGood: 'onColor',
        listenCarefull: 'onColor',
        beCreative: "onColor",
        beArtistic: "onColor",
      });
    }

    else if (param == 'beCreative') {
      this.setState({
        carousel: param,
        beCreative: "onColorClicked",
        empathize: 'onColor',
        helpGood: 'onColor',
        listenCarefull: 'onColor',
        beHonest: "onColor",
        beArtistic: "onColor",
      });
    }

    else if (param == 'beArtistic') {
      this.setState({
        carousel: param,
        beArtistic: "onColorClicked",
        empathize: 'onColor',
        helpGood: 'onColor',
        listenCarefull: 'onColor',
        beHonest: "onColor",
        beCreative: "onColor",
      });
    }
    // console.log(">>>", this.state.carousel)
  }

  render() {
    const { empathize, helpGood, listenCarefull, beHonest, beCreative, beArtistic } = this.state;
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
                <p className={empathize} onClick={this.coreSlider.bind(this, 'empathize')}>empathize</p>
                <p className={helpGood} onClick={this.coreSlider.bind(this, 'helpGood')}>help the good</p>
                <p className={listenCarefull} onClick={this.coreSlider.bind(this, 'listenCarefull')}>listen carefully</p>
                <p className={beHonest} onClick={this.coreSlider.bind(this, 'beHonest')}>be honest</p>
                <p className={beCreative} onClick={this.coreSlider.bind(this, 'beCreative')}>be creative</p>
                <p className={beArtistic} onClick={this.coreSlider.bind(this, 'beArtistic')}>be artistic</p>
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
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <div className={this.state.carousel}></div>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="container">
              <div className="row" style={{ marginTop: '3vw' }}>
                <div className="col-6" style={{ textAlign: 'center' }}>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'empathize')}>empathize</p>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'listenCarefull')}>listen carefully</p>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'beCreative')}>be creative</p>
                </div>
                <div className="col-6" style={{ textAlign: 'center' }}>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'helpGood')}>help the good</p>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'beHonest')}>be honest</p>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'beArtistic')}>be artistic</p>
                </div>

              </div>
            </div>

          </div>
        </div>
        <br /><br /><br /><br />
      </div>

    );
  }
}

export default OurCoreValues;