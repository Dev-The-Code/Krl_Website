import React, { Component } from 'react';
import './home.css';
import HomeBanner from './HomeBanner/homeBanner';
import AboutBaner from '../About/AboutBanner/aboutBanner';
import SomeOurClients from '../../Comman/SomeOurClients/someOurClient';
import Founders2 from '../../Comman/Founders/founders2';
import Smallarrow from '../../Assets/Images/latest-post-arrow.png';
import Header2 from '../Header/header2';
import SeeProject from '../ContactPage/SeeProject/seeProject';
import ProjectsContainer from '../../Comman/ProjectContainer/projectContainer';
import Mainservice from '../ServicesPage/mainService';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GFAHeading: 'GetFitAthletic',
      GFAHeadingBr: 'Mobile App',
      DrentHeading: 'Drent Luxury Dress',
      DrentHeadingBr: 'Rental Website',
      GFAperaas: 'An ambitious willing to help people be healthy. We designed and developed a...',
      Drentperaas: 'A luxury cloth rental service needed a new website. We design and developed...',
      ADBHeading: 'Amber Dazzle',
      ADBHeadingBr: 'Branding',
      DPWHeading: 'Dallas Palms',
      DPWHeadingBr: 'Website',
      DPWperaas: 'A Dallas based wedding venue needed a strong online presence. We design...',
      ODSHeading: 'Online Design',
      ODSHeadingBr: 'Website',

      devPeraImg: true,
    }
  }
  componentWillMount() {
    this.setState({ headerPath: 'Home' });
  }

  render() {
    const { GFAHeading, GFAHeadingBr, DrentHeading, DrentHeadingBr, GFAperaas, Drentperaas, ADBHeading, ADBHeadingBr,
      DPWHeading, DPWHeadingBr, DPWperaas, ODSHeading, ODSHeadingBr, devPeraImg ,headerPath} = this.state
    return (
      <div>
        <Header2 headerPath={headerPath}/>
        <HomeBanner />

        <AboutBaner
          para_Text='dai_coLrsty'
          para_ClaSs='para_Textt'
          descrip_Text='KRL Creatives covers you for all your digital needs your brand needs to serve your audience well'
          mOR_texT='We design, develop and produce'
          bigGerText='KRL Creatives covers you for all your digital needs your brand needs to serve your audience well'
          bigGerInSmall='We design, develop and produce'
          diviColotextt='divi_Colorsty_Mob_Home'
        /><br /><br />


        {/*Service Page*/}

        <div className="row">
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-12">
            <h2 className="heaD_font">Services</h2>
          </div>
        </div>
        <Mainservice />


        {/*Project Page*/}

        <div className="row">
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-12">
            <h2 className="heaD_font">Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <ProjectsContainer
              projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-11 GFA_BgImg'
              projctHedng="GFAhedng"
              hed={GFAHeading}
              hed1={GFAHeadingBr}
              projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"

              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera={GFAperaas}
              proAeroImg="GFAimg"
            />

            <ProjectsContainer
              projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DrentBgImg'
              projctHedng="Drenthedng"
              hed={DrentHeading}
              hed1={DrentHeadingBr}
              projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"

              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera={Drentperaas}
              proAeroImg="GFAimg"
            />
          </div>
          <div className="col-12 col-md-5 col-lg-5 col-xl-5">

            {/*mobile, ipad hidden*/}
            <ProjectsContainer projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-10 col-lg-10 ADB_HomBgImg'
              projctHedng="ADBhedng"
              hed={ADBHeading}
              hed1={ADBHeadingBr}
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
              projctPera="ADBpera"

              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera={Drentperaas}
              proAeroImg="ADBimg"
            />

            {/*mobile, ipad visible*/}
            <ProjectsContainer projctBox='d-block d-sm-block d-md-block d-xl-none d-lg-none col-md-10 ADB_BgImgSmMd'
              projctHedng="ADBhedng"
              hed={ADBHeading}
              hed1={ADBHeadingBr}
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-11 ADB_BgChildSmMd"
              projctPera="ADBpera"

              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera={Drentperaas}
              proAeroImg="ADBimg"
            />
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-11 col-lg-11 col-xl-11 vieW_btn">
                  <p className="arroW_lastesT">View All Projects <img src={Smallarrow} className="" /></p>

                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-1 col-xl-1"></div>
        </div>


        {/*Clients and CO founder*/}

        <br /><br />
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 backG_colR">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-2"></div>
              <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-10">
                <SomeOurClients />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <Founders2 />
          </div>
        </div>


        {/*footer (Seeproject) */}

        <div className="row fot_hoMe_coLor">
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-12 col-md-10 col-lg-10 col-xl-10">
            <SeeProject se_Text="seProFotr_text"
              roWalign='row ReW_home'
              se_Text1="largeProFotr_text"
              seeText="Lets build something awesome together!"
              lrgText="Send a request "
              lgBrText=""
              arrow_Right="arrowRight1_hoMe"
            />
          </div>
          <div className="col-12 col-md-12 col-lg-1 col-xl-1"></div>
        </div>
      </div>
    );
  }
}

export default Home;