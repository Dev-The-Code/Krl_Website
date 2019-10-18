import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Components/Projects/projects.css';

class ProjectContainer extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { projctBox, projctBox1, projctHedng, hed, hed1, projctChildBox, projctPera, pera, projctPera1, proAeroImg, seeAerro } = this.props;
    console.log(this.props,'location');
    return (
      <div>
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
                <Link rel="noopener noreferrer" to={`/projectDetails`}  className="changingdec">
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
