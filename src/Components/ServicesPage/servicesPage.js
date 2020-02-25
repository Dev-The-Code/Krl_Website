import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './servicesPage.css';
import Header2 from '../Header/header2';
import Services from '../About/Services/services';
import SomeOurClients from '../../Comman/SomeOurClients/someOurClient';
import Founders2 from '../../Comman/Founders/founders2';
import SeeProject from '../ContactPage/SeeProject/seeProject';
import MainServicesPage from '../ServicesPage/mainService';
import Servicebanner from './ServiceBanner/serviceBanner';
import Mainservice from './mainService';
import InterShipProgramer from '../../Comman/InterShipProgramers/interShipPogramer';

import ProjectContainer from '../../Comman/ProjectContainer/projectContainer';
import Banners from '../ServicesPage/banners'

class ServicesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      ConsulHedng: 'Consultation',
      ConsulPeraas: 'With the power of empathy, transparent communication and honest dealing we work with you to help you find the right path to maximising the outcome your brand create.',
      dvelpmntHedng: 'Development',
      dvelpmntPeraas: 'Did you say photos and videos? Our producers are here with all their experience and expertise!',
      dsgnHedng: 'Design',
      dsgnPeraas: 'Our designers works hard to design delightful experiences that help you achieve business goals.',
      productionHedng: 'Production',
      banrPeragh: 'KRL Creatives covers you for all digital assets your brand needs to serve your audience well.',
      banrPeragh1: 'We design, develop and produce.',
      headingpera: 'We have go',
      headingpera1: 't you',
      headingpera2: ' all covered.',

      devPeraImg: false,
      devParagraph: true,
      headerPath: '',
      sassLess: true,
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

    // setTimeout(() => {
    //   this.setState({ sassLess: false });
    // }, 4000);
  }

  render() {
    const { ConsulHedng, ConsulPeraas, dvelpmntHedng, dvelpmntPeraas, dsgnHedng, dsgnPeraas, productionHedng, devPeraImg, GFAperaas, DPWperaas,
      banrPeragh, banrPeragh1, headingpera, headingpera1, headingpera2, devParagraph, headerPath } = this.state
    // console.log(headerPath,'ssss');
    return (
      <div className='all_backgrundImageAfter animateFadeIn'>
        <Header2 headerPath={headerPath} headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" />
        <Servicebanner /><br /><br /><br />
        {/* <div className="row">
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-12 col-md-11 col-lg-11 col-xl-11">
            <h1 className="headServicess">Services</h1>
          </div>
        </div> */}
        <MainServicesPage />


        <div className="row">
          <div className="col-md-1 col-xl-1 col-lg-1"></div>
          <div className="col-10 col-md-10 col-xl-10 col-lg-10">
            <h1 className="heaD_font" style={{ marginBottom: '10px' }}>We Work With</h1>
          </div>
          <div className="col-1 col-md-1 col-xl-1 col-lg-1"></div>
        </div>

        {/* home service ka page he ye */}
        <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
          <div className="row" style={{ marginBottom: '10vw' }}>
            <div className="col-xl-1 col-lg-1"></div>

            <div className="col-xl-11 col-lg-11">
              <div className="row">
                <div className="col-xl-3 col-lg-3" style={{ paddingLeft: '0vw' }}>
                  <div className="nonProfitImage">
                    <h3 className="consulHedng">
                      Non Profits
                      </h3>
                  </div>
                  <div className="nonProfitDev">
                    <p className="consultPera">
                      We work with NGOs because there is nothing as fulfilling
                      as working towards the betterment of society and bringing
                      about substantial change.
                    </p>
                  </div>
                </div>
                <div className="col-xl-1 col-lg-1"></div>



                <div className="col-xl-3 col-lg-3" style={{ padding: '0vw' }}>
                  <div className="develpImageStart">
                    <h3 className="devlpHedng">
                      Startups
                      </h3>
                  </div>
                  <div className="developmentDev">
                    <p className="developmentPera">
                      The struggles faced by startups are closer to
                      home than you would believe. We understand that
                      any form of help can go a long way and contribute
                      to their growth.
                    </p>
                  </div>
                </div>

                <div className="col-xl-1 col-lg-1"></div>

                <div className="col-xl-3 col-lg-3" style={{ padding: '0vw' }}>
                  <div className="ServiceImageEnterprise">
                    <h3 className="designHedng" style={{ paddingTop: '3.1vw', paddingLeft: '3.1vw', fontSize: '1.2vmax', color: 'white', fontFamily: 'aleta-bold' }}>
                      Enterprises
                      </h3>
                  </div>
                  <div className="designDev">
                    <p className="designPera">
                      We take on live projects with industry giants in
                      order to work with outstanding brands and outstanding
                      people to deliver sustainable growth to their businesses.
                    </p>
                  </div>
                </div>

                <div className="col-xl-1 col-lg-1"></div>

              </div>
            </div>
          </div>
        </div>



        {/*visible ipad tablet */}
        <div className="d-none d-sm-block d-md-block d-lg-none d-xl-none">
          <div className="row">
            <div className="col-md-1 col-sm-1 col-12"></div>

            <div className="col-md-11 col-sm-11 col-12">
              <div className="row">

                <div className="col-md-6 col-sm-6 col-12" style={{ paddingLeft: '0vw' }}>
                  <div className="nonProfitImageTablet">
                    <h3 className="consulHedngSm">
                      Non Profits
                      </h3>
                  </div>
                  <div className="consultDevSm">
                    <p className="consultPeraSm">
                      We work with NGOs because there is nothing as fulfilling
                      as working towards the betterment of society and bringing
                      about substantial change.
                      </p>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-12">
                  <div className="develpImageStartSm">
                    <h3 className="develpHedngSm">
                      Startups
                      </h3>
                  </div>
                  <div className="develpDevSm">
                    <p className="develpPera">
                      The struggles faced by startups are closer to
                      home than you would believe. We understand that
                      any form of help can go a long way and contribute
                      to their growth.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-12" style={{ paddingLeft: '0vw' }}>
                  <div className="ServiceImageEnterpriseSm">
                    <h3 className="designHedng">
                      Enterprises
                      </h3>
                  </div>
                  <div className="designDevSm">
                    <p className="developmentPeraSm">
                      We take on live projects with industry giants in
                      order to work with outstanding brands and outstanding
                      people to deliver sustainable growth to their businesses.
                      </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>



        {/*visible mobile */}
        <div className="d-block d-sm-none d-md-none d-lg-none d-xl-none">
          <div className="row">
            <div className="col-md-1 col-sm-1 col-12"></div>

            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="nonProfitImageMobile">
                    <h3 className="consulHedngMb">
                      Non Profits
                      </h3>
                  </div>
                  <div className="consultDevMb">
                    <p className="consultPeraMb">
                      We work with NGOs because there is nothing as fulfilling
                      as working towards the betterment of society and bringing
                      about substantial change.
                      </p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="develpImageStartMb">
                    <h3 className="develpHedngMb">
                      Startups
                      </h3>
                  </div>
                  <div className="develpDevMb">
                    <p className="develpPeraMb">
                      The struggles faced by startups are closer to
                      home than you would believe. We understand that
                      any form of help can go a long way and contribute
                      to their growth.
                    </p>
                  </div>
                </div>


                <div className="col-12">
                  <div className="ServiceImageEnterpriseMb">
                    <h3 className="develpHedngMb">
                      Enterprises
                      </h3>
                  </div>
                  <div className="develpDevMb">
                    <p className="develpPeraMb">
                      We take on live projects with industry giants in
                      order to work with outstanding brands and outstanding
                      people to deliver sustainable growth to their businesses.
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>



        {/* yahan khatam */}

        <InterShipProgramer />


        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 bgColr">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-1 col-sm-4 col-2"></div>
              <div className="col-xl-10 col-lg-10 col-md-11 col-sm-8 col-10">
                <SomeOurClients />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <Founders2 />
          </div>
        </div>
        <Link to={`/contact`} className="changingColor">
          <div className="row fotBgColr">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12"></div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              <SeeProject se_Text="seProFotr_text"
                se_Text1="largeProFotr_text"
                roWalign='row ReW_SerVice'
                seeText="Lets create something awesome together!"
                lrgText="Send a request "
                lgBrText=""
                arrow_Right="arrowRight1_aboUt"
              />
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12"></div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ServicesPage;

// <div className="col-xl-12 col-lg-12 d-none d-sm-none d-md-none d-xl-block d-lg-block">
//                 <Banners
//                   banrs="row ban"
//                   devChld="col-xl-5 col-lg-5 banDev"
//                   hedPera="banServiceHedng"
//                   banhedng={headingpera}
//                   hedPera1="banServiceHedng1"
//                   banhedng1={headingpera2}
//                   devChild1="col-xl-7 col-lg-7 banDev1"
//                   hedPera2="banServiceHedng2"
//                   banhedng2={headingpera1}
//                   devChld1="col-xl-12 col-lg-12 banChildDev"
//                   devChld2="col-xl-12 col-lg-12 banServiceChildDev1"

//                   BanParagraph={true}
//                   peraChld1="peraChild1"
//                   peraChld2="peraChild2"

//                   banPera2={banrPeragh}
//                   banPera3={banrPeragh1}
//                   devChld3="col-xl-12 col-lg-12 banChildDev2"
//                 />
//               </div>

//               <div className="col-12 col-md-12 col-sm-12 d-lg-none d-xl-none">
//                 <Banners
//                   banrs="row banSmall"
//                   devChld="col-md-5 col-sm-5 col-5 banDevSmall"
//                   hedPera="banServiceHedngSmall"
//                   banhedng={headingpera}
//                   hedPera1="banServiceHedng1Small"
//                   banhedng1={headingpera2}
//                   devChild1="col-md-7 col-sm-7 col-7 banDev1Small"
//                   hedPera2="banServiceHedng2Small"
//                   banhedng2={headingpera1}
//                   devChld1="col-md-12 col-sm-12 col-12 banChildDevSmall"
//                   devChld2="col-md-12 col-sm-12 col-12 banServiceChildDev1Small"
//                   BanParagraph={true}
//                   peraChld1="peraChild1"
//                   peraChld2="peraChild2"
//                   banPera2={banrPeragh}
//                   banPera3={banrPeragh1}
//                   devChld3="col-md-12 col-sm-12 col-12 banChildDev2Small"
//                 />
//               </div>












// <div className="row" style={{ marginTop: '21vw' }}>
//               <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                 <h1 className="srvsHedng" style={{ fontSize: '3.vmax', fontFamily: 'aletaextrabold', color: '#303030', paddingBottom: '4.2vw' }}>Services</h1>
//               </div>

//               {/* hidden xs sm md  */}
//               <div className="col-xl-4 col-lg-4 d-none d-sm-none d-md-none d-lg-block d-xl-block">{/* col-md-12 col-sm-12 col-12 */}
//                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 consul_BgImg'
//                   projctHedng="servis_hedng"
//                   hed={ConsulHedng}
//                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
//                   projctPera="servisPera"
//                   pera={ConsulPeraas}
//                 />
//               </div>

//               {/* visible xs sm md  */}
//               <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">{/* col-md-12 col-sm-12 col-12 */}

//                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 consul_BgImgSmMd'
//                   projctHedng="servis_hedng"
//                   hed={ConsulHedng}
//                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChildSmMd"
//                   projctPera="servisPera"
//                   pera={ConsulPeraas}
//                 />
//               </div>

//               <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>

//               {/* hidden xs sm md  */}
//               <div className="col-xl-3 col-lg-3 d-xl-block d-lg-block d-none d-sm-none d-md-none ">{/* col-md-12 col-sm-12 col-12 */}
//                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 devlop_BgImg'
//                   projctHedng="servis_hedng"
//                   hed={dvelpmntHedng}
//                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
//                   projctPera="servisPera"
//                   pera={dvelpmntPeraas}
//                 />

//                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 prodctn_BgImg'
//                   projctHedng="servis_hedng"
//                   hed={productionHedng}
//                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
//                   projctPera="servisPera"
//                   pera={dvelpmntPeraas}
//                 />
//               </div>
//               {/* visible xs sm md  */}
//               <div className="d-xl-none d-lg-none d-block d-sm-block d-md-block ">{/* col-md-12 col-sm-12 col-12 */}
//                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 devlop_BgImgSmMd'
//                   projctHedng="servis_hedng"
//                   hed={dvelpmntHedng}
//                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChildSmMd"
//                   projctPera="servisPera"
//                   pera={dvelpmntPeraas}

//                 />
//                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 prodctn_BgImgSmMd'
//                   projctHedng="servis_hedng"
//                   hed={productionHedng}
//                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChildSmMd"
//                   projctPera="servisPera"
//                   pera={dvelpmntPeraas}

//                 />
//               </div>
//               <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>

//               {/* hidden xs sm md  */}
//               <div className="col-xl-3 col-lg-3 d-none d-sm-none d-md-none d-lg-block d-xl-block">{/* col-md-12 col-sm-12 col-12*/}
//                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 desgn_BgImg'
//                   projctHedng="servis_hedng"
//                   hed={dsgnHedng}
//                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
//                   projctPera="servisPera"
//                   pera={dsgnPeraas}
//                 />

//                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 blnkColr'
//                   projctPera="servisPera"
//                   seeAerro={true}
//                   projctPera1="ADBpera1"
//                   ViewPro='View our work.'
//                   pera={DPWperaas}
//                   proAeroImg="ADBimg"
//                 />

//               </div>

//               {/* visible xs sm md  */}
//               <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">{/* col-md-12 col-sm-12 col-12*/}
//                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-10 desgn_BgImgSmMd'
//                   projctHedng="servis_hedng"
//                   hed={dsgnHedng}
//                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChildSmMd"
//                   projctPera="servisPera"
//                   pera={dsgnPeraas}
//                 />

//                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 blnkColr'
//                   projctPera="servisPera"
//                   seeAerro={true}
//                   projctPera1="ADBpera1"
//                   pera={DPWperaas}
//                   ViewPro='View our work.'
//                   proAeroImg="ADBimg"
//                 />

//               </div>
//             </div>



