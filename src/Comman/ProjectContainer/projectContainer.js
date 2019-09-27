import React, { Component } from 'react';
import '../../Components/Projects/projects.css';

class ProjectContainer extends Component {

    constructor(props){
      super(props);
       
    }
 
    render() {
      const {projctBox, projctHedng, hed, hed1, projctChildBox, projctPera, pera, projctPera1, proAeroImg, seeAerro}=this.props;
      
      return (
        <div>
          
          <div className="row">
            <div className={projctBox}>
            <h2 className={projctHedng}>{hed}<br/>{hed1}</h2>
            <div className="row">
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
              <div className={projctChildBox}>
                <p className={projctPera}>
                  {pera}
                </p>
               {seeAerro  ? <p className={projctPera1}>
                {this.props.ViewPro} <img href="#" className={proAeroImg} src={require('../../Assets/Images/arrowPurple.png')} />
              </p>
              : null }
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
