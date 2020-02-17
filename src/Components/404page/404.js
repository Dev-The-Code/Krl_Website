import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Header/header2';
import './404.css'

class FourZeroFour extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        let data = this.props.location.pathname;
        let routName;
        routName = data.slice(1);
        routName = routName.charAt(0).toUpperCase() + routName.slice(1);
        this.setState({ headerPath: routName });
        window.scrollTo(0, 0);
    }

    render() {
        const { headerPath, getCore, getStand } = this.state
        return (
            <div>
                <Header2 headerPath={'404'} headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" />
                <div className="all_backgrundImageAfter animateFadeIn" style={{ height: '100vh' }}>
                    <div className="row padTop404Pg">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12" style={{ textAlign: 'center' }}>
                            <h1 className="opHeading">Oops.</h1>
                            <p className="erorPara">The Page you're trying to reach doesn't exist</p>
                            <Link rel="noopener noreferrer" to={`/`}>
                                <button className="goBackHomBtn">Go back to Homepage</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default FourZeroFour;