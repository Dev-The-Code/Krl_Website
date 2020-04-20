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
    if(data){
      let routName;
      routName = data.slice(1);
      routName = routName.charAt(0).toUpperCase() + routName.slice(1);
      this.setState({ headerPath: routName });
    }
    //  console.log(routName,'sss');
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
                  <div className="startupDev">
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
                  <div className="startupDev">
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
                  <div className="startupDev">
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
                  <div className="startupDev">
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
                  <div className="startupDev">
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
                  <div className="startupDev">
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
                  <div className="startupDev">
                    <p className="consultPeraMb">
                      We work with NGOs because there is nothing as fulfilling
                      as working towards the betterment of society and bringing
                      about substantial change.
                      </p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="develpImageStartMb">
                    <h3 className="consulHedngMb">
                      Startups
                      </h3>
                  </div>
                  <div className="startupDev">
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
                  <div className="startupDev">
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



