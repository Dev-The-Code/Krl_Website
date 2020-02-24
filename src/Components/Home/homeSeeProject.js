import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Header from '../Header/header2';
import SeeProject from '../ContactPage/SeeProject/seeProject';


class Seeproject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // wheelListener = () => {
    //     window.addEventListener("wheel", this.props.myFun());
    //     console.log('heloo event');
    //   }
    componentWillMount() {
        this.setState({ headerPath: 'Home' });
        window.scrollTo(0, 0)
        // this.wheelListener()
    }

    render() {
        const { headerPath } = this.state
        return (
            <div>
                <Link to={`/contact`} className="changingColor">
                    <div className="row fot_hoMe_coLor">
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                            <SeeProject se_Text="seeProfoot_home"
                                roWalign='row ReW_home'
                                se_Text1="largerFoottext"
                                seeText="Lets create something awesome together!"
                                lrgText="Send a request "
                                lgBrText=""
                                arrow_Right="aroowFootHome"
                            />
                        </div>
                        <div className="col-12 col-md-12 col-lg-1 col-xl-1"></div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Seeproject;