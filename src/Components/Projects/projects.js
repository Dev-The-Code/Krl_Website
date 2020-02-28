import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import Header2 from '../Header/header2';
import ProjectContainer from '../../Comman/ProjectContainer/projectContainer';
import SeeProject from '../ContactPage/SeeProject/seeProject';
import Founder from '../../Comman/Founders/founders';
import Banners from '../ServicesPage/banners';
import Modal from './projectModal';
import { smart } from '@babel/template';
import { Tabs } from 'antd';

var siddiqSons = {
  name: 'Siddiqsons Limited Brochure',
  desciption: 'Siddiqsons Limited, the pioneer of the denim industry in Pakistan, was in need of a magazine to effectively communicate their strategic direction to begin environmentally friendly denim manufacturing and production.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687373/cover_h7qavr.jpg'],
  ourRole: 'KRL Creatives was responsible for the creative direction and design execution of this campaign. We were behind the creative and visual strategies that went into the production of the videos and magazine that were to communicate the story and success of the denim giant.',
  technologyUsed: '',
  visualidentityLogo: [''],
  visualidentityLogoText: '',
  colorpaletteText: '',
  colorPaletteAllColor: [''],
  fontText: '',
  fontFamilyText: [''],
  fontFamily: [''],
  illustration: [
    {
      illustrationText: 'Photography',
      illustrationSubText: 'Our team played around with various light sources whilst covering Siddiqsons’ new infrastructure, machinery and manufacturing processes. We made sure to highlight the innovative processes to bring forward their message of sustainability.',
      illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687745/2_-pathway_plhjlc.jpg',
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687782/10_-_washing_axkjqd.jpg',
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687815/18_-_quality_assurance_eusdgz.jpg',
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687823/6_-_two_side_laser_uueepf.jpg',
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687830/15_-_Ozone_Machine_ddgl3d.jpg',
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687847/8_-_single_side_laser_vrkktf.jpg'],
    },
  ],
  demoHeading: 'Final Printed Brochure',
  demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579702459/VID2_nmkc9u.mp4'],
  documentHeading: 'Brochure Design',
  documentDemo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579864122/iteration_2_a_abk0ic.jpg',
  ],
  mainVideoPanel: [{
    mainHead: '',
    mainHeadsubText: '',
    mainVideos: "",
  },]
}

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      siddiqSons: siddiqSons,

      banrPeragh: 'KRL Creatives covers you for all digital assets your brand needs to serve your audience well.',
      banrPeragh1: 'We design, develop and produce.',
      headingpera: 'Siddiqsons',
      headingpera1: 'Limited',
      headingpera2: ' Brochure',
      banFuturPro: 'Featured project',
      devPeraImg: true,
      devParagraph: false,
      ViewPro: true,
      projectStateFromHome: [],
    }
  }
  componentWillMount() {
    let data = this.props.location.state;
    console.log(data, 'data')
    if (data) {
      if (data.projectObj == undefined) {
        this.setState({
          projectStateFromHome: data
        })
      }
      else if (data.projectObj != undefined) {
        this.setState({
          projectStateFromHome: data.projectObj
        })
      }
    }
    let dataLocation = this.props.location.pathname;
    if(dataLocation){
      let routName;
      routName = dataLocation.slice(1);
      routName = routName.charAt(0).toUpperCase() + routName.slice(1);
      this.setState({ headerPath: routName });
    }
    window.scrollTo(0, 0);
  }

  render() {
    // console.log("render -> this.props.location.state;", this.props.location.state);
    const { TabPane } = Tabs;
    const { GFAperaas, devPeraImg, headingpera, headingpera1, headingpera2, banFuturPro, ViewPro, headerPath,
      projects, siddiqSons, projectStateFromHome } = this.state;
    return (

      <div className="all_backgrundImageAfter animateFadeIn">
        <Header2 headerPath={headerPath} headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" />
        <div className="row">
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
          <div className="d-none d-md-none d-lg-block d-xl-block col-xl-10 col-lg-10" style={{ paddingRight: "0vw", paddingLeft: '0vw' }}>
            {/*hidden mobile tablet ipad */}
            <div className="col-xl-12 col-lg-12 d-none d-sm-none d-md-none d-xl-block d-lg-block" style={{ paddingRight: "0vw", paddingLeft: '0vw' }}>
              <Banners
                // locationUrl={"https://www.acfanimalrescue.org/"}
                banrs="row ban"
                devChld="col-xl-5 col-lg-5 banDev"
                peraDev="banPeraDev"
                peraChld="banPera"
                banPera={banFuturPro}
                hedPera="banHedng"
                banhedng={headingpera}
                hedPera1="banHedng1"
                banhedng1={headingpera2}
                devChild1="col-xl-7 col-lg-7 SiddiqSonsDeskstop"
                banPera1="banPera1"
                hedPera2="banHedng2"
                banhedng2={headingpera1}
                devChld1="col-xl-7 col-lg-7 banChildDev"
                devChld2="col-xl-4 col-lg-4 banChildDev1"
                projectData={siddiqSons}

                seeAerro={devPeraImg}
                projctPera1="BanrPera1"
                pera={GFAperaas}
                proAeroImg="BanPeraimg"
                devChld3="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 banChildDev2"
              />
            </div>
          </div>
          <div className="d-none d-md-block d-lg-none d-xl-none col-md-10" style={{ paddingRight: "0vw", paddingLeft: '0vw' }}>
            <div className="col-md-12 d-none d-md-block d-lg-none d-xl-none" style={{ paddingRight: "0vw", paddingLeft: '0vw' }}>
              <Banners
                // locationUrl={"https://www.acfanimalrescue.org/"}
                banrs="row banSmall"
                devChld="col-md-5 col-sm-5 col-5 banDevSmall"
                peraDev="banPeraDevsmall"
                peraChld="banPeraSmall"
                banPera={banFuturPro}
                hedPera="banHedngSmall"
                banhedng={headingpera}
                hedPera1="banHedng1Small"
                banhedng1={headingpera2}
                devChild1="col-md-7 col-sm-7 col-7 SiddiqSonsTablet"
                banPera1="banPera1Small"
                hedPera2="banHedng2Small"
                banhedng2={headingpera1}
                devChld1="col-md-5 col-sm-5 col-3 banChildDevSmall"
                devChld2="col-md-6 col-sm-6 col-7 banChildDev1Small"
                projectData={siddiqSons}

                seeAerro={devPeraImg}
                projctPera1="BanrPera1Mb"
                pera={GFAperaas}
                proAeroImg="BanPeraimg"
                devChld3="col-md-1 col-sm-1 col-1 banChildDev2Small"
              />
            </div>
          </div>
          <div className="d-block d-md-none d-lg-none d-xl-none col-12" style={{ paddingLeft: '0vw', marginTop: '40vw' }}>
            <div className="col-12 d-block d-md-none d-lg-none d-xl-none">
              <Banners
                // locationUrl={"https://www.acfanimalrescue.org/"}
                banrs="row banSmall"
                devChld="col-md-5 col-sm-5 col-5 banDevSmall"
                peraDev="banPeraDevsmall"
                peraChld="banPeraSmall"
                banPera={banFuturPro}
                hedPera="banHedngSmall"
                banhedng={headingpera}
                hedPera1="banHedng1Small"
                banhedng1={headingpera2}
                devChild1="col-md-7 col-sm-7 col-7 SiddiqSonsMobile"
                banPera1="banPera1Small"
                hedPera2="banHedng2Small"
                banhedng2={headingpera1}
                devChld1="col-md-5 col-sm-5 col-3 banChildDevSmall"
                devChld2="col-md-6 col-sm-6 col-7 banChildDev1Small"
                projectData={siddiqSons}

                seeAerro={devPeraImg}
                projctPera1="BanrPera1Mb"
                pera={GFAperaas}
                proAeroImg="BanPeraimg"
                devChld3="col-md-1 col-sm-1 col-1 banChildDev2Small"
              />
            </div>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
        </div>

        <ProjectContainer projectStateFromHome={projectStateFromHome} />

        <Link to={`/contact`} className="changingColor">
          <div className="row proSeeFotr">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2"></div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">{/*seeBckColr="proSeeFotr" ye class or css use hogi*/}
              <SeeProject
                roWalign='row ReW_home'
                se_Text="seProFotr_text"
                se_Text1="largeProFotr_text"
                seeText="Like what you see?"
                lrgText="Send a request "
                lgBrText=""
                arrow_Right="arrowRight1_ProjeCT"
              />
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12"></div>
          </div>
        </Link>
        {/* <div className="row">
          <div className="col-12 col-md-1 col-xl-1 col-lg-1"></div>
          <div className="col-11 col-md-5 col-xl-6 col-lg-6 bigProjectLeft">
            <ProjectContainer projctBox={`col-12 col-md-12 col-xl-11 col-lg-11 LightFProject`}
              projctHedng="GFAhedng"
              locationUrl={""}
              hed='LIGHT-F Project By'
              hed1='JICA & Sindh Gvt'
              projctChildBox="col-12 col-md-12 col-xl-8 col-lg-9 bgChildProject"
              projctPera="GFApera"
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='LIGHT-F (started by JICA with Sindh Government) wanted to launch a program fo...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={projects}
            />
            <ProjectContainer projctBox='col-12 col-md-12 col-xl-11 col-lg-11 GetFitProject'
              projctHedng="GFAhedng"
              hed='GetFitAthletic Branding'
              hed1='Mobile App & Website'
              projctChildBox="col-12 col-md-12 col-xl-8 col-lg-9 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='A young & ambitious fitness trainer wanted to rebrand his venture, GitFitAthleti...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={projects}
            />
            <ProjectContainer projctBox='col-12 col-md-12 col-xl-11 col-lg-11 CircleProject'
              projctHedng="GFAhedng"
              hed='Circle Women Merch'
              hed1='Design'
              projctChildBox="col-12 col-md-12 col-xl-8 col-lg-9 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Circle Women, an non-profit organization working for women empowerment, neede...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={projects}
            />
            <ProjectContainer projctBox='col-12 col-md-12 col-xl-11 col-lg-11 ZiyaratProject'
              projctHedng="GFAhedng"
              hed='Ziyarat Branding'
              hed1='Websites'
              projctChildBox="col-12 col-md-12 col-xl-8 col-lg-9 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Ziyarat, a Pakistani designer wear retail brand needed a logo for their launch i...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={projects}
            />
            <ProjectContainer projctBox='col-12 col-md-12 col-xl-11 col-lg-11 DallasPalmProject'
              projctHedng="GFAhedng"
              hed='Dallas Palms'
              hed1='Website'
              projctChildBox="col-12 col-md-12 col-xl-8 col-lg-9 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Dallas Palms, a wedding venue in Dallas, wanted to launch their website that co...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={projects}
            />
          </div>
          <div className="col-12 col-md-5 col-xl-5 col-lg-5">
            <ProjectContainer projctBox='col-11 col-md-12 col-xl-9 col-lg-9 DrentProject'
              projctHedng="ADBhedngProject"
              hed="Drent Branding"
              hed1='& Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-12 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Drent needed a luxurious website to formally launch their dress rental servic...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={projects}
            />
            <ProjectContainer projctBox='col-11 col-md-12 col-xl-9 col-lg-9 ACFProject'
              projctHedng="ADBhedngProject"
              hed='ACF Animal'
              hed1='Rescue Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-12 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a websi...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={projects}
            />
            <ProjectContainer projctBox='col-11 col-md-12 col-xl-9 col-lg-9 PakJazbaProject'
              projctHedng="ADBhedngProject"
              hed='Pakjazba Online'
              hed1='Portal System'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-12 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Pakjazba is a one stop portal that allows users to buy & sell stuff, book room...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={projects}
            />
            <ProjectContainer projctBox='col-11 col-md-12 col-xl-9 col-lg-9 OxbridgeProject'
              projctHedng="ADBhedngProject"
              hed='Oxbridge Video,'
              hed1='Social Media & Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-12 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Oxbridge, an English training start up, had an innovative approach to trainin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={projects}
            />
            <ProjectContainer projctBox='col-11 col-md-12 col-xl-9 col-lg-9 AmberDazelProject'
              projctHedng="ADBhedngProject"
              hed='Amber Dazzel'
              hed1='Website & TVC'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-12 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Amber Dazzle, an American cosmetics brand, wanted to launch their product lin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={projects}
            />
          </div>
          <div className="col-12 col-md-1 col-xl-1 col-lg-1"></div>
        </div> */}

        {/* ipad visible
            <ProjectContainer projctBox='d-none d-sm-block d-md-block d-xl-none d-lg-none col-md-12 DrentProject'
              projctHedng="ADBhedngProject"
              hed="Drent Branding"
              hed1='& Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-11 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Drent needed a luxurious website to formally launch their dress rental servic...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={drentBrand}
            />
            mobile visible
            <ProjectContainer projctBox='d-block d-sm-none d-md-none d-xl-none d-lg-none col-11 DrentProject'
              projctHedng="ADBhedngProject"
              hed="Drent Branding"
              hed1='& Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-12 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Drent needed a luxurious website to formally launch their dress rental servic...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={drentBrand}
            /> */}



        {/* ipad visible
            <ProjectContainer projctBox='d-none d-md-block d-xl-none d-lg-none col-md-12 ACFProject'
              projctHedng="ADBhedngProject"
              hed='ACF Animal'
              hed1='Rescue Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-11 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a websi...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={aCFRescue}
            />
            mobile visible
            <ProjectContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 ACFProject'
              projctHedng="ADBhedngProject"
              hed='ACF Animal'
              hed1='Rescue Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-12 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a websi...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={aCFRescue}
            /> */}



        {/* ipad visible
            <ProjectContainer projctBox='d-none d-md-block d-xl-none d-lg-none col-md-12 PakJazbaProject'
              projctHedng="ADBhedngProject"
              hed='Pakjazba Online'
              hed1='Portal System'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-11 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Pakjazba is a one stop portal that allows users to buy & sell stuff, book room...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={pakJazba}
            />
            mobile visible
            <ProjectContainer projctBox='d-block d-sm-none d-md-none d-xl-none d-lg-none col-11 PakJazbaProject'
              projctHedng="ADBhedngProject"
              hed='Pakjazba Online'
              hed1='Portal System'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-12 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Pakjazba is a one stop portal that allows users to buy & sell stuff, book room...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={pakJazba}
            /> */}



        {/* ipad visible
            <ProjectContainer projctBox='d-none d-sm-block d-md-block d-xl-none d-lg-none col-md-12 OxbridgeProject'
              projctHedng="ADBhedngProject"
              hed='Oxbridge Video,'
              hed1='Social Media & Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-11 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Oxbridge, an English training start up, had an innovative approach to trainin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={oxBridge}
            />
            mobile visible
            <ProjectContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 OxbridgeProject'
              projctHedng="ADBhedngProject"
              hed='Oxbridge Video,'
              hed1='Social Media & Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-12 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Oxbridge, an English training start up, had an innovative approach to trainin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={oxBridge}
            /> */}



        {/* ipad visible
            <ProjectContainer projctBox='d-none d-sm-block d-md-block d-xl-none d-lg-none col-md-12 AmberDazelProject'
              projctHedng="ADBhedngProject"
              hed='Amber Dazzel'
              hed1='Website & TVC'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-11 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Amber Dazzle, an American cosmetics brand, wanted to launch their product lin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={AmberDazzel}
            />
            mobile visible
            <ProjectContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 AmberDazelProject'
              projctHedng="ADBhedngProject"
              hed='Amber Dazzel'
              hed1='Website & TVC'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-12 ADB_BgChildProject"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Amber Dazzle, an American cosmetics brand, wanted to launch their product lin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={AmberDazzel}
            /> */}






        {/* <div className="d-none d-md-none d-lg-block d-xl-block col-xl-6 col-lg-6" style={{ marginTop: '10vw' }}>

            <ProjectContainer projctBox='col-xl-11 col-lg-11 LightFProject'
              projctHedng="GFAhedng"
              locationUrl={""}
              hed='LIGHT-F Project By'
              hed1='JICA & Sindh Gvt'
              projctChildBox="col-xl-8 col-lg-9 bgChildProject"
              projctPera="GFApera"

              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='LIGHT-F (started by JICA with Sindh Government) wanted to launch a program fo...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={jicaLightF}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 GetFitProject'
              projctHedng="Drenthedng"
              hed='GetFitAthletic Branding'
              hed1='Mobile App & Website'
              projctChildBox="col-xl-8 col-lg-9 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='A young & ambitious fitness trainer wanted to rebrand his venture, GitFitAthleti...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={getFit}
            />

            <Founder />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 CircleProject'
              projctHedng="GFAhedng"
              hed='Circle Women Merch'
              hed1='Design'
              projctChildBox="col-xl-8 col-lg-9 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Circle Women, an non-profit organization working for women empowerment, neede...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={circleWomen}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 ZiyaratProject'
              projctHedng="Drenthedng"
              hed='Ziyarat Branding'
              hed1='Websites'
              projctChildBox="col-xl-8 col-lg-9 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Ziyarat, a Pakistani designer wear retail brand needed a logo for their launch i...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={ziyaratBrand}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 DallasPalmProject'
              projctHedng="Drenthedng"
              hed='Dallas Palms'
              hed1='Website'
              projctChildBox="col-xl-8 col-lg-9 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Dallas Palms, a wedding venue in Dallas, wanted to launch their website that co...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={dallasPalm}
            />

          </div> */}


        {/*ipad visible */}

        {/* <div className="d-none d-md-block col-lg-none d-xl-none col-md-5" style={{ marginTop: '10vw' }}>
            <ProjectContainer projctBox='col-md-12 LightFProject'
              projctHedng="GFAhedng"
              hed='LIGHT-F Project By'
              hed1='JICA & Sindh Gvt'
              projctChildBox="col-md-12 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='LIGHT-F (started by JICA with Sindh Government) wanted to launch a program fo...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={jicaLightF}
            />

            <ProjectContainer projctBox='col-md-12 GetFitProject'
              projctHedng="Drenthedng"
              hed='GetFitAthletic Branding'
              hed1='Mobile App & Website'
              projctChildBox="col-md-12 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='A young & ambitious fitness trainer wanted to rebrand his venture, GitFitAthleti...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={getFit}
            />

            <Founder />

            <ProjectContainer projctBox='col-md-12 CircleProject'
              projctHedng="GFAhedng"
              hed='Circle Women Merch'
              hed1='Design'
              projctChildBox="col-md-12 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Circle Women, an non-profit organization working for women empowerment, neede...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={circleWomen}
            />

            <ProjectContainer projctBox='col-md-12 ZiyaratProject'
              projctHedng="Drenthedng"
              hed='Ziyarat Branding'
              hed1='Websites'
              projctChildBox="col-md-12 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Ziyarat, a Pakistani designer wear retail brand needed a logo for their launch i...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={ziyaratBrand}
            />

            <ProjectContainer projctBox='col-md-12 DallasPalmProject'
              projctHedng="Drenthedng"
              hed='Dallas Palms'
              hed1='Website'
              projctChildBox="col-md-12 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Dallas Palms, a wedding venue in Dallas, wanted to launch their website that co...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={dallasPalm}
            />

          </div> */}

        {/*mobile visible */}

        {/* <div className="d-block d-md-none d-lg-none d-xl-none col-11" style={{ marginTop: '21vw', marginLeft: '4.3vw' }}>

            <ProjectContainer projctBox='col-12 LightFProject'
              projctHedng="GFAhedng"
              hed='LIGHT-F Project By'
              hed1='JICA & Sindh Gvt'
              projctChildBox="col-12 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='LIGHT-F (started by JICA with Sindh Government) wanted to launch a program fo...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={jicaLightF}
            />

            <ProjectContainer projctBox='col-12 GetFitProject'
              projctHedng="Drenthedng"
              hed='GetFitAthletic Branding'
              hed1='Mobile App & Website'
              projctChildBox="col-12 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='A young & ambitious fitness trainer wanted to rebrand his venture, GitFitAthleti...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={getFit}
            />

            <Founder />

            <ProjectContainer projctBox='col-12 CircleProject'
              projctHedng="GFAhedng"
              hed='Circle Women Merch'
              hed1='Design'
              projctChildBox="col-12 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Circle Women, an non-profit organization working for women empowerment, neede...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={circleWomen}
            />

            <ProjectContainer projctBox='col-12 ZiyaratProject'
              projctHedng="Drenthedng"
              hed='Ziyarat Branding'
              hed1='Websites'
              projctChildBox="col-12 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Ziyarat, a Pakistani designer wear retail brand needed a logo for their launch i...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={ziyaratBrand}
            />

            <ProjectContainer projctBox='col-12 DallasPalmProject'
              projctHedng="Drenthedng"
              hed='Dallas Palms'
              hed1='Website'
              projctChildBox="col-12 bgChildProject"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Dallas Palms, a wedding venue in Dallas, wanted to launch their website that co...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={dallasPalm}
            />

          </div> */}




      </div>
    );
  }
}

export default Projects;

        // banrs="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 banDev"
        // banrsChldDev="row banProChildDev"
        // devChld="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 childProDev1"

// seeAerro={devPeraImg}
// devChld1="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 chilDev2"
// devChldPera1="childProhedng"
// hedPera={headingpera}
// colrHed="colrhedng"
// hedPera1={headingpera1} 
// hedPera2={headingpera2}