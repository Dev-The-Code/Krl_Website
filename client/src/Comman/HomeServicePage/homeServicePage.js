import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Components/ServicesPage/servicesPage.css';


class HomeServicesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      development: 'development',
      production: 'production',
      design: 'design',
      marketing: 'marketing',

      marketingBanner : 'marketing',

      ConsulHedng: 'Marketing',
      ConsulPeraas: 'With the power of empathy, transparent communication and honest dealing we work with you to help you find the right path to maximising the outcome your brand create.',
      dvelpmntHedng: 'Development',
      dvelpmntPeraas: 'Did you say photos and videos? Our producers are here with all their experience and expertise!',
      dsgnHedng: 'Design',
      dsgnPeraas: 'Our designers works hard to design delightful experiences that help you achieve business goals.',
      productionHedng: 'Production',
      devPeraImg: true,
      ViewPro: true,
    }
  }


  render() {

    const { marketing, production, design, development , developBanner, productionBanner, designBanner, marketingBanner } = this.state

    return (
      <div>


        {/*hidden ipad tablet mobile */}
        <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
          <div className="row">
            <div className="col-xl-1 col-lg-1"></div>

            <div className="col-xl-11 col-lg-11">
              <div className="row">
                <div className="col-xl-5 col-lg-5" style={{ paddingLeft: '0vw' }}>
                  <div className="consultImage">
                    <h3 className="consulHedng">
                      Marketing
                      </h3>
                  </div>
                  <div className="consultDev">
                    <p className="consultPera" style={{ marginBottom: '-10px' }}>
                      We stand by the triad of empathy, transparency and honest
                      dealing in order to help you find the right path to maximise
                      the success and outcome created by your brand.
                    </p>
                    <Link rel="noopener noreferrer"
                      to={{ 
                            pathname: `/projects`, 
                            state: marketing,
                          }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice">
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-7 col-lg-7" style={{ padding: '0vw' }}>
                  <div className="row">
                    <div className="col-xl-5 col-lg-5" style={{ padding: '0vw' }}>
                      <div className="develpImage">
                        <h3 className="devlpHedng">
                          Development
                          </h3>
                      </div>
                      <div className="developmentDev">
                        <p className="developmentPera" style={{ marginBottom: '-10px' }}>
                          Our developers are up-to-date with the latest and cutting-edge
                          technologies being used today and do not shy away from using
                          them to provide efficient solutions for your brand.
                          </p>
                        <Link rel="noopener noreferrer"
                          to={{ pathname: `/projects`, state: development }}
                          className="changingdec">
                          <a href={this.props.locationUrl} className="changingdec">
                            <p className="ArrowHomeSErviceDev">
                              View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                            </p>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-1 col-lg-1"></div>

                    <div className="col-xl-5 col-lg-5" style={{ padding: '0vw' }}>
                      <div className="designImage">
                        <h3 className="designHedng" style={{ paddingTop: '3.1vw', paddingLeft: '3.1vw', fontSize: '1.2vmax', color: 'white', fontFamily: 'aleta-bold' }}>
                          Design
                          </h3>
                      </div>
                      <div className="designDev">
                        <p className="designPera" style={{ marginBottom: '-10px' }}>
                          Our designers work diligently to create immersive experiences
                           that help you achieve your business goals.
                          </p>
                        <Link rel="noopener noreferrer"
                          to={{ pathname: `/projects`, state: design }}
                          className="changingdec">
                          <a href={this.props.locationUrl} className="changingdec">
                            <p className="ArrowHomeSErvice">
                              View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                            </p>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-1 col-lg-1"></div>

                  </div>
                </div>

                <div className="col-xl-5 col-lg-5">

                </div>

                <div className="col-xl-7 col-lg-7" style={{ padding: '0vw' }}>
                  <div className="row">
                    <div className="col-xl-5 col-lg-5" style={{ padding: '0vw' }}>
                      <div className="productionImage">
                        <h3 className="devlpHedng">
                          Production
                          </h3>
                      </div>
                      <div className="developmentDev">
                        <p className="developmentPera" style={{ marginBottom: '-10px' }}>
                          Did you say photos and videos? Our producers have got
                          you covered with their expertise and their eye for great lighting.
                          </p>
                        <Link rel="noopener noreferrer"
                          to={{ pathname: `/projects`, state: production }}
                          className="changingdec">
                          <a href={this.props.locationUrl} className="changingdec">
                            <p className="ArrowHomeSErvice">
                              View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                            </p>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-1 col-lg-1"></div>
                    <Link to={`/services`}>
                      <div className="col-xl-5 col-lg-5" style={{ padding: '0vw' }}>
                        <div className="blankDesign">
                          <p className="blankperaimg1">Learn more
                          <img href="#" className="ADBimg" src={require('../../Assets/Images/arrowPurple.png')} /></p>
                        </div>
                        <div className="">

                        </div>
                      </div>
                    </Link>

                    <div className="col-xl-1 col-lg-1"></div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/*visible ipad tablet and mobile hidden */}
        <div className="d-none d-sm-block d-md-block d-lg-none d-xl-none">
          <div className="row">
            <div className="col-md-1 col-sm-1 col-12"></div>

            <div className="col-md-11 col-sm-11 col-12">
              <div className="row">

                <div className="col-md-6 col-sm-6 col-12" style={{ paddingLeft: '0vw' }}>
                  <div className="consultImageSm">
                    <h3 className="consulHedngSm">
                      Marketing
                      </h3>
                  </div>
                  <div className="consultDevSm" style={{ height: 'auto' }}>
                    <p className="consultPeraSm" style={{ paddingBottom: '0' }}>
                      We stand by the triad of empathy, transparency and honest
                      dealing in order to help you find the right path to maximise
                      the success and outcome created by your brand.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ 
                            pathname: `/projects`, 
                            state:
                              marketing,
                          }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice">
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-12">
                  <div className="develpImageSm">
                    <h3 className="develpHedngSm">
                      Development
                      </h3>
                  </div>
                  <div className="develpDevSm">
                    <p className="develpPera" style={{ paddingBottom: '0' }}>
                      ` Our developers are up-to-date with the latest and cutting-edge
                         technologies being used today and do not shy away from using
                         them to provide efficient solutions for your brand.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/projects`, state: development }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErviceDev">
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-12" style={{ paddingLeft: '0vw' }}>
                  <div className="designImageSm">
                    <h3 className="designHedng">
                      Design
                      </h3>
                  </div>
                  <div className="designDevSm">
                    <p className="developmentPeraSm" style={{ paddingBottom: '0' }}>
                      Our designers work diligently to create immersive experiences
                      that help you achieve your business goals.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/projects`, state: design }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice">
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-12">
                  <div className="productionImageSm">
                    <h3 className="designHedng">
                      Production
                      </h3>
                  </div>
                  <div className="designDevSm">
                    <p className="developmentPeraSm" style={{ paddingBottom: '0' }}>
                      Did you say photos and videos? Our producers have got
                      you covered with their expertise and their eye for great lighting.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/projects`, state: production }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice">
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <Link to={`/services`}>
                  <div className="col-md-12 col-sm-12" style={{ paddingLeft: '0vw' }}>
                    <div className="blankDesignSm" style={{ backgroundColor: '#f7f7f7' }}>
                      <p className="blankperaimgMd1">Learn more
                            <img href="#" className="ADBimg" src={require('../../Assets/Images/arrowPurple.png')} /></p>
                    </div>
                    <div className="">
                    </div>
                  </div>
                </Link>
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
                  <div className="consultImageMb">
                    <h3 className="consulHedngMb">
                      Marketing
                      </h3>
                  </div>
                  <div className="consultDevMb">
                    <p className="consultPeraMb" style={{ paddingBottom: '0' }}>
                      We stand by the triad of empathy, transparency and honest
                      dealing in order to help you find the right path to maximise
                      the success and outcome created by your brand.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ 
                            pathname: `/projects`, 
                            state:
                              marketing,
                          }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0', paddingLeft: '7.5vw' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-12">
                  <div className="develpImageMb">
                    <h3 className="develpHedngMb">
                      Development
                      </h3>
                  </div>
                  <div className="develpDevMb">
                    <p className="develpPeraMb" style={{ paddingBottom: '0' }}>
                      Our developers are up-to-date with the latest and cutting-edge
                       technologies being used today and do not shy away from using
                       them to provide efficient solutions for your brand.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/projects`, state: development }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErviceDev" style={{ paddingTop: '0', paddingLeft: '7.5vw' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>


                <div className="col-12">
                  <div className="designImageMb">
                    <h3 className="develpHedngMb">
                      Design
                      </h3>
                  </div>
                  <div className="develpDevMb">
                    <p className="develpPeraMb" style={{ paddingBottom: '0' }}>
                      Our designers work diligently to create immersive experiences
                           that help you achieve your business goals.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/projects`, state: design }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0', paddingLeft: '7.5vw' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-12">
                  <div className="productionImageMb">
                    <h3 className="develpHedngMb">
                      Production
                      </h3>
                  </div>
                  <div className="develpDevMb">
                    <p className="develpPeraMb" style={{ paddingBottom: '0' }}>
                      Did you say photos and videos? Our producers have got
                      you covered with their expertise and their eye for great lighting.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/projects`, state: production }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0', paddingLeft: '7.5vw' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <Link to={`/services`}>
                  <div className="col-12">
                    <div className="blankDesignMb">
                      <p className="blankperaimgMb1">Learn more
                          <img href="#" className="ADBimg" src={require('../../Assets/Images/arrowPurple.png')} /></p>
                    </div>
                    <div className="develpDevMb">

                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>




        {/* hidden xs sm md  */}


        {/*<div className="col-xl-4 col-lg-4 d-none d-sm-none d-md-none d-lg-block d-xl-block">{ col-md-12 col-sm-12 col-12 }
                  <ProjectContainer 
                    projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 consul_BgImg'
                    projctHedng="servis_hedng" 
                    hed={ConsulHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={ConsulPeraas} 
                  />
                </div>*/}


        {/* visible xs sm md  */}


        {/*<div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">{ col-md-12 col-sm-12 col-12 }
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 consul_BgImgSmMd'
                    projctHedng="servis_hedng" 
                    hed={ConsulHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                    projctPera="servisPera"
                    pera={ConsulPeraas} 
                  />
                </div>
                <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>*/}


        {/* hidden xs sm md  */}

        {/*<div className="col-xl-3 col-lg-3 d-xl-block d-lg-block d-none d-sm-none d-md-none ">{ col-md-12 col-sm-12 col-12 }
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 devlop_BgImg'
                    projctHedng="servis_hedng" 
                    hed={dvelpmntHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 prodctn_BgImg'
                    projctHedng="servis_hedng" 
                    hed={productionHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                </div>*/}

        {/* visible xs sm md  */}


        {/*<div className="d-xl-none d-lg-none d-block d-sm-block d-md-block ">{ col-md-12 col-sm-12 col-12 }
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-10 devlop_BgImgSmMd'
                    projctHedng="servis_hedng" 
                    hed={dvelpmntHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-10 HomeProdctn_BgImg'
                    projctHedng="servis_hedng" 
                    hed={productionHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                </div>
                <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>*/}

        {/* hidden xs sm md  */}


        {/* <div className="col-xl-3 col-lg-3 d-none d-sm-none d-md-none d-lg-block d-xl-block">{ col-md-12 col-sm-12 col-12}
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 desgn_BgImg'
                    projctHedng="servis_hedng" 
                    hed={dsgnHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={dsgnPeraas} 
                    
                  />

                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 blnkColr'
                    projctPera="servisPera"
                    seeAerro= {true}
                    projctPera1="ADBpera1"
                    ViewPro='View our work.'
                    pera={DPWperaas}
                    proAeroImg="ADBimg"
                  />

                </div>*/}


        {/* visible xs sm md  */}


        {/*<div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">{ col-md-12 col-sm-12 col-12}
                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 desgn_BgImgSmMd'
                   projctHedng="servis_hedng" 
                   hed={dsgnHedng} 
                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                   projctPera="servisPera"
                   pera={dsgnPeraas} 
                   
                 />

                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 blnkColr'
                   projctPera="servisPera"
                   seeAerro= {devPeraImg}
                   projctPera1="ADBpera1"
                   pera={DPWperaas}
                   ViewPro='View our work.'
                   proAeroImg="ADBimg"
                />

                </div>*/}
        {/* </div>
             </div>*/}
        {/*<div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default HomeServicesPage;
