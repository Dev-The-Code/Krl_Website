import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Smallarrow from '../../Assets/Images/latest-post-arrow.png';
import Header from '../Header/header2';
import ProjectContainer from '../../Comman/ProjectContainer/projectContainer';
var siddiqSons = {
    name: 'Siddiqsons Limited Brochure',
    desciption: 'Siddiqsons needed a brochure that could effectively communicate their new direction of environmental friendly denim production.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687373/cover_h7qavr.jpg'],
    ourRole: 'KRL Creatives was responsible for all photography and full design direction and creative execution of this campaign. We photographed their facility, designed a creative and visual strategy and prepared a brochure that would communicate the story of the hugely successful denim brand.',
    technologyUsed: '',
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: [''],
    fontText: '',
    fontFamilyText: [''],
    fontFamily: [''],
    illustration: [
        {
            illustrationText: 'Photography',
            illustrationSubText: 'Siddiqsons new denim production facility was photographer by KRL Creatives.',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687745/2_-pathway_plhjlc.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687782/10_-_washing_axkjqd.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687815/18_-_quality_assurance_eusdgz.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687823/6_-_two_side_laser_uueepf.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687830/15_-_Ozone_Machine_ddgl3d.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687847/8_-_single_side_laser_vrkktf.jpg'],
        },
    ],
    demoHeading: 'Final Printed Brochure',
    demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579702459/VID2_nmkc9u.mp4'],
    documentHeading: 'Brochure Design',
    documentDemo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579688090/iteration_2_a_bqswtf.jpg',
    ],
    mainVideoPanel: [{
        mainHead: '',
        mainHeadsubText: '',
        mainVideos: "",
    },]
}
var jicaLightF = {
    name: 'LIGHT-F Project By JICA & Sindh Gvt',
    desciption: 'LIGHT-F (started by JICA with Sindh Government) wanted to launch a program for the welfare of women in interior Sindh. They needed to brand the program and needed a brand identity designed.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610272/cover_vjziro.jpg'],
    ourRole: 'KRL Creatives designed their brand, gave the brand an identity which included a logo, letterheads, certificate design, and brand guidelines.Apart from branding, we also designed and photographed their product catalog.',
    technologyUsed: '',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610909/light-f-logo_lpqdtl.png'],
    visualidentityLogoText: 'The Light-F logo is a word mark. It incorporates a torch that faces upwards, symbolising life, truth and the regenerative power of flame.',
    colorpaletteText: 'Purple color of LIGHT-F shows ambition to bring change. And the orange color shows the energy of the brand.',
    colorPaletteAllColor: ['#662D91', '#F58441', '#912F6C', '#FFC907', '#CCAED3',],
    fontText: 'The font chosen for LIGHT-F has a clean and mature look, which shows the open and mature nature of the brand.',
    fontFamilyText: ['Nunito Sans'],
    fontFamily: ['Nunito Sans'],
    illustration: [
        {
            illustrationText: 'Product Photography',
            illustrationSubText: 'Product photography done for the LIGHT-F handcrafted gift catalogue.',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579611945/big_asharfi_small_ng7xdd.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612007/coin_pouch_2_o9p8wm.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612047/coin_pouch_4_cvg6yl.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612085/elephant_keychain_cypfqn.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612130/ajrak_ozkjew.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612154/long_pen_holder_cuwq7y.jpg'],
        },
    ],
    demoHeading: '',
    demoVideo: [''],
    documentHeading: 'Letterhead & Business Card',
    documentDemo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579612328/CorporateIdentity_MockupsForFree_obifgg.jpg',
    ],
    mainVideoPanel: [{
        mainHead: '',
        mainHeadsubText: '',
        mainVideos: "",
    },]
}
var aCFRescue = {
    name: 'ACF Animal Rescue Website',
    desciption: 'Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a website for their cause, as well as photography that would help move their audience and motivate them to do good for the poor animals. They also needed an application for Android that would help them collect data of rescued animals in areas that lack internet connectivity.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579699559/ACF_Image_ygb5f9.jpg'],
    ourRole: 'We were responsible for coming up with the right kind of design for the website that would connect emotionally to the viewers. We built their website. We also did the photography for their website. For the mobile application, we developed a system that could store data without internet connectivity and then uploads it to their server when internet is made available again.',
    technologyUsed: 'The website was created using Wordpress. The mobile application was created using Ant.design, React.Js, Redux-Saga and Firebase.',
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: ['',],
    fontText: '',
    fontFamilyText: [''],
    fontFamily: [''],
    illustration: [
        {
            illustrationText: 'Data Collection Application',
            illustrationSubText: 'The data collection application being used by an ACF worker on site.',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579699563/img_8152_p3wsuj.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579699574/img_8150_kdyq2a.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579699581/img_8160_rrdzzo.jpg',
            ],
        },
        {
            illustrationText: 'Photography',
            illustrationSubText: 'We shot these pictures filled with emotions to help ACF move their audience.',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579701227/IMG_4397_tde6ds.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579701229/IMG_9056_jzjlou.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579701613/IMG_9159_cdmznr.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579701604/IMG_9165_ly5g7n.jpg'
            ],
        },
        {
            illustrationText: 'Product Photography',
            illustrationSubText: 'We photographed ACFs website images and their product photography.',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579700752/IMG_1002_jckxdg.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579700752/IMG_0984_ihidlo.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579700753/IMG_1014_sf8ej9.jpg',
                'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579700760/IMG_0938_hf3txp.jpg'
            ],
        },
    ],
    demoHeading: 'Final Website Videos',
    demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579698702/1_hsmghk.mp4',
        'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579698708/3_qr4mto.mp4'],
    documentHeading: '',
    documentDemo: ['',
    ],
    mainVideoPanel: [{
        mainHead: '',
        mainHeadsubText: '',
        mainVideos: "",
    },]
}
class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            siddiqSons: siddiqSons,
            jicaLightF: jicaLightF,
            aCFRescue: aCFRescue,
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
    }

    render() {
        const { siddiqSons, jicaLightF, aCFRescue, GFAHeading, GFAHeadingBr, DrentHeading, DrentHeadingBr, GFAperaas, Drentperaas, ADBHeading, ADBHeadingBr,
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
                    <div className="col-12 col-md-1 col-xl-1 col-lg-1"></div>
                    <div className="col-11 col-md-5 col-xl-6 col-lg-5">
                        <div className="animatedup animatedFadeInUp fadeInUp">
                            <div className="row" style={{ paddingRight: '0vw' }}>
                                <div className='col-12 col-md-12 col-xl-11 col-lg-11 LightFHomeProject'>
                                    <h2 className="GFAhedngProjects">LIGHT-F Project By JICA & Sindh Gvt</h2>
                                    <div className="row">
                                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                                        <div className="col-12 col-md-12 col-xl-8 col-lg-9 bgChildProject">
                                            <p className="GFApera">
                                            LIGHT-F (started by JICA with Sindh Government) wanted to launch ...
                                            </p>
                                            <Link rel="noopener noreferrer"
                                                to={{ pathname: `/projects`, state: jicaLightF }}
                                                className="changingdec">
                                                <a className="changingdec">
                                                    <p className="GFApera1">
                                                        View Project<img href="#" className="GFAimg" src={require('../../Assets/Images/arrowPurple.png')} />
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
                            </div>
                        </div>
                        <div className="animatedup animatedFadeInUp fadeInUp">
                            <div className="row" style={{ paddingRight: '0vw' }}>
                                <div className='col-12 col-md-12 col-xl-11 col-lg-11 ACFHomeProject'>
                                    <h2 className="GFAhedngProjects">ACF Animal Rescue Website</h2>
                                    <div className="row">
                                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                                        <div className="col-12 col-md-12 col-xl-8 col-lg-9 bgChildProject">
                                            <p className="GFApera">
                                            Ayesha Chundrigar Foundation, an NGO helping out troubled animals ...
                                            </p>
                                            <Link rel="noopener noreferrer"
                                                to={{ pathname: `/projects`, state: aCFRescue }}
                                                className="changingdec">
                                                <a className="changingdec">
                                                    <p className="GFApera1">
                                                        View Project<img href="#" className="GFAimg" src={require('../../Assets/Images/arrowPurple.png')} />
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-xl-4 col-lg-4">
                        <div className="animatedup animatedFadeInUp fadeInUp">
                            <div className="row" style={{ paddingRight: '0vw' }}>
                                <div className='col-11 col-md-12 col-xl-12 col-lg-12 SiddiqHomeProject'>
                                    <h2 className="ADBhedngProject">Siddiqsons Limited Brochure</h2>
                                    <div className="row">
                                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                                        <div className="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-12 ADB_BgChildProject">
                                            <p className="ADBpera">
                                            Siddiqsons needed a brochure that could effectively communicate their ...
                                            </p>
                                            <Link rel="noopener noreferrer"
                                                to={{ pathname: `/projects`, state: siddiqSons }}
                                                className="changingdec">
                                                <a href={this.props.locationUrl} className="changingdec">
                                                    <p className="ADBpera1">
                                                        View Project<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
                            </div>
                        </div>
                        <Link to={`/project`} className="changingdec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12 col-xl-12 vieW_btn">
                                        <p className="arroW_lastesT">View All Projects <img src={Smallarrow} className="" /></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-1 col-xl-1 col-lg-1"></div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="col-11 col-md-5 col-lg-6 col-xl-6">
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 col-xl-4">
                        
                    </div>
                    <div className="col-12 col-md-12 col-lg-1 col-xl-1"></div>
                </div>
                {/* JIca
                        <ProjectContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-11 GFA_BgImg'
                            projctHedng="GFAhedng"
                            hed={GFAHeading}
                            hed1={GFAHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                            projctPera="GFApera"
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera='LIGHT-F (started by JICA with Sindh Government) wanted to launch a program for...'
                            proAeroImg="GFAimg"
                            projectData={jicaLightF}
                        />
                        Acf
                        <ProjectContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DrentBgImg'
                            projctHedng="Drenthedng"
                            hed={DrentHeading}
                            hed1={DrentHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                            projctPera="GFApera"
                            locationUrl={"http://drent1.herokuapp.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera='Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a...'
                            proAeroImg="GFAimg"
                            projectData={aCFRescue}
                        /> */}


                {/* ipad visible
                    <div className="d-none d-md-block d-lg-none d-xl-none col-md-6">
                        JIca
                        <ProjectContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-11 GFA_BgImg'
                            projctHedng="GFAhedng"
                            hed={GFAHeading}
                            hed1={GFAHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                            projctPera="GFApera"
                            locationUrl={"https://getfitathletic.pk/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera='LIGHT-F (started by JICA with Sindh Government) wanted to launch a program for...'
                            proAeroImg="GFAimg"
                            projectData={jicaLightF}
                        />
                        Acf
                        <ProjectContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DrentBgImg'
                            projctHedng="Drenthedng"
                            hed={DrentHeading}
                            hed1={DrentHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChild"
                            projctPera="GFApera"
                            locationUrl={"http://drent1.herokuapp.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera='Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a...'
                            proAeroImg="GFAimg"
                            projectData={aCFRescue}
                        />
                    </div> */}

                {/* mobile visible
                    <div className="d-block d-md-none d-lg-none d-xl-none col-11">
                        JIca
                        <ProjectContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 GFA_BgImgHomeMb'
                            projctHedng="GFAhedng"
                            hed={GFAHeading}
                            hed1={GFAHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChildMb"
                            projctPera="GFApera"
                            locationUrl={"https://getfitathletic.pk/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera='LIGHT-F (started by JICA with Sindh Government) wanted to launch a program for...'
                            proAeroImg="GFAimg"
                            projectData={jicaLightF}
                        />
                        Acf
                        <ProjectContainer
                            projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DrentBgImgHomeMb'
                            projctHedng="Drenthedng"
                            hed={DrentHeading}
                            hed1={DrentHeadingBr}
                            projctChildBox="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 bgChildMb"
                            projctPera="GFApera"
                            locationUrl={"http://drent1.herokuapp.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="GFApera1"
                            pera='Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a...'
                            proAeroImg="GFAimg"
                            projectData={aCFRescue}
                        />
                    </div> */}



                {/* mobile, ipad hidden
                        <ProjectsContainer projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-10 col-lg-10 ADB_HomBgImg'
                            projctHedng="ADBhedngProject"
                            hed={ADBHeading}
                            hed1={ADBHeadingBr}
                            projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
                            projctPera="ADBpera"
                            locationUrl={"https://www.amberdazzle.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="ADBpera1"
                            pera='Siddiqsons needed a brochure that could effectively communicate their...'
                            proAeroImg="ADBimg"
                            projectData={siddiqSons}
                        />

                        ipad visible
                        <ProjectsContainer projctBox='d-none d-md-block d-xl-none d-lg-none col-md-10 ADB_BgImgSmMd'
                            projctHedng="ADBhedng"
                            hed={ADBHeading}
                            hed1={ADBHeadingBr}
                            projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-11 ADB_BgChildMd"
                            projctPera="ADBpera"
                            locationUrl={"https://www.amberdazzle.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="ADBpera1"
                            pera='Siddiqsons needed a brochure that could effectively communicate their new direc...'
                            proAeroImg="ADBimg"
                            projectData={siddiqSons}
                        />
                        mobile visible
                        <ProjectsContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 ADB_BgImgHomeMb'
                            projctHedng="ADBhedngHomeMb"
                            hed={ADBHeading}
                            hed1={ADBHeadingBr}
                            projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ADB_BgChildSmMd"
                            projctPera="ADBpera"
                            locationUrl={"https://www.amberdazzle.com/"}
                            seeAerro={devPeraImg}
                            projctPera1="ADBpera1"
                            pera='Siddiqsons needed a brochure that could effectively communicate their new direc...'
                            proAeroImg="ADBimg"
                            projectData={siddiqSons}
                        /> */}
            </div>
        );
    }
}

export default Project;