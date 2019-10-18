import React, { Component } from 'react';
import './interShipProgramer.css';

class InterShipProgramer extends Component {
 
    render() {
      return (
        <div>
            <div className="row" style={{marginBottom: '10vmax'}}>
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
                            <h1 className="interH1">Intership Programs</h1>
                            <p className="internPera">There is something so beautiful and special about handmade things. 
                                The thought, the effort, the planning, the delivery, the emotions. 
                                It can’t be quantified. The result might be one simple card or item but it 
                                represents a culmination of so many beautiful intangibles.<br/><br/>
                                There is something so beautiful and special about handmade things.
                            </p>
                            <p className="internPera2">
                                Send your resume to careers@krlcreatives.com
                            </p>
                        </div>
                        <div className="col-12 d-block d-xl-none d-lg-none d-md-none internShipTextMob">
                            <h1 className="interH1Mob">Intership Programs</h1>
                            <p className="internPeraMob">There is something so beautiful and special about handmade things. 
                                The thought, the effort, the planning, the delivery, the emotions. 
                                It can’t be quantified. The result might be one simple card or item but it 
                                represents a culmination of so many beautiful intangibles.<br/><br/>
                                There is something so beautiful and special about handmade things.
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