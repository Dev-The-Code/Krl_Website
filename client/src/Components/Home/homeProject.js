import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Smallarrow from '../../Assets/Images/latest-post-arrow.png';
import Header from '../Header/header2';
import ProjectContainer from '../../Comman/ProjectContainer/projectContainer';

var siddiqSons = {
    name: 'Siddiqsons Limited Brochure',
    desciption: 'Siddiqsons Limited, the pioneer of the denim industry in Pakistan, was in need of a magazine to effectively communicate their strategic direction to begin environmentally friendly denim manufacturing and production.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586850138/Siddiqsons-min_vbeqf3.png'],
    ourRole: 'KRL Creatives was responsible for the creative direction and design execution of this campaign. We were behind the creative and visual strategies that went into the production of the videos and magazine that were to communicate the story and success of the denim giant.',
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 SiddiqSonsProject',
    technologyUsed: '',
    design: [
        {
            visualidentityLogo: [''],
            visualidentityLogoText: '',
            colorpaletteText: '',
            colorPaletteAllColor: [''],
            fontText: '',
            fontFamilyText: [''],
            fontFamily: [''],
        },
        {
            documentHeading: 'Brochure Design',
            documentDemo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579864122/iteration_2_a_abk0ic.jpg',
            ],
        },
        {
            demoHeading: 'Final Printed Brochure',
            demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579702459/VID2_nmkc9u.mp4'],
        },
        {
            illustration: [
                {
                    illustrationText: '',
                    illustrationSubText: '',
                    illustrationImages: [''],
                },
            ],
        },
        {
            pdfPanelHeading: 'Final Magazine',
            pdfPanelSubText: 'This is the final design of the magazine that Siddiqsons Ltd used for their marketing.',
            pdfPanelFile: 'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586862241/Siddiqsons_Magazines_c64how.pdf',
        },
    ],
    production: [
        {
            illustration: [
                {
                    illustrationText: 'Photography',
                    illustrationSubText: 'Our team played around with various light sources whilst covering Siddiqsons’ new infrastructure, machinery and manufacturing processes. We made sure to highlight the innovative processes to bring forward their message of sustainability.',
                    illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687745/2_-pathway_plhjlc.jpg',
                        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687782/10_-_washing_axkjqd.jpg',
                        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687815/18_-_quality_assurance_eusdgz.jpg',
                        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687823/6_-_two_side_laser_uueepf.jpg',
                        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687830/15_-_Ozone_Machine_ddgl3d.jpg',
                        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687847/8_-_single_side_laser_vrkktf.jpg'],
                },
            ],
        },
        {
            mainVideoPanel: [
                {
                    mainHead: '',
                    mainHeadsubText: '',
                    mainVideos: "",
                }
            ],
        }
    ],
    marketing: [],
    development: [],
    consultation: [],
    training: [],
    mainVideoPanel: [{
        mainHead: '',
        mainHeadsubText: '',
        mainVideos: "",
    }]
}
var jicaLightF = {
    name: 'LIGHT-F Project By JICA & Sindh Gvt',
    desciption: 'LIGHT-F (founded by JICA in association with the Sindh Government) aimed to launch a program working towards the welfare of rural women in interior Sindh. They were in need of a brand identity and approached KRL. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586850185/cover-min_chq6br.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 LightFProject',
    ourRole: 'KRL Creatives designed a visual representation for their brand, thus giving them a brand identity by creating various materials such as letterheads, certificates and brand guidelines. In addition, our design and production teams worked together to create their product catalogue.',
    technologyUsed: '',
    design: [
        {
            visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610909/light-f-logo_lpqdtl.png'],
            visualidentityLogoText: 'The LIGHT-F logo is a word mark. It incorporates a torch facing upwards which symbolises life, truth and the regenerative quality of a flame.',
            colorpaletteText: 'Purple was chosen to depict ambition and bringing about change. The complementary orange demonstrates the energy of the brand. ',
            colorPaletteAllColor: ['#662D91', '#F58441', '#912F6C', '#FFC907', '#CCAED3',],
            fontText: 'The font chosen for LIGHT-F has a clean look which shows the openness and maturity of the brand. ',
            fontFamilyText: ['Nunito Sans'],
            fontFamily: ['Nunito Sans'],
        },
        {
            documentHeading: 'Letterhead & Business Card',
            documentDemo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586949529/Perspective_Business_Cards_MockUp_2-min_awooti.png'],
        },
        {
            demoHeading: '',
            demoVideo: [''],
        },
        {
            illustration: [
                {
                    illustrationText: '',
                    illustrationSubText: '',
                    illustrationImages: [''],
                },
            ],
        },
        {
            pdfPanelHeading: 'Final Product Catalog',
            pdfPanelSubText: 'This is the final product catalog that JICA used for selling creators stock.',
            pdfPanelFile: 'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586862220/Catalogue_Bright_Print_compressed_mlrqxp.pdf',
        },
    ],
    production: [
        {
            illustration: [
                {
                    illustrationText: 'Product Photography',
                    illustrationSubText: 'Product photography for the LIGHT-F handcrafted gift catalogue.',
                    illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866846/coin_pouch_2_kxpins.jpg',
                        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866846/elephant_keychain_ys90go.jpg',
                        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866846/long_pen_holder_fxj97k.jpg',
                        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866846/big_asharfi_small_g9qkyx.jpg',
                        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866847/ajrak_uiktyt.jpg',
                        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866469/long_pen_holder_xeqle4.jpg'],
                }
            ],
        },
        {
            mainVideoPanel: [
                {
                    mainHead: 'Video Production',
                    mainHeadsubText: 'we recorded video interviews in rural Sindh for the social media of JICA',
                    mainVideos: "https://www.youtube.com/embed/G7EFYUhVieQ",
                },
                {
                    mainHead: 'Video Production',
                    mainHeadsubText: 'we recorded video interviews in rural Sindh for the social media of JICA',
                    mainVideos: "https://www.youtube.com/embed/qGvrDh7RvZ0",
                },
            ],
        }
    ],
    marketing: [],
    development: [],
    consultation: [],
    training: [],
    mainVideoPanel: [
        {
            mainHead: '',
            mainHeadsubText: '',
            mainVideos: "",
        }
    ]
}
var aCFRescue = {
    name: 'ACF Animal Rescue Website',
    desciption: 'Ayesha Chundrigar Foundation, an NGO coming to the aid of troubled animals, needed a website for their cause as well as photography that would help move their audience and motivate them to join in on their cause. They were in need of a mobile application that would help collect the data of rescued animals in areas where internet connectivity was unavailable. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579864118/acf-cover-img_srzfhp.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 ACFProject',
    ourRole: 'We were responsible for coming up with the right kind of design for the website that would connect emotionally to their viewers. KRL Creatives was behind the lens for ACF’s website photography. ',
    technologyUsed: 'The website was built using Wordpress. For the Android mobile application, we used Ant.design, React.JS, Redux-Saga and Firebase to develop a system that could store data offline and then upload it to ACF’s server once an internet connection was available.',
    development: [
      {
        demoHeading: 'Final Website Videos',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579698702/1_hsmghk.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579698708/3_qr4mto.mp4'],
      },
      {
        illustration: [
          {
            illustrationText: 'Data Collection Application',
            illustrationSubText: 'The data collection application being used by an ACF worker on site.',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579699563/img_8152_p3wsuj.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579699574/img_8150_kdyq2a.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579699581/img_8160_rrdzzo.jpg',
            ],
          },
        ],
      },
    ],
    production: [
      {
        illustration: [
          {
            illustrationText: 'Photography',
            illustrationSubText: 'We made sure to capture raw and genuine emotions through our photography to help captivate the ACF audience. ',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579701227/IMG_4397_tde6ds.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579701229/IMG_9056_jzjlou.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579701613/IMG_9159_cdmznr.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579701604/IMG_9165_ly5g7n.jpg'
            ],
          },
          {
            illustrationText: 'Product Photography',
            illustrationSubText: 'Our product photography highlighted the colourful new line of environmentally friendly leashes being produced by ACF. ',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579700752/IMG_1002_jckxdg.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579700752/IMG_0984_ihidlo.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579700753/IMG_1014_sf8ej9.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579700760/IMG_0938_hf3txp.jpg'
            ],
          },
        ],
      },
      {
        mainVideoPanel: [
          {
            mainHead: '',
            mainHeadsubText: '',
            mainVideos: "",
          }
        ],
      }
    ],
    marketing: [],
    design: [],
    consultation: [],
    training: [],
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: ['',],
    fontText: '',
    fontFamilyText: [''],
    fontFamily: [''],
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
                                                LIGHT-F (founded by JICA in association with the Sindh governe...
                                            </p>
                                            <Link rel="noopener noreferrer"
                                                to={{ pathname: `/project`, state: jicaLightF }}
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
                                                Ayesha Chundrigar Foundation, an NGO coming to the aid of troub...
                                            </p>
                                            <Link rel="noopener noreferrer"
                                                to={{ pathname: `/project`, state: aCFRescue }}
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
                                                Siddiqsons Limited, the pioneer of the denim industry in Pakista...
                                            </p>
                                            <Link rel="noopener noreferrer"
                                                to={{ pathname: `/project`, state: siddiqSons }}
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
                        <Link to={`/projects`} className="changingdec">
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
            </div>
        );
    }
}

export default Project;