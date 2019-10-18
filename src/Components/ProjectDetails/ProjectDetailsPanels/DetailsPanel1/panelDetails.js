import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../DetailsPanel1/panelDetails.css';
class PanelDetails extends Component {

  render() {

    return (
        <div>
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                  <Link rel="noopener noreferrer" to={`/project`}  className="changingdec">
                    <button className="bck-to-pro"> &lt;Back to project list</button>
                  </Link>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
            </div>

            <div className="row">
              <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
              <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                <h3 className="panelHeading" style={{}}>Drent Luxury
                  <br/>
                  Dress Rental <br/>
                  Website
                </h3>
              </div>
              
              {/* mobile hidden */}
              <div className="col-xl-5 col-lg-5 col-md-5 d-none d-xl-block d-lg-block d-md-block">
                <p className="panelPera" style={{}}>Drent is a luxury clothes rental website for the South Asian 
                Coummunities based in UK. Being a startup, they needed 
                their service to be branded along with a fully functional 
                website. We helped them with what they needed.</p>
              </div>

              {/* mobile visible */}
              <div className="col-12 d-block d-xl-none d-lg-none d-md-none">
                <p className="panelPeraMob" style={{}}>Drent is a luxury clothes rental website for the South Asian 
                Coummunities based in UK. Being a startup, they needed 
                their service to be branded along with a fully functional 
                website. We helped them with what they needed.</p>
              </div>
              <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

            </div>
        </div>
    );
  }
}

export default PanelDetails;
    