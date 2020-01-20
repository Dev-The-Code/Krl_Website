import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Comman/Button/button';
import './header2.css';

class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: false,
      classAfter : false
    };
  }
  openNav = () => {
    this.setState({ response: true });
    setTimeout(() => {
      this.setState({ classAfter: true });
    }, 0);
  }
  closeNav = () => {
    this.setState({ response: false , classAfter: false  });
  }

  // componentDidMount() {
    
  // }

  render() {


    console.log(this.state.classAfter, 'sssssss');
    return (
      <div>
        {this.state.response ?
          <div>
            <div className="d-none d-sm-block">
              <div className="naVBar_aliGN">              
                  <div className={this.state.classAfter ? 'row headRuwAfter' : 'row headRuw'}>
                  <div className="col-md-1 col-lg-1 col-xl-1 colorrr"></div>
                  <div className="col-md-10 col-lg-10 col-xl-10 colorrr">
                    <div className="row innerRuww colorrr">
                      <div className="col-md-1 col-lg-2 col-xl-2"></div>
                      <div className="col-md-4 col-lg-4 col-xl-4">
                        <ul style={{ listStyle: 'none' }}>
                          <li className="nav_list">
                            <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav}>
                              <Button
                                classMd="nav_bTnTeXt"
                                label='Home'
                              />
                            </Link>
                          </li>
                          <li className="nav_list">
                            <Link rel="noopener noreferrer" to={`/services`} onClick={this.closeNav}>
                              <Button
                                classMd="nav_bTnTeXt"
                                label='Service'
                              />
                            </Link>
                          </li>
                          <li className="nav_list">
                            <Link rel="noopener noreferrer" to={`/project`} onClick={this.closeNav}>
                              <Button
                                classMd="nav_bTnTeXt"
                                label='Project'
                              />
                            </Link>
                          </li>
                          <li className="nav_list">
                            <Link rel="noopener noreferrer" to={`/about`} onClick={this.closeNav} >
                              <Button
                                classMd="nav_bTnTeXt"
                                label='About'
                              />
                            </Link>
                          </li>
                          <li className="nav_list">
                            <Link rel="noopener noreferrer" to={`/contact`} onClick={this.closeNav} >
                              <Button
                                classMd="nav_bTnTeXt"
                                label='Contact'
                              />
                            </Link>
                          </li>
                          {/* <li className="nav_list">
                            <Link rel="noopener noreferrer" to={`/blog`} onClick={this.closeNav} >
                              <Button
                                classMd="nav_bTnTeXt"
                                label='Blog'
                              />
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-6" style={{ borderLeft: '1px solid' }}>
                        <div className="row">
                          <div className="col-md-10 col-lg-11 col-xl-11"></div>
                          <div className="col-md-2 col-lg-1 col-xl-1">
                            <img className="closeIconnav" src={require('../../Assets/Images/closeNavWhite.png')} onClick={this.closeNav} />
                          </div>
                          {/* <div className="col-md-0 col-lg-1 col-xl-1"></div> */}
                        </div>
                        <div className="halfNav">
                          <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav}>
                            <img href="#" className="logo" src={require('../../Assets/Images/logo-03.png')} />
                          </Link>

                          <br />
                          <p className="adressNav">
                            3rd floor، 59-C 24th St,<br />
                            Phase V Tauheed Commercial Area <br />
                            Defence V Defence Housing Authority,<br />
                            Karachi, Karachi City, Sindh 75500</p>
                          <br />
                          <div>
                            <ul className="social_lst-Nav">
                              <li className="fB_sitesNam-Nav"><a href="https://www.facebook.com/krlcreatives/" target="_blank" className="linkColor">Facebook</a></li>
                              <li className="linKDi_sitesNam-Nav"><a href="https://www.linkedin.com/company/krl-creatives/" target="_blank" className="linkColor">Linkedin</a></li>
                              <li className="twiTer_sitesNam-Nav"><a href="https://twitter.com/KrlCreatives" target="_blank" className="linkColor">Twitter</a></li>
                              <li className="insta_sitesNam-Nav"><a href="https://www.instagram.com/krlcreatives/" target="_blank" className="linkColor">Instagram</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 colorrr"></div>
                </div>
                  
              </div>
            </div>

            <div className="d-block d-sm-none">
              <div className="naVBar_aliGN">
                <div className={this.state.classAfter ? 'row hederStickyMob' : 'row hederStickyMobAfter'}>
                  <div className="col-6">
                    <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav}>
                      <img href="#" className="logoo_Mob" src={require('../../Assets/Images/logo-03.png')} />
                    </Link>
                  </div>
                  <div className="col-6" style={{ textAlign: 'right' }}>
                    <img className="menU_MoB" onClick={this.closeNav} src={require('../../Assets/Images/closeNavWhite.png')} />
                  </div>
                </div>
                <div className={this.state.classAfter ? 'row headClascss' : 'row headClascssAfter'}>
                  <div className="col-12">
                    <div className="row" style={{ paddingTop: '26vw' }}>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt-Mob"
                            label='Home'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/services`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt-Mob"
                            label='Service'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/project`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt-Mob"
                            label='Project'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/about`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt-Mob"
                            label='About'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/contact`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt-Mob"
                            label='Contact'
                          />
                        </Link>
                      </div>
                      {/* <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/blog`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt-Mob"
                            label='Blog'
                          />
                        </Link>
                      </div> */}
                      <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                          <div className="row devIconsMob">
                            <div className="col-3">
                              <a href="https://facebook.com/krlcreatives" target="_blank"> <div className="fbMob"></div></a>

                            </div>
                            <div className="col-3">
                              <a href="https://twitter.com/krlcreatives" target="_blank"> <div className="twitterMob"></div></a>

                            </div>
                            <div className="col-3">
                              <a href="https://pk.linkedin.com/company/krl-creatives" target="_blank"> <div className="linkdinMob"></div></a>

                            </div>
                            <div className="col-3">
                              <a href="https://instagram.com/krlcreatives" target="_blank"> <div className="instaMob"></div></a>

                            </div>

                          </div>

                        </div>
                        <div className="col-2"></div>



                      </div>
                    </div>
                    <div className="row" style={{marginTop: '-7vw'}}>
                      <div className="col-12">
                        <ul className="social_lst-Nav_mob">
                          <li className="fB_sitesNam-Nav_mob"><a href="https://www.facebook.com/krlcreatives/" target="_blank" className="MobLinkColorF">Fb</a></li>
                          <li className="linKDi_sitesNam-Nav_mob"><a href="https://www.linkedin.com/company/krl-creatives/" target="_blank" className="MobLinkColorL">In</a></li>
                          <li className="twiTer_sitesNam-Nav_mob"><a href="https://twitter.com/KrlCreatives" target="_blank" className="MobLinkColorT">Tw</a></li>
                          <li className="insta_sitesNam-Nav_mob"><a href="https://www.instagram.com/krlcreatives/" target="_blank" className="MobLinkColorI">Ig</a></li>
                        </ul>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <ul className="social_lst-Nav_mob">
                            
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div>
            <div className="d-none d-sm-block">
              {/* <div className="row hederSticky"> */}
              <div className={`row ${ this.props.headerDesktop}`}> 
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-6 loGo_devv">
                  <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav}>
                    <img href="#" className="logo" src={require('../../Assets/Images/logo-03.png')} />
                  </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6"></div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 cursiraPoinT" onClick={this.openNav} style={{ textAlign: 'right' }}>
                  <p className="header_Textt"><span>{this.props.headerPath}</span></p>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3 mt-5 cursiraPoinT" onClick={this.openNav}>
                  <img className="menu" src={require('../../Assets/Images/Homepage-04.png')} onClick={this.openNav} />
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
              </div>

            </div>

            <div className="d-block d-sm-none">
              {/* <div className="row hederStickyMob2"> */}
              <div className={`row ${ this.props.headerMob}`}>
                <div className="col-6">
                  <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav}>
                    <img href="#" className="logoo_Mob" src={require('../../Assets/Images/logo-03.png')} />
                  </Link>
                </div>
                <div className="col-3" onClick={this.openNav} style={{ textAlign: 'right' }}>
                  <p className="header_Textt">{this.props.headerPath}</p>
                </div>
                <div className="col-3" onClick={this.openNav}>
                  <img className="heaD_Mob" src={require('../../Assets/Images/Homepage-04.png')} />
                </div>
              </div>

            </div>
          </div>
        }

      </div>

    );
  }
}

export default Header2;



{/* <div id="myNavbar" className="overlay">
            <div className="row">
              <div className="col-8"></div>
              <div className="col-4">
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="menu_ListMoB">
                  <li className="nav_ListMOB">
                    <a href="/" onClick={this.closeNav} >
                      Home
                  </a>
                  </li>
                  <li className="nav_ListMOB">
                    <Link rel="noopener noreferrer" to={`/about`} onClick={this.closeNav}>
                      About
                  </Link>
                  </li>
                  <li className="nav_ListMOB">
                    <Link rel="noopener noreferrer" to={`/contact`} onClick={this.closeNav}>
                      Contact Us
                  </Link>
                  </li>
                  <li className="nav_ListMOB">
                    <Link rel="noopener noreferrer" to={`/services`} onClick={this.closeNav}>
                      Services
                  </Link>
                  </li>
                  <li className="nav_ListMOB">
                    <Link rel="noopener noreferrer" to={`/project`} onClick={this.closeNav}>
                      Projects
                  </Link>
                  </li>
                  <li className="nav_ListMOB">
                    <Link rel="noopener noreferrer" to={`/blog`} onClick={this.closeNav}>
                      Blogs
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}