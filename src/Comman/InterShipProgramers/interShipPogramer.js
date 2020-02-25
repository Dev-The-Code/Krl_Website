import React, { Component } from 'react';
import './interShipProgramer.css';

class InterShipProgramer extends Component {

    render() {
        return (
            <div>
                <div className="row" style={{ marginBottom: '10vmax' }}>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-11 internShipImg"></div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-12"></div>
                        </div>

                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-12"></div>
                            <div className="col-xl-7 col-lg-7 col-md-7 col-12 d-none d-xl-block d-lg-block d-md-block internShipText">
                                <h1 className="interH1">Internship Programs</h1>
                                <p className="internPera">
                                    At KRL, we believe that it is important for students
                                    to receive a hands-on experience of what it is like to
                                    work within an organisation and as part of a dynamic
                                    team of individuals. We have a meticulously planned program
                                    for final year university students that is completely
                                    immersive and challenging from start to finish.
                                </p>
                                <p className="internPera2">
                                    Send your resume to careers@krlcreatives.com
                            </p>
                            </div>
                            <div className="col-12 d-block d-xl-none d-lg-none d-md-none internShipTextMob">
                                <h1 className="interH1Mob">Internship Programs</h1>
                                <p className="internPeraMob"> 
                                    At KRL, we believe that it is important for students
                                    to receive a hands-on experience of what it is like to
                                    work within an organisation and as part of a dynamic
                                    team of individuals. We have a meticulously planned program
                                    for final year university students that is completely
                                    immersive and challenging from start to finish.
                                </p>
                                <p className="internPeraMob2">
                                    Send your resume to careers@krlcreatives.com
                            </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                </div>

            </div>
        );
    }
}

export default InterShipProgramer;