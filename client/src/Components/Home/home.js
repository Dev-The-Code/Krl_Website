import React, { Component } from 'react';
import './home.css';
import HomeBanner from './HomeBanner/homeBanner';
import HomeService from './homeService';
import HomeProject from './homeProject';
import HomeClients from './homeClients';
import HomeSeeProject from './homeSeeProject';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSlider: true,
      homeServicesState: false,
      projectClient: false,
      HomeBannerState: true,
      projectBannerState: false,
      seePro: false,
      HomeClientsState: false,
      HomeSeeProjectState: false
    }
  }
  wheelListener = () => {
    window.addEventListener("wheel", this.wheelSpinSlider);
    console.log('heloo event');
  }
  componentWillMount() {
    this.setState({ headerPath: 'Home' });
    window.scrollTo(0, 0);
    this.wheelListener();
  }



  wheelSpinSlider = (param) => {
    this.setState({
      HomeBannerState: true,
      mainSlider: true,
      homeServicesState: true,
      projectBannerState: false,
      HomeClientsState: false,
      HomeSeeProjectState: false
    });
  }

  render() {
    const { mainSlider, homeServicesState, HomeBannerState, projectBannerState, HomeClientsState, HomeSeeProjectState, bannerService, projectClient, seePro } = this.state
    return (
      <div>
          <HomeBanner />
        <div className="servicE_Banner animateFadeIn">
          <HomeService />
          <HomeProject />
          <HomeClients/>
          <HomeSeeProject />
        </div>
        </div>
    );
  }
}

export default Home;