import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Components/Projects/projects.css';

var siddiqSons = {
  name : 'Siddiq',
  lastName :'Sons'
}
var jicaLightF = {
  name : 'Jica',
  lastName :'LightF'
}
var getFit = {
  name : 'Ali Hamza',
  lastName :'Baloch'
}
var drentBrand = {
  name : 'Iqra Drent',
  lastName :'Iqra'
}
var aCFRescue = {
  name : 'Ayesha',
  lastName :'Chundigar'
}
var pakJazba = {
  name : 'Pak',
  lastName :'Jazba'
}
var circleWomen = {
  name : 'Pak',
  lastName :'Jazba'
}
var oxBridge = {
  name : 'Shahab',
  lastName :'Farhan'
}
var ziyaratBrand = {
  name : 'Ziyarat',
  lastName :'Brand'
}
var dallasPalm = {
  name : 'Dallas',
  lastName :'Pallam'
}

class ProjectContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      siddiqSons: siddiqSons,
      jicaLightF: jicaLightF,
      getFit: getFit,
      drentBrand: drentBrand,
      aCFRescue: aCFRescue,
      pakJazba: pakJazba,
      circleWomen: circleWomen,
      oxBridge: oxBridge, 
      ziyaratBrand: ziyaratBrand,
      dallasPalm: dallasPalm,
    }
  }

  render() {
    const { projctBox, projctBox1, projctHedng, hed, hed1, projctChildBox, projctPera, pera, projctPera1, proAeroImg, seeAerro } = this.props;
    const { siddiqSons,jicaLightF,getFit,drentBrand,aCFRescue,pakJazba,circleWomen,oxBridge,ziyaratBrand,dallasPalm } = this.state;
    console.log(this.props.projectData,'location');
    return (
      <div className="animatedup animatedFadeInUp fadeInUp">
        <div className="row" style={{ paddingRight: '0vw' }}>
          <div className={projctBox1}></div>{/*"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12" */}
          <div className={projctBox}>
            <h2 className={projctHedng}>{hed}<br />{hed1}</h2>
            <div className="row">
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
              <div className={projctChildBox}>
                <p className={projctPera}>
                  {pera}
                </p>
                <Link rel="noopener noreferrer" 
                to={{ pathname: `/projects`, state: this.props.projectData }} 
                 className="changingdec">
                <a href={this.props.locationUrl} className="changingdec">
                  {seeAerro ? <p className={projctPera1}>
                    View Project<img href="#" className={proAeroImg} src={require('../../Assets/Images/arrowPurple.png')} />
                  </p>
                    : null}
                </a></Link>
                {/* {seeAerro  ? <p className={projctPera1}>
                {this.props.ViewPro && 
                <img href="#" className={proAeroImg} src={require('../../Assets/Images/arrowPurple.png')} />
               }
              </p>
              : null } */}
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
        </div>
      </div>

    );
  }
}

export default ProjectContainer;
