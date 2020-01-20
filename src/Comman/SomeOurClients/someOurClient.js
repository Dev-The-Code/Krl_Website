import React, { Component } from 'react';
import './someOurClients.css';


class SomeOurClients extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="row sOClients">
          <div className="col-xl-12 col-lg-12 col-md-9 col-11">
            <h3 className="clients">Some of our clients</h3>
          </div>
        </div>
        <div className="d-none d-sm-block">
          <div className="row" style={{marginLeft: '-2vw'}}>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 sindhGove">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 jicaLightF">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
          </div>

          <div className="row" style={{marginLeft: '-2vw'}}>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 acfLog">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 siddiqSons">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
          </div>

          <div className="row" style={{marginLeft: '-2vw'}}>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 surmawallahLog">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 logos">
                  <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 selMorelog">
                      {/*image background*/}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
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
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/SurmawalaColor.png')} />
                </div>
                <div className="col-6">
                  <img className="companiesLogo2" src={require('../../Assets/Images/clientLogo/selmoreLogo.png')} />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default SomeOurClients;