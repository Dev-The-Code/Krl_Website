import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nameDescriptOfProject.css';
import ArrowImg from '../../../../Assets/Images/arrow.png';
class PanelDetails extends Component {

  render() {
    const { data } = this.props
    // console.log(data.name, 'data');
    return (
      <div className="animatedup animatedFadeInUp fadeInUp">
        <div className="row">
          <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
          <div className="col-xl-10 col-lg-10 col-md-10 col-12">
            <Link rel="noopener noreferrer" to={`/projects`} className="changingdec">
              {/* <img src={ArrowImg} alt="arrow" className="arowBackImg" /> */}
              <button className="bck-to-pro"><span className="backArowProjectDetail">&#8592;</span> Back to project list</button>
            </Link>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
        </div>

        <div className="row" style={{ paddingBottom: '5vw' }}>
          <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
          {data.name && <div className="col-xl-5 col-lg-5 col-md-5 col-12">
            <h3 className="panelHeading">
              {data.name}
            </h3>
          </div>}
          {/* mobile hidden */}
          {data.desciption && <div className="col-xl-5 col-lg-5 col-md-5 d-none d-xl-block d-lg-block d-md-block">
            <p className="panelPera" style={{}}>
              {data.desciption}
            </p>
          </div>}
          {/* mobile visible */}
          {data.desciption && <div className="col-12 d-block d-xl-none d-lg-none d-md-none">
            <p className="panelPeraMob" style={{}}>
              {data.desciption}
            </p>
          </div>}
          <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

        </div>
      </div>
    );
  }
}

export default PanelDetails;
