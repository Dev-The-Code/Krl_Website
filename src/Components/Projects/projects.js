import React, { Component } from 'react';
import './projects.css';
import Header2 from '../Header/header2';
import ProjectContainer from '../../Comman/ProjectContainer/projectContainer';
import SeeProject from '../ContactPage/SeeProject/seeProject';
import Founder from '../../Comman/Founders/founders';
import Banners from '../ServicesPage/banners';
import { smart } from '@babel/template';

class Projects extends React.Component {

    constructor(props){
      super(props);
      this.state={

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
      banrPeragh: 'KRL Creatives covers you for all digital assets your brand needs to serve your audience well.',
      banrPeragh1: 'We design, develop and produce.',
      headingpera: 'ACF Animal ',
      headingpera1: 'Rescue',
      headingpera2: ' Mobile App.',
      banFuturPro: 'Featured project',


      devPeraImg: true,
      devParagraph: false,
      }
    }
 
    render() {
      const {GFAHeading, GFAHeadingBr, DrentHeading, DrentHeadingBr, GFAperaas, Drentperaas, ADBHeading, ADBHeadingBr,
        DPWHeading, DPWHeadingBr, DPWperaas, ODSHeading, ODSHeadingBr, devPeraImg, banrPeragh, banrPeragh1, headingpera, headingpera1,
        headingpera2, banFuturPro}= this.state
      return (
        
        <div>
            <Header2 />
          <div className="row">
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
            {/*hidden mobile tablet ipad */}
            <div className="col-xl-12 col-lg-12 d-none d-sm-none d-md-none d-xl-block d-lg-block">
              <Banners
                banrs="row ban"
                devChld="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 banDev"
                peraChld="banPera"
                banPera={banFuturPro}
                hedPera="banHedng"
                banhedng={headingpera}
                hedPera1="banHedng1"
                banhedng1={headingpera2}
                devChild1="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 banDevPro"
                banPera1="banPera1"
                hedPera2="banHedng2"
                banhedng2={headingpera1}
                devChld1="col-xl-8 col-lg-7 col-md-5 col-sm-5 col-5 banChildDev"
                devChld2="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 banChildDev1"
                seeAerro= {devPeraImg}
                projctPera1="BanrPera1"
                pera={GFAperaas} 
                proAeroImg="BanPeraimg"
                
                devChld3="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 banChildDev2"
              />
            </div>
          
            <div className="col-12 col-md-12 col-sm-12 d-lg-none d-xl-none">
              <Banners
                banrs="row banSmall"
                devChld="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 banDevSmall"
                peraChld="banPeraSmall"
                banPera={banFuturPro}
                hedPera="banHedngSmall"
                banhedng={headingpera}
                hedPera1="banHedng1Small"
                banhedng1={headingpera2}
                devChild1="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 banDev1ProSmall"
                banPera1="banPera1Small"
                hedPera2="banHedng2Small"
                banhedng2={headingpera1}
                devChld1="col-xl-7 col-lg-7 col-md-5 col-sm-5 col-3 banChildDevSmall"
                devChld2="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8 banChildDev1Small"
                
                seeAerro= {devPeraImg}
                projctPera1="BanrPera1"
                pera={GFAperaas} 
                proAeroImg="BanPeraimg"
                devChld3="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 banChildDev2Small"
              />
            </div>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
            
              
              {/*peraChld="childPera"
                banPera={banrPeragh}
                banPera1={banrPeragh1} */}

            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
            
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style={{marginTop: '21vw'}}>

              <ProjectContainer projctBox='col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 GFA_BgImg'
                projctHedng="GFAhedng" 
                hed={GFAHeading} 
                hed1={GFAHeadingBr}
                projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                projctPera="GFApera"

                seeAerro= {devPeraImg}
                projctPera1="GFApera1"
                pera={GFAperaas} 
                proAeroImg="GFAimg"  />

              <ProjectContainer projctBox='col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 DrentBgImg' 
                projctHedng="Drenthedng"
                hed={DrentHeading}
                hed1={DrentHeadingBr}
                projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                projctPera="GFApera"

                seeAerro= {devPeraImg}
                projctPera1="GFApera1"
                pera={Drentperaas}
                proAeroImg="GFAimg" />

                <Founder />
              
                <ProjectContainer projctBox='col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 GFA_BgImg'
                projctHedng="GFAhedng" 
                hed={GFAHeading} 
                hed1={GFAHeadingBr}
                projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                projctPera="GFApera"
                
                seeAerro= {devPeraImg}
                projctPera1="GFApera1"
                pera={GFAperaas} 
                proAeroImg="GFAimg"/>

                <ProjectContainer projctBox='col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 DrentBgImg' 
                projctHedng="Drenthedng"
                hed={DrentHeading}
                hed1={DrentHeadingBr}
                projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                projctPera="GFApera"
                
                seeAerro= {devPeraImg}
                projctPera1="GFApera1"
                pera={Drentperaas}
                proAeroImg="GFAimg" />

                <ProjectContainer projctBox='col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 DrentBgImg' 
                projctHedng="Drenthedng"
                hed={DrentHeading}
                hed1={DrentHeadingBr}
                projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                projctPera="GFApera"
                
                seeAerro= {devPeraImg}
                projctPera1="GFApera1"
                pera={Drentperaas}
                proAeroImg="GFAimg" />

            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            
              {/*mobile, ipad hidden*/}
              <ProjectContainer projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-10 col-lg-10 ADB_BgImg' 
                projctHedng="ADBhedng"
                hed={ADBHeading}
                hed1={ADBHeadingBr}
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
                projctPera="ADBpera"
                
                seeAerro= {devPeraImg}
                projctPera1="ADBpera1"
                pera={Drentperaas}
                proAeroImg="ADBimg"
                />

                {/*mobile, ipad visible*/}
                <ProjectContainer projctBox='d-block d-sm-block d-md-block d-xl-none d-lg-none ADB_BgImgSmMd' 
                projctHedng="ADBhedng"
                hed={ADBHeading}
                hed1={ADBHeadingBr}
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChildSmMd"
                projctPera="ADBpera"
                
                seeAerro= {devPeraImg}
                projctPera1="ADBpera1"
                pera={Drentperaas}
                proAeroImg="ADBimg"
                />

                {/*mobile, ipad hidden*/}
                <ProjectContainer projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-10 col-lg-10 DPW_BgImg' 
                projctHedng="ADBhedng"
                hed={DPWHeading}
                hed1={DPWHeadingBr}
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 DPW_BgChild"
                projctPera="ADBpera"
                
                seeAerro= {devPeraImg}
                projctPera1="ADBpera1"
                pera={DPWperaas}
                proAeroImg="ADBimg"
                />
                {/*mobile, ipad visible*/}
                <ProjectContainer projctBox='d-block d-sm-block d-md-block d-xl-none d-lg-none DPW_BgImg' 
                projctHedng="ADBhedng"
                hed={DPWHeading}
                hed1={DPWHeadingBr}
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 DPW_BgChildSmMd"
                projctPera="ADBpera"
                
                seeAerro= {devPeraImg}
                projctPera1="ADBpera1"
                pera={DPWperaas}
                proAeroImg="ADBimg"
                />

                {/*mobile, ipad hidden*/}
                <ProjectContainer projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-10 col-lg-10 ODW_BgImg' 
                projctHedng="ADBhedng"
                hed={ODSHeading}
                hed1={ODSHeadingBr}
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
                projctPera="ADBpera"
                
                seeAerro= {devPeraImg}
                projctPera1="ADBpera1"
                pera={DPWperaas}
                proAeroImg="ADBimg"
                />
                {/*mobile, ipad visible*/}
                <ProjectContainer projctBox='d-block d-sm-block d-md-block d-xl-none d-lg-none ODW_BgImg' 
                projctHedng="ADBhedng"
                hed={ODSHeading}
                hed1={ODSHeadingBr}
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ODW_BgChildSmMd"
                projctPera="ADBpera"
                
                seeAerro= {devPeraImg}
                projctPera1="ADBpera1"
                pera={DPWperaas}
                proAeroImg="ADBimg"
                />

                {/*mobile, ipad hidden*/}
                <ProjectContainer projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-10 col-lg-10 ODW_BgImg' 
                projctHedng="ADBhedng"
                hed={ODSHeading}
                hed1={ODSHeadingBr}
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
                projctPera="ADBpera"
                
                seeAerro= {devPeraImg}
                projctPera1="ADBpera1"
                pera={DPWperaas}
                proAeroImg="ADBimg"
                />
                {/*mobile, ipad visible*/}
                <ProjectContainer projctBox='d-block d-sm-block d-md-block d-xl-none d-lg-none ODW_BgImg' 
                projctHedng="ADBhedng"
                hed={ODSHeading}
                hed1={ODSHeadingBr}
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ODW_BgChildSmMd"
                projctPera="ADBpera"
                
                seeAerro= {devPeraImg}
                projctPera1="ADBpera1"
                pera={DPWperaas}
                proAeroImg="ADBimg"
                />

                {/*mobile, ipad hidden*/}
                <ProjectContainer projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-10 col-lg-10 ODW_BgImg' 
                projctHedng="ADBhedng"
                hed={ODSHeading}
                hed1={ODSHeadingBr}
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
                projctPera="ADBpera"
                
                seeAerro= {devPeraImg}
                projctPera1="ADBpera1"
                pera={DPWperaas}
                proAeroImg="ADBimg"
                />
                {/*mobile, ipad visible*/}
                <ProjectContainer projctBox='d-block d-sm-block d-md-block d-xl-none d-lg-none ODW_BgImg' 
                projctHedng="ADBhedng"
                hed={ODSHeading}
                hed1={ODSHeadingBr}
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ODW_BgChildSmMd"
                projctPera="ADBpera"
                
                seeAerro= {devPeraImg}
                projctPera1="ADBpera1"
                pera={DPWperaas}
                proAeroImg="ADBimg"
                />
            
              
            
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12"></div>
          </div>

          {/*<SeeProject 
          seeBckColr="proSeeFotr"
          colSetText=""/>*/}

          <div className="row proSeeFotr">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2"></div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">{/*seeBckColr="proSeeFotr" ye class or css use hogi*/}
              <SeeProject  se_Text="seProFotr_text" se_Text1="largeProFotr_text" seeText="Like what you see?" lrgText="Send a request "
                                                     lgBrText="" arrow_Right="arrowRight1" /> 
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12"></div>
          </div>

          

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