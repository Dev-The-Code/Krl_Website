import React, { Component } from 'react';
import Dot from '../../../Assets/Images/dots.png';
import Header from '../../Header/header2';
import './homeBanner.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    //  wheelListener = () => {
    //     window.addEventListener("wheel", this.props.myFun());
    //     console.log('heloo event');
    //   }
    componentWillMount() {
        this.setState({ headerPath: 'Home' });
        window.scrollTo(0, 0);
        // this.wheelListener()
    }
    // backImagee = () => {
    //     var movementStrength = 25;
    //     var height = movementStrength / window.height();
    //     var width = movementStrength / window.width();
    //     document.getElementById("#backImge_baner").mousemove(function (e) {
    //         var pageX = e.pageX - window.width() / 2;
    //         var pageY = e.pageY - window.height() / 2;
    //         var newvalueX = width * pageX * -1 - 25;
    //         var newvalueY = height * pageY * -1 - 50;
    //         document.getElementById("#backImge_baner").style.backgroundPosition = newvalueX + 'px'      + newvalueY + 'px';
    //     });
    // }
    render() {
        const { headerPath } = this.state;
        // console.log('props >>>', this.props)
        return (
            <div className="backImge_baner animateFadeIn">
                <Header headerPath={headerPath} headerDesktop="hederSticky" headerMob="hederStickyMob2" />
                <div className="row rAw_PadD">
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4"></div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <h1 className="Banerr_texxt">We help you <br />to help others.</h1>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4"></div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="col-12 col-md-11 col-lg-11 col-xl-11">
                        <p className="para_Textt-home">KRL Creatives covers all your brand needs to serve
                                                        your audience well. We do consultation and then we
                                                        provide the right solutions. We design, develop and
                                                        produce.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;