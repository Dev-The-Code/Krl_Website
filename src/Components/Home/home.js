import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import HomeBanner from './HomeBanner/homeBanner';
import AboutBaner from '../About/AboutBanner/aboutBanner';
import SomeOurClients from '../../Comman/SomeOurClients/someOurClient';
import Founders2 from '../../Comman/Founders/founders2';
import Smallarrow from '../../Assets/Images/latest-post-arrow.png';
import Header2 from '../Header/header2';
import Header from '../Header/header';
import SeeProject from '../ContactPage/SeeProject/seeProject';
import ProjectsContainer from '../../Comman/ProjectContainer/projectContainer';
import Mainservice from '../ServicesPage/mainService';
import HomeServicesPage from '../../Comman/HomeServicePage/homeServicePage';

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
    window.scrollTo(0, 0)
  }

  render() {
    const { GFAHeading, GFAHeadingBr, DrentHeading, DrentHeadingBr, GFAperaas, Drentperaas, ADBHeading, ADBHeadingBr,
      DPWHeading, DPWHeadingBr, DPWperaas, ODSHeading, ODSHeadingBr, devPeraImg, headerPath } = this.state
    return (
      <div>
        <Header2 headerPath={headerPath} />
        
        <HomeBanner />

        <AboutBaner
          para_Text='dai_coLrsty'
          para_ClaSs='para_Textt'
          descrip_Text='KRL Creatives covers you for all your digital needs your brand needs to serve your audience well'
          mOR_texT='We design, develop and produce'
          bigGerText='KRL Creatives covers you for all your digital needs your brand needs to serve your audience well'
          bigGerInSmall='We design, develop and produce'
          diviColotextt='divi_Colorsty_Mob_Home'
          BnerAbtHome='col-10 backImgHome_baner_Mob'
        /><br /><br />


        {/*Service Page*/}

        <div className="row">
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-12">
            <h2 className="heaD_font">Services</h2>
          </div>
        </div>
        <HomeServicesPage />


        {/*Project Page*/}

        <div className="row">
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-12">
            <h2 className="heaD_fontPro">Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="d-none d-md-none d-lg-block d-xl-block col-lg-6 col-xl-6">
            <ProjectsContainer
              projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-11 GFA_BgImg'
              projctHedng="GFAhedng"
              hed={GFAHeading}
              hed1={GFAHeadingBr}
              projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={"https://getfitathletic.pk/"}
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
              locationUrl={"http://drent1.herokuapp.com/"}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera={Drentperaas}
              proAeroImg="GFAimg"
            />
          </div>

          {/*ipad visible */}
          <div className="d-none d-md-block d-lg-none d-xl-none col-md-6">
            <ProjectsContainer
              projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-11 GFA_BgImg'
              projctHedng="GFAhedng"
              hed={GFAHeading}
              hed1={GFAHeadingBr}
              projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={"https://getfitathletic.pk/"}
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
              locationUrl={"http://drent1.herokuapp.com/"}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera={Drentperaas}
              proAeroImg="GFAimg"
            />
          </div>

          {/*monbile visible */}
          <div className="d-block d-md-none d-lg-none d-xl-none col-11">
            <ProjectsContainer
              projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 GFA_BgImgHomeMb'
              projctHedng="GFAhedng"
              hed={GFAHeading}
              hed1={GFAHeadingBr}
              projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={"https://getfitathletic.pk/"}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera={GFAperaas}
              proAeroImg="GFAimg"
            />

            <ProjectsContainer
              projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DrentBgImgHomeMb'
              projctHedng="Drenthedng"
              hed={DrentHeading}
              hed1={DrentHeadingBr}
              projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={"http://drent1.herokuapp.com/"}
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
              locationUrl={"https://www.amberdazzle.com/"}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera={Drentperaas}
              proAeroImg="ADBimg"
            />

            {/*ipad visible*/}
            <ProjectsContainer projctBox='d-none d-md-block d-xl-none d-lg-none col-md-10 ADB_BgImgSmMd'
              projctHedng="ADBhedng"
              hed={ADBHeading}
              hed1={ADBHeadingBr}
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-11 ADB_BgChildMd"
              projctPera="ADBpera"
              locationUrl={"https://www.amberdazzle.com/"}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera={Drentperaas}
              proAeroImg="ADBimg"
            />
            {/*mobile visible*/}
            <ProjectsContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 ADB_BgImgHomeMb'
              projctHedng="ADBhedngHomeMb"
              hed={ADBHeading}
              hed1={ADBHeadingBr}
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ADB_BgChildSmMd"
              projctPera="ADBpera"
              locationUrl={"https://www.amberdazzle.com/"}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera={Drentperaas}
              proAeroImg="ADBimg"
            />

            <Link to={`/project`} className="changingdec">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-11 col-lg-11 col-xl-11 vieW_btn">
                    <p className="arroW_lastesT">View All Projects <img src={Smallarrow} className="" /></p>
                  </div>
                </div>
              </div>
            </Link>
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
        <Link to={`/contact`} className="changingColor">
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
        </Link>
      </div>
    );
  }
}

export default Home;