import React, { Component } from 'react';
import '../CoverImgOfProject/coverImgofProject.css';

class DetailPanelTwo extends Component {
  render() {
    const { data } = this.props
    // console.log(data, 'data');
    return (
        <div className="animatedup animatedFadeInUp fadeInUp">
           <div className="row devChalnge2">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    {/* mobile hidden */}
                    <div className="col-xl-11 col-lg-11 col-md-11 d-none d-xl-block d-lg-block d-md-block">
                        <div className="row">
                            {data.ourRole  && <div className="col-xl-6 col-lg-6 col-md-6 col-12 devChildChalnge">
                                <h3 className="chalnge">
                                    Our Role
                            </h3>
                                <p className="chalngePera">
                                    {data.ourRole}
                                </p>
                            </div>}
                            {data.technologyUsed  && <div className="col-xl-6 col-lg-6 col-md-6 col-12 devChildChalnge">
                                <h3 className="chalnge">
                                    Technologies Used
                                </h3>

                                <p className="chalngePera">
                                    {data.technologyUsed}
                                </p>
                            </div>}
                        </div>
                    </div>

                    {/* mobile visible */}
                    <div className="col-12 d-block d-xl-none d-lg-none d-md-none">
                        <div className="row">
                            {data.ourRole != '' && <div className="col-12 devChildChalnge">
                                <h3 className="chalnge">
                                    Our Role
                                </h3>

                                <p className="chalngePeraMob">
                                    {data.ourRole}
                                </p>
                            </div>}
                            {data.technologyUsed != '' &&  <div className="col-12 devChildChalnge">
                                <h3 className="chalnge">
                                    Technology Used
                                </h3>

                                <p className="chalngePeraMob">
                                    {data.technologyUsed}
                                </p>
                            </div>}
                        </div>
                    </div>
                </div>
        </div>
    );
  }
}

export default DetailPanelTwo;
    