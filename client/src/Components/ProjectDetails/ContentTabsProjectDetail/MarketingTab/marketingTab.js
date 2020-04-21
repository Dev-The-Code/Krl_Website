import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './marketingTab.css';

class MarketingTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  componentWillMount() {

  }
  componentDidMount() {
    let data = this.props.data;
    if (data) {
      this.setState({
        data: data,
      })
    }
  }

  render() {
    const { data } = this.state
    console.log('Marketing Tab', data.marketing);
    return (
      <div className="animateFadeIn">
        {data.marketing && data.marketing[0].mainVideoPanel[0].mainHead != '' && <div className="animatedup animatedFadeInUp fadeInUp">
          {data.marketing[0].mainVideoPanel.map((elem, key) => {
            return (
              <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-12" style={{ textAlign: 'left' }}>
                  <div className="row" style={{ marginTop: '4vmax' }}>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-12" style={{ paddingLeft: '0vw' }}>
                      <h3 className="sumShortHedng">{elem.mainHead}</h3>
                      <p className="sumPera">
                        {elem.mainHeadsubText}
                      </p>
                    </div>
                    {elem.mainVideos != '' && <div className="col-xl-8 col-lg-8 col-md-8 col-12"  style={{ paddingLeft: '0vw' }}>
                      <iframe src={elem.mainVideos} alt="Project Video" className="mainDemoImg"></iframe>
                    </div>}
                  </div>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
              </div>
            )
          })}
        </div>}
      </div>
    );
  }
}

export default MarketingTab;
