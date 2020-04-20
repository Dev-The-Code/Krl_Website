import React, { Component } from 'react';
import './someOurClients.css';


class SomeOurClients extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="row sOClients d-md-none d-lg-block">
          <div className="col-xl-12 col-lg-12 col-md-9 col-11">
            <h3 className="clients">Some of our clients</h3>
          </div>
        </div>
        <div className="d-none d-sm-block d-md-none d-lg-block">
          <div className="row" style={{marginLeft: '-2vw'}}>
            <div className="col-xl-10 col-lg-10  col-sm-10 ">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-sm-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                    <div className="col-xl-10 col-lg-10  col-sm-10  sindhGove">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                    <div className="col-xl-10 col-lg-10  col-sm-10  jicaLightF">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-sm-1"></div>
          </div>

          <div className="row" style={{marginLeft: '-2vw'}}>
            <div className="col-xl-10 col-lg-10  col-sm-10 ">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-sm-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                    <div className="col-xl-10 col-lg-10  col-sm-10  acfLog">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                    <div className="col-xl-10 col-lg-10  col-sm-10  siddiqSons">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-sm-1"></div>
          </div>

          <div className="row" style={{marginLeft: '-2vw'}}>
            <div className="col-xl-10 col-lg-10  col-sm-10 ">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-sm-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                    <div className="col-xl-10 col-lg-10  col-sm-10  circleLog">
                      {/* image background */}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                    <div className="col-xl-10 col-lg-10  col-sm-10  oxBridgeLog">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-sm-1"></div>
          </div>

          <div className="row" style={{marginLeft: '-2vw'}}>
            <div className="col-xl-10 col-lg-10  col-sm-10 ">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-sm-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                    <div className="col-xl-10 col-lg-10  col-sm-10  styleOfDallas">
                      {/* image background */}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                    <div className="col-xl-10 col-lg-10  col-sm-10  selmoreAdvertising">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-sm-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-sm-1"></div>
          </div>

        </div>
        
        <div className="row sOClients d-none d-md-block d-lg-none">
          <div className="col-md-12" style={{textAlign:'center'}}>
            <h3 className="clientsTablet">Some of our clients</h3>
          </div>
        </div>
        <div className="d-none d-md-block d-lg-none">
            <div className="row" style={{textAlign:'center'}}>
                <div className="col-md-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/sindhGovColor.png')} />
                </div>
                <div className="col-md-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/jicaColor.png')} />
                </div>
            </div>
            <div className="row" style={{textAlign:'center'}}>
                <div className="col-md-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/acfColor.png')} />
                </div>
                <div className="col-md-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/SiddqColor.png')} />
                </div>
            </div>
            <div className="row" style={{textAlign:'center'}}>
                <div className="col-md-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/circle-active.png')} />
                </div>
                <div className="col-md-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/oxbridge-active.png')} />
                </div>
            </div>
            <div className="row" style={{textAlign:'center'}}>
                <div className="col-md-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo//styleOfDallas.png')} />
                </div>
                <div className="col-md-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/selmore-colour.png')} />
                </div>
            </div>
        </div>
        
        <div className="d-block d-sm-none">
            <div className="row">
                <div className="col-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/sindhGovColor.png')} />
                </div>
                <div className="col-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/jicaColor.png')} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/acfColor.png')} />
                </div>
                <div className="col-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/SiddqColor.png')} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/circle-active.png')} />
                </div>
                <div className="col-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/oxbridge-active.png')} />
                </div>
            </div>
            <div className="row">
            <div className="col-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo//styleOfDallas.png')} />
                </div>
                <div className="col-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/selmore-colour.png')} />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default SomeOurClients;