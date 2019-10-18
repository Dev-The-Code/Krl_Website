import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Comman/Button/button';
import './header.css';
import ProjectDetails from '../ProjectDetails/projectDetailsMain';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          response: false
        };
      }
      openNav = () => {
        this.setState({ response: true });
      }
      closeNav = () => {
        this.setState({ response: false });
      }
    
      componentWillUnmount() {
    
      }
    
    render() {
        console.log(this.props.headerPath, 'sssssss');
        return (
            <div>
                {this.state.response ?
                    <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-6 loGo_devv">
                      <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav}>
                        <img href="#" className="logo" src={require('../../Assets/Images/logo.png')} />
                      </Link>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6"></div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 cursiraPoinT" onClick={this.openNav} style={{ textAlign: 'right' }}>
                      <p className="header_Textt"><span>{this.props.headerPath}</span></p>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3 mt-5 cursiraPoinT" onClick={this.openNav}>
                      <img className="menu" src={require('../../Assets/Images/menu.png')} onClick={this.openNav} />
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                  </div>
                  :







                <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10" style={{marginBottom: '5vmax'}}>
                        <div className="row lol fixed-top">
                            <div className="col-xl-3 col-lg-3 col-md-3" style={{ paddingTop: '1vmax'}}>
                                <img href="#" className="logo" src={require('../../Assets/Images/logo.png')} />
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7"></div>
                            <div className="col-xl-2 col-lg-2 col-md-2" style={{textAlign: 'right', paddingTop: '1.5vmax'}}>
                                <img className="" src={require('../../Assets/Images/close.png')} />
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-xl-1 col-lg-1 col-md-1"></div>
                    <div className="row">
                  <div className="col-12">
                    <div className="row" style={{ paddingTop: '16vw' }}>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Home'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/services`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Service'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/project`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Project'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/about`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='About'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/contact`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Contact'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/blog`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Blog'
                          />
                        </Link>
                      </div>
                      <div className="row devIcons" style={{display: 'inline-block'}}>
                    
                        <a href="https://facebook.com/krlcreatives" target="_blank"> <div className="fb"></div></a>
                        <a href="https://twitter.com/krlcreatives" target="_blank"> <div className="twitter"></div></a>
                        <a href="https://pk.linkedin.com/company/krl-creatives" target="_blank"> <div className="linkdin"></div></a>
                        <a href="https://instagram.com/krlcreatives" target="_blank"> <div className="insta"></div></a>
                      
                    </div>
                    </div>
                  </div>
                </div>
                    
               </div>
               
               
                }
            </div>
        );
    }
}

export default Header;

