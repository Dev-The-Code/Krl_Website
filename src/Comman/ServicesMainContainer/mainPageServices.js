import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './mainPageServices.css';

class MainServices extends Component {
  constructor(props) {
    super(props);
    
  }
 
    render() {
      const {serviceH1, serviceH1text, marketBox, marketBox1, marketBox2, marketH1, marketH1text, marketBox3, marketPragph, marketPeraText, marketBox4,
      offerH5, offerH5text, offerPragph, offerPeraText, offerPeraText1, offerPeraText2,offerPeraText3, marketBox5, PeraAerroImg, peraAeroImg, LP_rightAeroImg,
      marketMobBox, marketMobBox1,}= this.props
      
      return (
        <div className="animatedup animatedFadeInUp fadeInUp">
          {/* mobile hidden */}
          <div className="d-none d-xl-block d-lg-block d-md-block">
            <div className="row">
              <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
              <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                  <h1 className={serviceH1}>{serviceH1text}</h1> {/* "hedngSir" Services */}
                  <div className={marketBox}>{/* "col-xl-11 col-lg-11 col-md-11 col-11 market" */}
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-1"></div>

                  <div className={marketBox1}>{/* "col-xl-12 col-lg-12 col-md-12 col-12 marketDev2" */}

                  <div className="row">
                    
                    <div className={marketBox2}>{/* "col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev" */}
                      <h1 className={marketH1}>{marketH1text}</h1>{/* "hedngMarket" Marketing */}
                    </div>
                    
                    <div className={marketBox3}>{/* "marketChildDev1" */}
                      <p className={marketPragph}>{/* "marketPera" */}
                        {marketPeraText}
                      </p>
                    </div>

                    <div className={marketBox4}>{/* "marketChildDev1" */}
                      <h5 className={offerH5}>{offerH5text}</h5>{/* "weOffer" Few services we offer*/}
                      <p className={offerPragph}>{offerPeraText}</p>{/* "offerPeras" -Social Media Marketing */}
                      <p className={offerPragph}>{offerPeraText1}</p>{/* "offerPeras" -Billboard Advertisement */}
                      <p className={offerPragph}>{offerPeraText2}</p>{/* "offerPeras" -Compaign Marketing*/}
                      <p className={offerPragph}>{offerPeraText3}</p>
                    </div>

                    <div className={marketBox5}>{/* "marketChildDev2" */}
                    <Link rel="noopener noreferrer" to={`/project`}  className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec" target='_blank'>
                        {PeraAerroImg ? <p className={peraAeroImg}>
                          View Project 
                          <img href="#" className={LP_rightAeroImg} src={require('../../Assets/Images/latest-post-arrow.png')} />
                        </p>
                        : null}
                      </a>{/* "peraAero" "LP_AeroImg"*/}
                      </Link>


                    </div>
                  </div>

                </div>

              </div>
              <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

            </div>
            </div>


            {/* mobile visible */}
            <div className="d-block d-xl-none d-lg-none d-md-none">
            <div className="col-xl-10 col-lg-10 col-md-10 col-12">
              <h1 className={serviceH1}>{serviceH1text}</h1> {/* "hedngSir" Services */}
               <div className={marketBox}>{/* "col-xl-11 col-lg-11 col-md-11 col-11 marketMob" */}
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-1"></div>

                <div className={marketBox1}>{/* "col-xl-12 col-lg-12 col-md-12 col-12 marketDev2" */}

                  <div className="row">
                    
                    <div className="col-12 marketChildDev">
                      <h1 className={marketH1}>{marketH1text}</h1>{/* "hedngMarket" Marketing */}
                    </div>
                    
                    <div className={marketMobBox}>{/* "marketChildDevMob1" */}
                      <p className={marketPragph}>{/* "marketPera" */}
                        {marketPeraText}
                      </p>
                      
                      <h5 className={offerH5}>{offerH5text}</h5>{/* "weOffer" Few services we offer*/}
                      <p className={offerPragph}>{offerPeraText}</p>{/* "offerPeras" -Social Media Marketing */}
                      <p className={offerPragph}>{offerPeraText1}</p>{/* "offerPeras" -Billboard Advertisement */}
                      <p className={offerPragph}>{offerPeraText2}</p>{/* "offerPeras" -Compaign Marketing*/}
                    </div>

                    

                    <div className={marketMobBox1}>{/* "marketChildDevMob2" */}
                    <Link rel="noopener noreferrer" to={`/project`}  className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec" target='_blank'>
                        {PeraAerroImg ? <p className={peraAeroImg}>
                          View Project 
                          <img href="#" className={LP_rightAeroImg} src={require('../../Assets/Images/latest-post-arrow.png')} />
                        </p>
                        : null}
                      </a>{/* "peraAero" "LP_AeroImg"*/}
                    </Link>
                    </div>
                  </div>

                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default MainServices;
