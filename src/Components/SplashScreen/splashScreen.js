import React, { Component } from 'react';
import './splashScreen.css';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: ''
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({ show: true });
    }.bind(this), 500);
  }

  render() {
    const { } = this.state
    return (
      <div>
        <div className="d-none d-sm-block">
          <div className="row mainBacksplash">
            <div className="col-md-2 col-lg-3 col-xl-3"></div>
            <div className="col-md-8 col-lg-6 col-xl-6">
              <ul className={this.state.show ? 'fly-in-text' : 'fly-in-text hidden'} id="myDev_ani">
                <li>W</li>
                <li>E</li>
                <li>L</li>
                <li>C</li>
                <li>O</li>
                <li>M</li>
                <li>E</li>
                <li style={{ marginLeft: '2.3vw' }}>T</li>
                <li>O</li>
              </ul><br /><br />
              <ul className={this.state.show ? 'fly-Name' : 'fly-Name hidden'} id="myDev_ani">
                <li>K</li>
                <li>R</li>
                <li>L</li>

                <li style={{ marginLeft: '2.3vw' }}>C</li>
                <li>R</li>
                <li>E</li>
                <li>A</li>
                <li>T</li>
                <li>I</li>
                <li>V</li>
                <li>E</li>
                <li>S</li>
              </ul>
            </div>
            <div className="col-md-2 col-lg-3 col-xl-3"></div>
          </div>
        </div>
        <div className="d-block d-sm-none">
          <div className="mainBacksplash">
          <div className="row" style={{paddingTop:'60%'}}>
            <div className="col-1"></div>
            <div className="col-10">
              <ul className={this.state.show ? 'fly-in-text' : 'fly-in-text hidden'} id="myDev_ani">
                <li>W</li>
                <li>E</li>
                <li>L</li>
                <li>C</li>
                <li>O</li>
                <li>M</li>
                <li>E</li>
              </ul><br /><br />
              <ul className={this.state.show ? 'fly-nameTwo' : 'fly-nameTwo hidden'} id="myDev_ani">
                <li>T</li>
                <li>O</li>
              </ul><br /><br />
              <ul className={this.state.show ? 'fly-Name' : 'fly-Name hidden'} id="myDev_ani">
                <li>K</li>
                <li>R</li>
                <li>L</li>

                <li style={{ marginLeft: '4vw' }}>C</li>
                <li>R</li>
                <li>E</li>
                <li>A</li>
                <li>T</li>
                <li>I</li>
                <li>V</li>
                <li>E</li>
                <li>S</li>
              </ul>
            </div>
            <div className="col-1"></div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;