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
    }
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }


  render() {
    const { } = this.state
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