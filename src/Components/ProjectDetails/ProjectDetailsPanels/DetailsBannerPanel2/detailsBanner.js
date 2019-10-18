import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../DetailsBannerPanel2/detailsBanner.css';
class DetailBanner extends Component {

  render() {

    return (
        <div>
            <div className="col-xl-12 col-lg-12 col-md-12 d-none d-xl-block d-lg-block d-md-block bannerDetails"></div>
            <div className="d-block col-12 d-xl-none d-lg-none d-md-none bannerDetails-MOb"></div>



                {/*Banner bottom text*/}


            <div className="row devChalnge">
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

                {/* mobile hidden */}
                <div className="col-xl-11 col-lg-11 col-md-11 d-none d-xl-block d-lg-block d-md-block">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 devChildChalnge">
                            <h3 className="chalnge">
                                The Challenge
                            </h3>

                            <p className="chalngePera">In early 2017, we received a request DSX a london-based 
                            financial company to develop a trading platform for cryptocurrency exchange 
                            from ground zero. This was  DSX's entry into the global marketplace 
                            in response to the skyrocketing cryptocurrency demand.</p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 devChildChalnge">
                            <h3 className="chalnge">
                                The Challenge
                            </h3>

                            <p className="chalngePera">In early 2017, we received a request DSX a london-based 
                            financial company to develop a trading platform for cryptocurrency exchange 
                            from ground zero. This was  DSX's entry into the global marketplace 
                            in response to the skyrocketing cryptocurrency demand.</p>
                        </div>
                    </div>
                </div>

                {/* mobile visible */}                
                <div className="col-12 d-block d-xl-none d-lg-none d-md-none">
                    <div className="row">
                        <div className="col-12 devChildChalnge">
                            <h3 className="chalnge">
                                The Challenge
                            </h3>

                            <p className="chalngePeraMob">In early 2017, we received a request DSX a london-based 
                            financial company to develop a trading platform for cryptocurrency exchange 
                            from ground zero. This was  DSX's entry into the global marketplace 
                            in response to the skyrocketing cryptocurrency demand.</p>
                        </div>
                        <div className="col-12 devChildChalnge">
                            <h3 className="chalnge">
                                The Challenge
                            </h3>

                            <p className="chalngePeraMob">In early 2017, we received a request DSX a london-based 
                            financial company to develop a trading platform for cryptocurrency exchange 
                            from ground zero. This was  DSX's entry into the global marketplace 
                            in response to the skyrocketing cryptocurrency demand.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
            );
        }
    }
      
export default DetailBanner;