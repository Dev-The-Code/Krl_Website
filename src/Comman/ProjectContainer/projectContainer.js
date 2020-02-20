import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Components/Projects/projects.css';

var projects = [
  {
    name: 'LIGHT-F Project By JICA & Sindh Gvt',
    desciption: 'LIGHT-F (started by JICA with Sindh Government) wanted to launch a program for the welfare of women in interior Sindh. They needed to brand the program and needed a brand identity designed.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610272/cover_vjziro.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 LightFProject',
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
        illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866846/coin_pouch_2_kxpins.jpg',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866846/elephant_keychain_ys90go.jpg',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866846/long_pen_holder_fxj97k.jpg',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866846/big_asharfi_small_g9qkyx.jpg',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866847/ajrak_uiktyt.jpg',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579866469/long_pen_holder_xeqle4.jpg'],
      },
    ],
    demoHeading: '',
    demoVideo: [''],
    documentHeading: 'Letterhead & Business Card',
    documentDemo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579864122/jica-identity_ulopt4.jpg',
    ],
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'Drent Branding & Website',
    desciption: 'Drent needed a luxurious website to formally launch their dress rental service in UK for Asian communities. Their focus was making it a personalised brand that would make great impact on their customers.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697423/Asset_1_seshuz.png'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 DrentProject',
    ourRole: 'We designed them a new brand that speaks to the UK community, but at the same time was impactful for the Asian users. We decided to go with a heavily branded website design that would leave its impact on the customers’ minds, while keeping it simple to use.',
    technologyUsed: 'Drents website was created using React.js on frontend and Node.js on backend.',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696864/drent-logo_d0usqb.png'],
    visualidentityLogoText: 'The logo consists of a rhombus shape made out of leaves Ancient Greek kings are known to wear. We chose this symbol and a luxurious serif font to give a royal look.',
    colorpaletteText: 'Since Drent was going with a royal look, we decided to go with a combination of Purple (that represents royalty and wealth) and Gold (because of its association with the precious metal: gold).',
    colorPaletteAllColor: ['#CB9D6C', '#F0D1B2', '#473463', '#2A1F3B', '#353535', '#9B9B9B'],
    fontText: 'We chose Playfair Display and Tajawal for their elegant feel. Being luxurious yet modern, the combo is a perfect fit.',
    fontFamilyText: ['Playfair Display', 'Tajawal'],
    fontFamily: ['Playfair Display', 'Tajawal'],
    illustration: [
      {
        illustrationText: 'Illustrations',
        illustrationSubText: 'We did elegant custom illustrations and icons for the website to go with the luxurious theme of the website.',
        illustrationImages: [
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697139/Asset2_tttcqb.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697139/Asset3_css1fm.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697139/Asset5_beuzti.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697139/Asset1_ofaty8.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697139/Asset4_ai2gmv.png',
        ],
      },
    ],
    demoHeading: 'Drent Final Website',
    demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579698351/1_vqvncd.mp4'],
    documentHeading: '',
    documentDemo: ['',
    ],
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'GetFitAthletic Branding Mobile App & Website',
    desciption: 'A young & ambitious fitness trainer wanted to rebrand his venture, GitFitAthletic. He reached us for a new logo, a mobile application for iPhones and Android devices, and a website.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696454/shutterstock_696813646_1_d90qsc.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 GetFitProject',
    ourRole: 'We designed a brand new logo for GetFitAthletic. Developed a hybrid mobile app for iPhones & Android and a website',
    technologyUsed: 'We used React Native for hybrid mobile app and developed a Wordpress website.',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579693689/logo_1_ni7ufn.png'],
    visualidentityLogoText: 'This logo, with its colors and symbol, captures the energetic, strong and friendly personality of the GetFitAthletic brand.',
    colorpaletteText: 'GetFitAthletic has a young, strong and friendly personality. The combo of orange and black captures it just right.',
    colorPaletteAllColor: ['#FD5F01', '#000000'
    ],
    fontText: 'We chose ChunkFive Roman because of its friendly and strong nature.',
    fontFamilyText: ['Chunk Five Roman'],
    fontFamily: ['ChuckFive-Regular'],
    illustration: [
      {
        illustrationText: 'Mobile App Screens',
        illustrationSubText: 'Our designers worked with the client to come up with an app experience that covers all the business activities and help increase sales and income.',
        illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579872062/009_-_Invoices-01_knb8is.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579872062/004_-_Add_calories-01_xo8v1h.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579872062/006_-_Reports-01_gga7ad.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579872062/001_-_Login-01_fttfgy.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579872063/019_-_Packages-02_akz0u5.jpg',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579872063/003_-_Homescreen_-_User_20-05-02_lkiyos.png'],
      },
    ],
    demoHeading: 'Final Application Video',
    demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579695940/VID1_kg8xfj.mp4'],
    documentHeading: '',
    documentDemo: [''],
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'ACF Animal Rescue Website',
    desciption: 'Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a website for their cause, as well as photography that would help move their audience and motivate them to do good for the poor animals. They also needed an application for Android that would help them collect data of rescued animals in areas that lack internet connectivity.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579864118/acf-cover-img_srzfhp.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 ACFProject',
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
  },
  {
    name: 'Circle Women Merch Design',
    desciption: 'Circle Women, an non-profit organization working for women empowerment, needed merchandise design for their educational event.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705454/christin-hume-Hcfwew744z4-unsplash_dlkimg.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 CircleProject',
    ourRole: 'KRL Creatives researched their brand and event, and came up with interesting and beautiful merch design that would engage their audience and make a mark in their minds.',
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
        illustrationText: 'Merch Design',
        illustrationSubText: 'KRL Creatives designed engaging and impactful merch design for their event.',
        illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705280/Magnet_A_piiqhl.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705280/Magnet_B_obfkku.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705285/Paper_Bag_Mock-Up_Set_02_e0jscq.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705289/close1_fatnwz.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705290/Paper_Bag_Mock-Up_Set_01_farfen.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705304/close2_e0wtca.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579872349/Stickers-09_lh59no.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579872349/Standee-02_wxvzd8.png',
          'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579872349/Circle_Banner-01_oamajd.png',],
      },
    ],
    demoHeading: '',
    demoVideo: [''],
    documentHeading: '',
    documentDemo: [''],
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'Pakjazba Online Portal System',
    desciption: 'Pakjazba is a one stop portal that allows users to buy & sell stuff, book rooms, find jobs and more. It is created for overseas Pakistanis.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579704937/pawel-nolbert-4u2U8EO9OzY-unsplash_jhrdz9.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 PakJazbaProject',
    ourRole: 'KRL Creatives designed and developed this portal and maintain it to manage bug fixes and performance improvements.',
    technologyUsed: 'PakJazba is developed using React.JS and NODE.JS. It uses Amazon for server and database deployment.',
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: [''],
    fontText: '',
    fontFamilyText: [''],
    fontFamily: [''],
    illustration: [
      {
        illustrationText: '',
        illustrationSubText: '',
        illustrationImages: ['']
      },
    ],
    demoHeading: 'Final Portal Videos',
    demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703973/03_dg5fcg.mp4',
      'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703984/04_exnwk9.mp4',
      'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703993/02_qyajzu.mp4',
      'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579704003/01_bn99ch.mp4'
    ],
    documentHeading: '',
    documentDemo: ['',
    ],
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'Ziyarat Branding Website',
    desciption: 'Ziyarat, a Pakistani designer wear retail brand needed a logo for their launch in UK. They also needed an ecommerce website which would help the brand sell.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706873/artem-beliaikin-9Jr9hUzRVhc-unsplash_wao7xo.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 ZiyaratProject',
    ourRole: 'We were responsible for coming up with a logo which would represent their luxury lineup and serve as a strong face for the brand.',
    technologyUsed: '',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706510/Ziyarat-Final_sbrpqx.png'],
    visualidentityLogoText: 'Since Ziyarat needed a premium, traditional yet modern feel for their brand, we gave them a logo with ornaments and a modern font.',
    colorpaletteText: 'We gave Ziyarat a royal combination of Burgundy and Gold that gives it a rich feeling.',
    colorPaletteAllColor: ['#671429', '#E3B16D', '#CE8497'],
    fontText: 'Ziyarat Logo uses San Marino font that is modern and royal.',
    fontFamilyText: ['San Marino'],
    fontFamily: ['San-Marino'],
    illustration: [
      {
        illustrationText: '',
        illustrationSubText: '',
        illustrationImages: [''],
      },
    ],
    demoHeading: 'Final Website Video',
    demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579706642/1_jtphb8.mp4',
      'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579706651/2_zch1v6.mp4'
    ],
    documentHeading: '',
    documentDemo: [''],
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: '',
    },]
  },
  {
    name: 'Oxbridge Video Website',
    desciption: 'Oxbridge, an English training start up, had an innovative approach to training and educational centers. They contacted KRL Creatives to design and develop their website.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579707315/waldemar-brandt-U3Ptj3jafX8-unsplash_osnp6q.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 OxbridgeProject',
    ourRole: 'We were responsible for coming up with a website design that would communicate their innovative approach effectively and could help connect their customers to the young brand.',
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
        illustrationText: '',
        illustrationSubText: '',
        illustrationImages: [''],
      },
    ],
    demoHeading: 'Final Website Video',
    demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707232/1_srkudb.mp4',
      'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707223/2_c2iriy.mp4',

    ],
    documentHeading: '',
    documentDemo: ['',
    ],
    mainVideoPanel: [{
      mainHead: 'Marketing & Video',
      mainHeadsubText: 'KRL Creatives’ marketing department provides consultation to Oxbridge for strengthening their brand and find the right target audience. We also shoot their video podcasts for their website and social media.',
      mainVideos: "https://res.cloudinary.com/dxk0bmtei/video/upload/v1579780552/oxbridge_3_tips_fy9sd2.mp4",
    },]
  },
  {
    name: 'Dallas Palms Website',
    desciption: 'Dallas Palms, a wedding venue in Dallas, wanted to launch their website that could effectively showcase their venues and provide information for their customers.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579774103/dallas-palms_znfrqa.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 DallasPalmProject',
    ourRole: 'KRL Creatives designed and developed their website.',
    technologyUsed: 'This website was built using Wordpress',
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: [''],
    fontText: '',
    fontFamilyText: [''],
    fontFamily: [''],
    illustration: [
      {
        illustrationText: '',
        illustrationSubText: '',
        illustrationImages: [''],
      },
    ],
    demoHeading: 'Final Website Videos',
    demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774405/2_jym2hq.mp4',
      'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774411/6_av7vol.mp4',
      'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774412/4_afbv1d.mp4',
      'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774414/1_jr5o25.mp4',
      'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774414/3_yeogym.mp4',
      'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774419/5_wfpqik.mp4',
    ],
    documentHeading: '',
    documentDemo: ['',
    ],
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'Amber Dazzle Website & TVC',
    desciption: 'Amber Dazzle, an American cosmetics brand, wanted to launch their product lineup in Pakistan. For this, they needed a new website that appealed to the Pakistani audience and communicated the brand’s heritage.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579702268/amber-dazzle-image_egxm3v.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 AmberDazelProject',
    ourRole: 'Our production department videographed models and composed the shots into an appealing TVC. Our designers worked with their product photographs and branding guidelines to design and set up a beautiful and simple to use website on Woocommerce.',
    technologyUsed: 'Wordpress and Woocommerce',
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: [''],
    fontText: '',
    fontFamilyText: [''],
    fontFamily: [''],
    illustration: [
      {
        illustrationText: '',
        illustrationSubText: '',
        illustrationImages: [''],
      },
    ],
    demoHeading: 'Final Website Video',
    demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703499/01_dbtzfq.mp4', 'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703523/02_iyiama.mp4'],
    documentHeading: '',
    documentDemo: ['',
    ],
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    }]
  }
]


class ProjectContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
    }
  }

  componentDidMount() {
    let dataFromHome = this.props.projectStateFromHome;
    console.log("TCL: ProjectContainer -> componentDidMount -> dataFromHome", dataFromHome)
    if(dataFromHome != undefined){
      this.setState({ projects: dataFromHome })
    }
    else{
      this.setState({ projects: projects })
    }
  }

  render() {
    const { projctBox, projctBox1, projctHedng, hed, hed1, projctChildBox, projctPera, pera, projctPera1, proAeroImg, seeAerro } = this.props;
    const { projects } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-12 col-md-1 col-xl-1 col-lg-1"></div>
          <div className="col-12 col-md-10 col-xl-10 col-lg-10 bigProjectLeft" style={{ padding: '0' }}>
            <div className="row">
              {projects.map((elem, key) => {
                if (key % 2 == 0) {
                  return (
                    // <div className="col-11 col-md-5 col-xl-7 col-lg-7 bigProjectLeft">
                    <div className="col-11 col-md-6 col-xl-7 col-lg-7">
                      <div className="animatedup animatedFadeInUp fadeInUp">
                        <div className="row" style={{ paddingRight: '0vw' }}>
                          <div className={elem.frontImg}>
                            <h2 className="GFAhedngProjects">{elem.name}</h2>
                            <div className="row">
                              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                              <div className="col-12 col-md-12 col-xl-8 col-lg-9 bgChildProject">
                                <p className="GFApera">
                                  {elem.desciption.slice(0, 70)}...
                            </p>
                                <Link rel="noopener noreferrer"
                                  to={{ pathname: `/projects`, state: elem }}
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
                  )
                }
                else if (key % 2 == 1) {
                  return (
                    <div className="col-12 col-md-6 col-xl-5 col-lg-5">
                      <div className="animatedup animatedFadeInUp fadeInUp">
                        <div className="row" style={{ paddingRight: '0vw' }}>
                          <div className={elem.frontImg}>
                            <h2 className="ADBhedngProject">{elem.name}</h2>
                            <div className="row">
                              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                              <div className="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-12 ADB_BgChildProject">
                                <p className="ADBpera">
                                  {elem.desciption.slice(0, 80)}...
                            </p>
                                <Link rel="noopener noreferrer"
                                  to={{ pathname: `/projects`, state: elem }}
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
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className="col-12 col-md-1 col-xl-1 col-lg-1"></div>
        </div>
        {/* <div className="animatedup animatedFadeInUp fadeInUp">
          <div className="row" style={{ paddingRight: '0vw' }}>
            <div className={projctBox1}></div>
            <div className={projctBox}>
              <h2 className={projctHedng}>{hed}<br />{hed1}</h2>
              <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                <div className={projctChildBox}>
                  <p className={projctPera}>
                    {pera}
                  </p>
                  <Link rel="noopener noreferrer"
                    to={{ pathname: `/projects`, state: projectData }}
                    className="changingdec">
                    <a href={this.props.locationUrl} className="changingdec">
                      {seeAerro ? <p className={projctPera1}>
                        View Project<img href="#" className={proAeroImg} src={require('../../Assets/Images/arrowPurple.png')} />
                      </p>
                        : null}
                    </a></Link>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
          </div>
        </div> */}
      </div>

    );
  }
}

export default ProjectContainer;
