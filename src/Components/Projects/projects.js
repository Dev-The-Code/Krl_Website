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

var siddiqSons = {
  name: 'Siddiq',
  lastName: 'Sons'
}
var jicaLightF = {
  name: 'LIGHT-F Project By JICA & Sindh Gvt',
  desciption: 'LIGHT-F (started by JICA with Sindh Government) wanted to launch a program for the welfare of women in interior Sindh. They needed to brand the program and needed a brand identity designed.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610272/cover_vjziro.jpg'],
  ourRole: 'KRL Creatives designed their brand, gave the brand an identity which included a logo, letterheads, certificate design, and brand guidelines.Apart from branding, we also designed and photographed their product catalog.',
  technologyUsed: '',
  visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610909/light-f-logo_lpqdtl.png'],
  visualidentityLogoText: 'The Light-F logo is a word mark. It incorporates a torch that faces upwards, symbolising life, truth and the regenerative power of flame.',
  colorpaletteText: 'Purple color of LIGHT-F shows ambition to bring change. And the orange color shows the energy of the brand.',
  colorPaletteAllColor: ['#662D91', '#F58441', '#912F6C', '#FFC907', '#CCAED3',],
  fontText: 'The font chosen for LIGHT-F has a clean and mature look, which shows the open and mature nature of the brand.',
  fontFamilyText: ['Nunito Sans', ''],
  fontFamily: ['Nunito-Sans', ''],
  illustration: [{
    illustrationText: 'Product Photography',
    illustrationSubText: 'Product photography done for the LIGHT-F handcrafted gift catalogue.',
    illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579611945/big_asharfi_small_ng7xdd.jpg',
      'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612007/coin_pouch_2_o9p8wm.jpg',
      'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612047/coin_pouch_4_cvg6yl.jpg',
      'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612085/elephant_keychain_cypfqn.jpg',
      'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612130/ajrak_ozkjew.jpg',
      'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612154/long_pen_holder_cuwq7y.jpg'],
  }],
  demoHeading: '',
  demoVideo: [''],
  DocumentatFinalDemo: 'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612328/CorporateIdentity_MockupsForFree_obifgg.jpg',
  mainVideo: [{
    mainHead: '',
    mainHeadsubText: '',
    mainVideo: '',
  },]
}
var getFit = {
  name: 'Ali Hamza',
  lastName: 'Baloch'
}
var drentBrand = {
  name: 'Iqra Drent',
  lastName: 'Iqra'
}
var aCFRescue = {
  name: 'Ayesha',
  lastName: 'Chundigar'
}
var pakJazba = {
  name: 'Pak',
  lastName: 'Jazba'
}
var circleWomen = {
  name: 'Pak',
  lastName: 'Jazba'
}
var oxBridge = {
  name: 'Shahab',
  lastName: 'Farhan'
}
var ziyaratBrand = {
  name: 'Ziyarat',
  lastName: 'Brand'
}
var dallasPalm = {
  name: 'Dallas',
  lastName: 'Pallam'
}

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      siddiqSons: siddiqSons,
      jicaLightF: jicaLightF,
      getFit: getFit,
      drentBrand: drentBrand,
      aCFRescue: aCFRescue,
      pakJazba: pakJazba,
      circleWomen: circleWomen,
      oxBridge: oxBridge,
      ziyaratBrand: ziyaratBrand,
      dallasPalm: dallasPalm,

      banrPeragh: 'KRL Creatives covers you for all digital assets your brand needs to serve your audience well.',
      banrPeragh1: 'We design, develop and produce.',
      headingpera: 'Siddiqsons',
      headingpera1: 'Limited',
      headingpera2: ' Brochure',
      banFuturPro: 'Featured project',
      devPeraImg: true,
      devParagraph: false,
      ViewPro: true
    }
  }
  componentWillMount() {
    let data = this.props.location.pathname;
    let routName;
    routName = data.slice(1);
    routName = routName.charAt(0).toUpperCase() + routName.slice(1);
    //  console.log(routName,'sss');
    this.setState({ headerPath: routName });
    window.scrollTo(0, 0)
  }

  render() {
    const { GFAperaas, devPeraImg, headingpera, headingpera1, headingpera2, banFuturPro, ViewPro, headerPath,
      siddiqSons, jicaLightF, getFit, drentBrand, aCFRescue, pakJazba, circleWomen, oxBridge, ziyaratBrand, dallasPalm
    } = this.state
    // console.log(siddiqSons, 'siddiqSons')
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
                devChild1="col-xl-7 col-lg-7 banDevPro"
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
                devChild1="col-md-7 col-sm-7 col-7 banDev1ProSmall"
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
                devChild1="col-md-7 col-sm-7 col-7 banDev1ProMb"
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


          {/*peraChld="childPera"
                banPera={banrPeragh}
                banPera1={banrPeragh1} */}

          <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

          <div className="d-none d-md-none d-lg-block d-xl-block col-xl-6 col-lg-6" style={{ marginTop: '21vw' }}>

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 LightFDesktop'
              projctHedng="GFAhedng"
              locationUrl={""}
              hed='LIGHT-F Project By'
              hed1='JICA & Sindh Gvt'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"

              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={jicaLightF}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 GetFitDesktop'
              projctHedng="Drenthedng"
              hed='GetFitAthletic Branding'
              hed1='Mobile App & Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={getFit}
            />

            <Founder />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 CircleDesktop'
              projctHedng="GFAhedng"
              hed='Circle Women Merch'
              hed1='Design'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={circleWomen}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 ZiyaratDesktop'
              projctHedng="Drenthedng"
              hed='Ziyarat Branding'
              hed1='Websites'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={ziyaratBrand}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DallasPalmDesktop'
              projctHedng="Drenthedng"
              hed='Dallas Palms'
              hed1='Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={dallasPalm}

            />

          </div>


          {/*ipad visible */}

          <div className="d-none d-md-block col-lg-none d-xl-none col-md-5" style={{ marginTop: '21vw' }}>
            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 LightFTablet'
              projctHedng="GFAhedng"
              hed='LIGHT-F Project By'
              hed1='JICA & Sindh Gvt'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={jicaLightF}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 GetFitTablet'
              projctHedng="Drenthedng"
              hed='GetFitAthletic Branding'
              hed1='Mobile App & Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={getFit}
            />

            <Founder />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 CircleTablet'
              projctHedng="GFAhedng"
              hed='Circle Women Merch'
              hed1='Design'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={circleWomen}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 ZiyaratTablet'
              projctHedng="Drenthedng"
              hed='Ziyarat Branding'
              hed1='Websites'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={ziyaratBrand}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DallasPalmTablet'
              projctHedng="Drenthedng"
              hed='Dallas Palms'
              hed1='Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={dallasPalm}
            />

          </div>

          {/*mobile visible */}

          <div className="d-block d-md-none d-lg-none d-xl-none col-11" style={{ marginTop: '21vw', marginLeft: '4.3vw' }}>

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 LightFMobiLe'
              projctHedng="GFAhedng"
              hed='LIGHT-F Project By'
              hed1='JICA & Sindh Gvt'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={jicaLightF}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 GetFitMobiLe'
              projctHedng="Drenthedng"
              hed='GetFitAthletic Branding'
              hed1='Mobile App & Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={getFit}
            />

            <Founder />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 CircleMobiLe'
              projctHedng="GFAhedng"
              hed='Circle Women Merch'
              hed1='Design'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={circleWomen}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 ZiyaratMobiLe'
              projctHedng="Drenthedng"
              hed='Ziyarat Branding'
              hed1='Websites'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={ziyaratBrand}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DallasPalmMobiLe'
              projctHedng="Drenthedng"
              hed='Dallas Palms'
              hed1='Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={dallasPalm}
            />

          </div>



          <div className="col-xl-5 col-lg-5 col-md-5 col-12 ">

            {/*mobile, ipad hidden*/}
            <ProjectContainer projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-9 col-lg-9 DrentDesktop'
              projctBox1="col-xl-1 col-lg-1 d-none d-sm-none d-md-none d-lg-block dxl-block"
              projctHedng="ADBhedng"
              hed="Drent Branding"
              hed1='& Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={drentBrand}
            />
            {/*ipad visible*/}
            <div className="row">
              <ProjectContainer projctBox='d-none d-sm-block d-md-block d-xl-none d-lg-none DrentTablet'
                projctHedng="ADBhedngSmMd"
                hed="Drent Branding"
                hed1='& Website'
                projctChildBox="col-xl-12 col-lg-12 col-md-12 col-11 ADB_BgChildMd"
                projctPera="ADBpera"
                locationUrl={""}
                seeAerro={devPeraImg}
                projctPera1="ADBpera1"
                pera='An ambitious willing to help people be healthy. We designed and developed a...'
                proAeroImg="ADBimg"
                ViewPro={ViewPro}
                projectData={drentBrand}
              />
            </div>
            {/*mobile visible*/}
            <div className="row">
              <ProjectContainer projctBox='d-block d-sm-none d-md-none d-xl-none d-lg-none col-11 DrentMobiLe'
                projctHedng="ADBhedngMb"
                hed="Drent Branding"
                hed1='& Website'
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-12 ADB_BgChildSmMd"
                projctPera="ADBpera"
                locationUrl={""}
                seeAerro={devPeraImg}
                projctPera1="ADBpera1"
                pera='An ambitious willing to help people be healthy. We designed and developed a...'
                proAeroImg="ADBimg"
                ViewPro={ViewPro}
                projectData={drentBrand}
              />
            </div>


            {/*mobile, ipad hidden*/}
            <ProjectContainer projctBox1="col-xl-1 col-lg-1 d-none d-sm-none d-md-none d-lg-block d-xl-block"
              projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-9 col-lg-9 ACFDesktopTab'
              projctHedng="ADBhedng"
              hed='ACF Animal'
              hed1='Rescue Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 DPW_BgChild"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={aCFRescue}
            />
            {/*ipad visible*/}
            <ProjectContainer projctBox='d-none d-md-block d-xl-none d-lg-none ACFDesktopTab'
              projctHedng="ADBhedngSmMd"
              hed='ACF Animal'
              hed1='Rescue Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-11 DPW_BgChildMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={aCFRescue}
            />
            {/*mobile visible*/}
            <ProjectContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 ACFMobiLe'
              projctHedng="ADBhedngSmMd"
              hed='ACF Animal'
              hed1='Rescue Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-12 DPW_BgChildSmMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={aCFRescue}
            />



            {/*mobile, ipad hidden*/}
            <ProjectContainer projctBox1="col-xl-1 col-lg-1 d-none d-sm-none d-md-none d-lg-block dxl-block"
              projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-9 col-lg-9 PakJazbaDesktopTab'
              projctHedng="ADBhedng"
              hed='Pakjazba Online'
              hed1='Portal System'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={pakJazba}
            />
            {/*ipad visible*/}
            <ProjectContainer projctBox='d-none d-md-block d-xl-none d-lg-none col-md-12 PakJazbaDesktopTab'
              projctHedng="ADBhedngSmMd"
              hed='Pakjazba Online'
              hed1='Portal System'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-11 ODW_BgChildMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={pakJazba}
            />
            {/*mobile visible*/}
            <ProjectContainer projctBox='d-block d-sm-none d-md-none d-xl-none d-lg-none col-11 PakJazbaMobiLe'
              projctHedng="ADBhedngSmMd"
              hed='Pakjazba Online'
              hed1='Portal System'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-12 ODW_BgChildSmMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={pakJazba}
            />



            {/*mobile, ipad hidden*/}
            <ProjectContainer projctBox1="col-xl-1 col-lg-1 d-none d-sm-none d-md-none d-lg-block dxl-block"
              projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-9 col-lg-9 OxbridgeDesktopTab'
              projctHedng="ADBhedng"
              hed='Oxbridge Video,'
              hed1='Social Media & Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={oxBridge}
            />
            {/*ipad visible*/}
            <ProjectContainer projctBox='d-none d-sm-block d-md-block d-xl-none d-lg-none col-md-12 OxbridgeDesktopTab'
              projctHedng="ADBhedngSmMd"
              hed='Oxbridge Video,'
              hed1='Social Media & Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-11 ODW_BgChildMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={oxBridge}
            />
            {/*mobile visible*/}
            <ProjectContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 OxbridgeMobiLe'
              projctHedng="ADBhedngSmMd"
              hed='Oxbridge Video,'
              hed1='Social Media & Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-12 ODW_BgChildSmMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='An ambitious willing to help people be healthy. We designed and developed a...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={oxBridge}
            />

          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12"></div>
        </div>


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