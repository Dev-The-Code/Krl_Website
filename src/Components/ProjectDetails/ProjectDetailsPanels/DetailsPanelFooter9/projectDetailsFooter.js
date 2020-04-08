import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SeeProject from '../../../ContactPage/SeeProject/seeProject';


class ProjectDetailFooter extends Component {

  render() {

    return (
        <div className="animatedup animatedFadeInUp fadeInUp">
            {/*<Link to={`/contact`} className="changingColor"> */}
                <div className="row proSeeFotr">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12" style={{textAlign:'left'}}>{/*seeBckColr="proSeeFotr" ye class or css use hogi*/}
                    <SeeProject
                        roWalign='row ReW_home'
                        se_Text="seProFotr_text"
                        se_Text1="largeProFotr_text"
                        seeText="Like what you see?"
                        lrgText="Send a request "
                        lgBrText=""
                        arrow_Right="arrowRight1_ProjeCT"
                    />
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12"></div>
                </div>
                {/* </Link> */}

        </div>
        );
    }
}
  
export default ProjectDetailFooter;