import React, { Component } from 'react';
import './ourCoreValues.css';
import ACF from '../../../Assets/Images/acf.png';
import { Carousel, Radio } from 'antd';

let timer;

class OurCoreValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: 'Empathy',
      Empathy: 'onColorClicked',
      Transparency: 'onColor',
      listenCarefull: 'onColor',
      beHonest: 'onColor',
      beCreative: 'onColor',
      beArtistic: 'onColor'
    }
  }

  // componentWillMount(){
  //   timer = setTimeout( this.coreSlider(), 1000);
  //   console.log("timer",timer);
  //   console.log('componentWillMount after Didmount');
  // }
  // componentDidMount(){
  //   clearTimeout(timer);
  //   console.log('componentDidMount');
  // }

  coreSlider = (param) => {

    if (param == 'Empathy') {
      console.log("TCL: OurCoreValues -> coreSlider -> param", param)
      this.setState({
        carousel: param,
        Empathy: "onColorClicked",
        Transparency: 'onColor',
        listenCarefull: 'onColor',
        beHonest: "onColor",
        beCreative: "onColor",
        beArtistic: "onColor",
      });

    }

    else if (param == 'Transparency') {
      this.setState({
        carousel: param,
        Transparency: "onColorClicked",
        Empathy: 'onColor',
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
        Empathy: 'onColor',
        Transparency: 'onColor',
        beHonest: "onColor",
        beCreative: "onColor",
        beArtistic: "onColor",
      });
    }

    else if (param == 'beHonest') {
      this.setState({
        carousel: param,
        beHonest: "onColorClicked",
        Empathy: 'onColor',
        Transparency: 'onColor',
        listenCarefull: 'onColor',
        beCreative: "onColor",
        beArtistic: "onColor",
      });
    }

    else if (param == 'beCreative') {
      this.setState({
        carousel: param,
        beCreative: "onColorClicked",
        Empathy: 'onColor',
        Transparency: 'onColor',
        listenCarefull: 'onColor',
        beHonest: "onColor",
        beArtistic: "onColor",
      });
    }

    else if (param == 'beArtistic') {
      this.setState({
        carousel: param,
        beArtistic: "onColorClicked",
        Empathy: 'onColor',
        Transparency: 'onColor',
        listenCarefull: 'onColor',
        beHonest: "onColor",
        beCreative: "onColor",
      });
    }
  }

  render() {
    const { Empathy, Transparency, listenCarefull, beHonest, beCreative, beArtistic } = this.state;
    return (
      <div>
        <div className="animatedup animatedFadeInUp fadeInUp">
          <div className="row" style={{ marginTop: '7vw' }}>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mobPading">
              <p className="Ocv2">Core values</p>
              <Carousel effect="fade" autoplay>
                <div>
                  <div className="Empathy"></div>
                </div>
                <div>
                  <div className="Transparency"></div>
                </div>
                <div>
                  <div className="beHonest"></div>
                </div>
                <div>
                  <div className="beCreative"></div>
                </div>
              </Carousel>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
          </div>
        </div>
        {/* <div className="d-none d-sm-block">
          <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row" style={{ marginTop: '7vw' }}>
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 Ocv1">
                <div className={this.state.carousel}></div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 Ocv1">
                <p className="Ocv2">Core values</p>
                <p className={Empathy} onClick={this.coreSlider.bind(this, 'Empathy')}>Empathy</p>
                <p className={Transparency} onClick={this.coreSlider.bind(this, 'Transparency')}>Transparency</p>
                <p className={beHonest} onClick={this.coreSlider.bind(this, 'beHonest')}>honest</p>
                <p className={beCreative} onClick={this.coreSlider.bind(this, 'beCreative')}>Creativity</p>
                <p className={listenCarefull} onClick={this.coreSlider.bind(this, 'listenCarefull')}>listen carefully</p>
                <p className={beArtistic} onClick={this.coreSlider.bind(this, 'beArtistic')}>be artistic</p>
              </div>
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
            </div>
          </div>
        </div> */}
        {/* <div className="d-block d-sm-none">
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
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'Empathy')}>Empathy</p>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'beCreative')}>Creativity</p>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'listenCarefull')}>listen carefully</p>
                </div>
                <div className="col-6" style={{ textAlign: 'center' }}>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'Transparency')}>Transparency</p>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'beHonest')}>honest</p>
                  <p className="onColor_mob" onClick={this.coreSlider.bind(this, 'beArtistic')}>be artistic</p>
                </div>

              </div>
            </div>

          </div>
        </div> */}
        <br /><br /><br /><br />
      </div>

    );
  }
}

export default OurCoreValues;