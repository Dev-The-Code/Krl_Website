import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Smallarrow from '../../Assets/Images/latest-post-arrow.png';
import Header from '../Header/header2';
import ProjectsContainer from '../../Comman/ProjectContainer/projectContainer';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GFAHeading: 'LIGHT-F Project By',
            GFAHeadingBr: 'JICA & Sindh Gvt',
            DrentHeading: 'ACF Animal Rescue',
            DrentHeadingBr: 'Websites',
            GFAperaas: 'An ambitious willing to help people be healthy. We designed and developed a...',
            Drentperaas: 'A luxury cloth rental service needed a new website. We design and developed...',
            ADBHeading: 'Siddiqsons Limited',
            ADBHeadingBr: 'Brochure',
            DPWHeading: 'Dallas Palms',
            DPWHeadingBr: 'Website',
            DPWperaas: 'A Dallas based wedding venue needed a strong online presence. We design...',
            ODSHeading: 'Online Design',
            ODSHeadingBr: 'Website',

            devPeraImg: true,
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
        const { GFAHeading, GFAHeadingBr, DrentHeading, DrentHeadingBr, GFAperaas, Drentperaas, ADBHeading, ADBHeadingBr,
            DPWHeading, DPWHeadingBr, DPWperaas, ODSHeading, ODSHeadingBr, devPeraImg, headerPath } = this.state
        return (
            <div>
                {/* <Header headerPath={headerPath} /> */}
                
                <div className="row">
                    <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-12">
                        <h2 className="heaD_fontPro">Projects</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="d-none d-md-none d-lg-block d-xl-block col-lg-6 col-xl-6">
                        <ProjectsContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-11 GFA_BgImg'
                            projctHedng="GFAhedng"
                            hed={GFAHeading}
                            hed1={GFAHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                            projctPera="GFApera"
                            locationUrl={"https://getfitathletic.pk/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera={GFAperaas}
                            proAeroImg="GFAimg"
                        />

                        <ProjectsContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DrentBgImg'
                            projctHedng="Drenthedng"
                            hed={DrentHeading}
                            hed1={DrentHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                            projctPera="GFApera"
                            locationUrl={"http://drent1.herokuapp.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera={Drentperaas}
                            proAeroImg="GFAimg"
                        />
                    </div>

                    {/*ipad visible */}
                    <div className="d-none d-md-block d-lg-none d-xl-none col-md-6">
                        <ProjectsContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-11 GFA_BgImg'
                            projctHedng="GFAhedng"
                            hed={GFAHeading}
                            hed1={GFAHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                            projctPera="GFApera"
                            locationUrl={"https://getfitathletic.pk/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera={GFAperaas}
                            proAeroImg="GFAimg"
                        />

                        <ProjectsContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DrentBgImg'
                            projctHedng="Drenthedng"
                            hed={DrentHeading}
                            hed1={DrentHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                            projctPera="GFApera"
                            locationUrl={"http://drent1.herokuapp.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera={Drentperaas}
                            proAeroImg="GFAimg"
                        />
                    </div>

                    {/*monbile visible */}
                    <div className="d-block d-md-none d-lg-none d-xl-none col-11">
                        <ProjectsContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 GFA_BgImgHomeMb'
                            projctHedng="GFAhedng"
                            hed={GFAHeading}
                            hed1={GFAHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChildMb"
                            projctPera="GFApera"
                            locationUrl={"https://getfitathletic.pk/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera={GFAperaas}
                            proAeroImg="GFAimg"
                        />

                        <ProjectsContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DrentBgImgHomeMb'
                            projctHedng="Drenthedng"
                            hed={DrentHeading}
                            hed1={DrentHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChildMb"
                            projctPera="GFApera"
                            locationUrl={"http://drent1.herokuapp.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera={Drentperaas}
                            proAeroImg="GFAimg"
                        />
                    </div>


                    <div className="col-12 col-md-5 col-lg-5 col-xl-5">

                        {/*mobile, ipad hidden*/}
                        <ProjectsContainer projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-10 col-lg-10 ADB_HomBgImg'
                            projctHedng="ADBhedng"
                            hed={ADBHeading}
                            hed1={ADBHeadingBr}
                            projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
                            projctPera="ADBpera"
                            locationUrl={"https://www.amberdazzle.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="ADBpera1"
                            pera={Drentperaas}
                            proAeroImg="ADBimg"
                        />

                        {/*ipad visible*/}
                        <ProjectsContainer projctBox='d-none d-md-block d-xl-none d-lg-none col-md-10 ADB_BgImgSmMd'
                            projctHedng="ADBhedng"
                            hed={ADBHeading}
                            hed1={ADBHeadingBr}
                            projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-11 ADB_BgChildMd"
                            projctPera="ADBpera"
                            locationUrl={"https://www.amberdazzle.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="ADBpera1"
                            pera={Drentperaas}
                            proAeroImg="ADBimg"
                        />
                        {/*mobile visible*/}
                        <ProjectsContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 ADB_BgImgHomeMb'
                            projctHedng="ADBhedngHomeMb"
                            hed={ADBHeading}
                            hed1={ADBHeadingBr}
                            projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ADB_BgChildSmMd"
                            projctPera="ADBpera"
                            locationUrl={"https://www.amberdazzle.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="ADBpera1"
                            pera={Drentperaas}
                            proAeroImg="ADBimg"
                        />

                        <Link to={`/project`} className="changingdec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-11 col-lg-11 col-xl-11 vieW_btn">
                                        <p className="arroW_lastesT">View All Projects <img src={Smallarrow} className="" /></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-12 col-lg-1 col-xl-1"></div>
                </div>
            </div>
        );
    }
}

export default Project;