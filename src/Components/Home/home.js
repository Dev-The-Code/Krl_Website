import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
// import RBCarousel from "react-bootstrap-carousel";
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
    console.log('params data >>', param);
    // if(param == 'home'){
    //   this.setState({
    //      HomeBannerState:true,
    //      homeServicesState: false ,
    //      projectBannerState:false,
    //      HomeClientsState:false,
    //      HomeSeeProjectState:false
    //     });
    //   }
    //  if(param == 'homeServices'){
    //   this.setState({
    //     HomeBannerState:false,
    //     homeServicesState: true ,
    //     projectBannerState:false,
    //     HomeClientsState:false,
    //     HomeSeeProjectState:false
    //   })

    // } 
    //  if(param == 'project'){
    //   this.setState({
    //     HomeBannerState:false,
    //     homeServicesState: false ,
    //     projectBannerState:true,
    //     HomeClientsState:false,
    //     HomeSeeProjectState:false
    //   })
    // }
    //  if(param == 'client'){
    //   this.setState({
    //     HomeBannerState:false,
    //     homeServicesState: false ,
    //     projectBannerState:false,
    //     HomeClientsState:true,
    //     HomeSeeProjectState:false
    //   })
    // }
    //  if(param == 'seeProject'){
    //   this.setState({
    //     HomeBannerState:false,
    //     homeServicesState: false ,
    //     projectBannerState:false,
    //     HomeClientsState:false,
    //     HomeSeeProjectState:true
    //   })
    // } 
  }

  render() {
    const { mainSlider, homeServicesState, HomeBannerState, projectBannerState, HomeClientsState, HomeSeeProjectState, bannerService, projectClient, seePro } = this.state
    return (
      <div>
        <HomeBanner />
        <HomeService />
        <HomeProject />
        <HomeClients/>
        <HomeSeeProject />
        {/* <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
          <ul class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="item">
              <HomeBanner />
            </div>

            <div class="item">
              <HomeService />
            </div>

            <div class="item">
              <HomeProject />
            </div>
          </div>

        </div> */}
        {/* <div id="demo" class="carousel slide" data-ride="carousel" data-interval="false">

          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <HomeBanner />
            </div>
            <div class="carousel-item">
              <HomeService />
            </div>
            <div class="carousel-item">
              <HomeProject />
            </div>
            <div class="carousel-item">
              <HomeClients />
            </div>
            <div class="carousel-item">
              <HomeSeeProject />
            </div>
          </div>

        </div> */}
        {/* {mainSlider ?
              <div>
                <HomeBanner/>
              </div>
              :
              <div>
                <HomeService/>
              </div>
          } */}
        {/* {HomeBannerState ?
              <div>
                <HomeBanner/>
              </div>
              :
                 homeServicesState ?
              <div>
                <HomeService myFun={this.wheelSpinSlider.bind(this,'homeServices')}/>
              </div>
              :
               projectBannerState ?
               <div>
                   <HomeProject myFun={this.wheelSpinSlider.bind(this,'project')}/>
               </div>
              : HomeClientsState ?
              <div>
                <HomeClients myFun={this.wheelSpinSlider.bind(this,'client')}/>
              </div>
              : HomeSeeProjectState ?
              <div>
                <HomeSeeProject myFun={this.wheelSpinSlider.bind(this,'seeProject')}/>
              </div>
              :
              null
            } */}
      </div >
    );
  }
}

export default Home;