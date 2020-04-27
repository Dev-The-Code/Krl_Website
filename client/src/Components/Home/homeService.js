import React, { Component } from 'react';
import './home.css';
import HomeServicesPage from '../../Comman/HomeServicePage/homeServicePage';

class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-12">
                        <h2 className="heaD_font">Services</h2>
                    </div>
                </div>
                <HomeServicesPage />
            </div>
        );
    }
}

export default Service;