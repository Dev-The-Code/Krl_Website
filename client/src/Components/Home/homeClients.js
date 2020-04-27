import React, { Component } from 'react';
import './home.css';
import SomeOurClients from '../../Comman/SomeOurClients/someOurClient';
import Founders2 from '../../Comman/Founders/founders2';

class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>

                <div className="row clientAlignMent">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 backG_colR">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-2"></div>
                            <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-10">
                                <SomeOurClients />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <Founders2 />
                    </div>
                </div>
            </div>
        );
    }
}

export default Clients;