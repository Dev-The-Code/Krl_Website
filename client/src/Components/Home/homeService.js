import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Header from '../Header/header2';
import HomeServicesPage from '../../Comman/HomeServicePage/homeServicePage';

class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: false
        };
    }
    openNav = () => {
        this.setState({ response: true });
    }
    closeNav = () => {
        this.setState({ response: false });
    }
    componentWillMount() {
        this.setState({ headerPath: 'Home' });
        window.scrollTo(0, 0)
    }

    render() {
        const { headerPath } = this.state
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