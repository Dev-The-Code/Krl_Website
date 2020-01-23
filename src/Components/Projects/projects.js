import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import Header2 from '../Header/header2';
import ProjectContainer from '../../Comman/ProjectContainer/projectContainer';
import SeeProject from '../ContactPage/SeeProject/seeProject';
import Founder from '../../Comman/Founders/founders';
import Banners from '../ServicesPage/banners';
import Modal from './projectModal';
import { smart } from '@babel/template';

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
var getFit = {
  name: 'GetFitAthletic Branding Mobile App & Website',
  desciption: 'A young & ambitious fitness trainer wanted to rebrand his venture, GitFitAthletic. He reached us for a new logo, a mobile application for iPhones and Android devices, and a website.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696454/shutterstock_696813646_1_d90qsc.jpg'],
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
      illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579694325/001_-_Login-01_csnj9x.png',
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579694325/004_-_Add_calories-01_l8ho45.png',
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579694325/008_B_-_Chat_Errors-10_lwyzye.png',
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579694325/009_-_Invoices-01_blam9c.png',
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579694325/014_-_Coach_Profile-01_fg2rxj.png',
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579694325/003_-_Homescreen_-_User_20-05-02_izsbwi.png'],
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
}
var drentBrand = {
  name: 'Drent Branding & Website',
  desciption: 'Drent needed a luxurious website to formally launch their dress rental service in UK for Asian communities. Their focus was making it a personalised brand that would make great impact on their customers.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697423/Asset_1_seshuz.png'],
  ourRole: 'We designed them a new brand that speaks to the UK community, but at the same time was impactful for the Asian users. We decided to go with a heavily branded website design that would leave its impact on the customers’ minds, while keeping it simple to use.',
  technologyUsed: 'Drents website was created using React.js on frontend and Node.js on backend.',
  visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696864/drent-logo_d0usqb.png'],
  visualidentityLogoText: 'The logo consists of a rhombus shape made out of leaves Ancient Greek kings are known to wear. We chose this symbol and a luxurious serif font to give a royal look.',
  colorpaletteText: 'Since Drent was going with a royal look, we decided to go with a combination of Purple (that represents royalty and wealth) and Gold (because of its association with the precious metal: gold).',
  colorPaletteAllColor: ['#CB9D6C', '#F0D1B2', '#473463', '#2A1F3B', '#353535','#9B9B9B'],
  fontText: 'We chose Playfair Display and Tajawal for their elegant feel. Being luxurious yet modern, the combo is a perfect fit.',
  fontFamilyText: ['Playfair Display','Tajawal'],
  fontFamily: ['Playfair Display','Tajawal'],
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
var pakJazba = {
  name: 'Pakjazba Online Portal System',
  desciption: 'Pakjazba is a one stop portal that allows users to buy & sell stuff, book rooms, find jobs and more. It is created for overseas Pakistanis.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579704937/pawel-nolbert-4u2U8EO9OzY-unsplash_jhrdz9.jpg'],
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
}
var circleWomen = {
  name: 'Circle Women Merch Design',
  desciption: 'Circle Women, an non-profit organization working for women empowerment, needed merchandise design for their educational event.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705454/christin-hume-Hcfwew744z4-unsplash_dlkimg.jpg'],
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
        'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705304/close2_e0wtca.png'],
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
}
var oxBridge = {
  name: 'Oxbridge Video Website',
  desciption: 'Oxbridge, an English training start up, had an innovative approach to training and educational centers. They contacted KRL Creatives to design and develop their website.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579707315/waldemar-brandt-U3Ptj3jafX8-unsplash_osnp6q.jpg'],
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
}
var ziyaratBrand = {
  name: 'Ziyarat Branding Website',
  desciption: 'Ziyarat, a Pakistani designer wear retail brand needed a logo for their launch in UK. They also needed an ecommerce website which would help the brand sell.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706873/artem-beliaikin-9Jr9hUzRVhc-unsplash_wao7xo.jpg'],
  ourRole: 'We were responsible for coming up with a logo which would represent their luxury lineup and serve as a strong face for the brand.',
  technologyUsed: '',
  visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706510/Ziyarat-Final_sbrpqx.png'],
  visualidentityLogoText: 'Since Ziyarat needed a premium, traditional yet modern feel for their brand, we gave them a logo with ornaments and a modern font.',
  colorpaletteText: 'We gave Ziyarat a royal combination of Burgundy and Gold that gives it a rich feeling.',
  colorPaletteAllColor: ['#671429','#E3B16D','#CE8497'],
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
}
var dallasPalm = {
  name: 'Dallas Palms Website',
  desciption: 'Dallas Palms, a wedding venue in Dallas, wanted to launch their website that could effectively showcase their venues and provide information for their customers.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579774103/dallas-palms_znfrqa.jpg'],
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
}
var AmberDazzel = {
  name: 'Amber Dazzle Website & TVC',
  desciption: 'Amber Dazzle, an American cosmetics brand, wanted to launch their product lineup in Pakistan. For this, they needed a new website that appealed to the Pakistani audience and communicated the brand’s heritage.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579702268/amber-dazzle-image_egxm3v.jpg'],
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
  demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703499/01_dbtzfq.mp4','https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703523/02_iyiama.mp4'],
  documentHeading: '',
  documentDemo: ['',
                 ],
  mainVideoPanel: [{
    mainHead: '',
    mainHeadsubText: '',
    mainVideos: "",
  },]
}
class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      siddiqSons: siddiqSons,
      jicaLightF: jicaLightF,
      getFit: getFit,
      drentBrand: drentBrand,
      aCFRescue: aCFRescue,
      pakJazba: pakJazba,
      circleWomen: circleWomen,
      oxBridge: oxBridge,
      ziyaratBrand: ziyaratBrand,
      dallasPalm: dallasPalm,
      AmberDazzel:AmberDazzel,

      banrPeragh: 'KRL Creatives covers you for all digital assets your brand needs to serve your audience well.',
      banrPeragh1: 'We design, develop and produce.',
      headingpera: 'Siddiqsons',
      headingpera1: 'Limited',
      headingpera2: ' Brochure',
      banFuturPro: 'Featured project',
      devPeraImg: true,
      devParagraph: false,
      ViewPro: true
    }
  }
  componentWillMount() {
    let data = this.props.location.pathname;
    let routName;
    routName = data.slice(1);
    routName = routName.charAt(0).toUpperCase() + routName.slice(1);
    //  console.log(routName,'sss');
    this.setState({ headerPath: routName });
    window.scrollTo(0, 0)
  }

  render() {
    const { GFAperaas, devPeraImg, headingpera, headingpera1, headingpera2, banFuturPro, ViewPro, headerPath,
      siddiqSons, jicaLightF, getFit, drentBrand, aCFRescue, pakJazba, circleWomen, oxBridge, ziyaratBrand, dallasPalm,AmberDazzel
    } = this.state
    // console.log(siddiqSons, 'siddiqSons')
    return (

      <div className="all_backgrundImageAfter animateFadeIn">
        <Header2 headerPath={headerPath} headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" />
        <div className="row">
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
          <div className="d-none d-md-none d-lg-block d-xl-block col-xl-10 col-lg-10" style={{ paddingRight: "0vw", paddingLeft: '0vw' }}>
            {/*hidden mobile tablet ipad */}
            <div className="col-xl-12 col-lg-12 d-none d-sm-none d-md-none d-xl-block d-lg-block" style={{ paddingRight: "0vw", paddingLeft: '0vw' }}>
              <Banners
                // locationUrl={"https://www.acfanimalrescue.org/"}
                banrs="row ban"
                devChld="col-xl-5 col-lg-5 banDev"
                peraDev="banPeraDev"
                peraChld="banPera"
                banPera={banFuturPro}
                hedPera="banHedng"
                banhedng={headingpera}
                hedPera1="banHedng1"
                banhedng1={headingpera2}
                devChild1="col-xl-7 col-lg-7 SiddiqSonsDeskstop"
                banPera1="banPera1"
                hedPera2="banHedng2"
                banhedng2={headingpera1}
                devChld1="col-xl-7 col-lg-7 banChildDev"
                devChld2="col-xl-4 col-lg-4 banChildDev1"
                projectData={siddiqSons}

                seeAerro={devPeraImg}
                projctPera1="BanrPera1"
                pera={GFAperaas}
                proAeroImg="BanPeraimg"
                devChld3="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 banChildDev2"
              />
            </div>
          </div>
          <div className="d-none d-md-block d-lg-none d-xl-none col-md-10" style={{ paddingRight: "0vw", paddingLeft: '0vw' }}>
            <div className="col-md-12 d-none d-md-block d-lg-none d-xl-none" style={{ paddingRight: "0vw", paddingLeft: '0vw' }}>
              <Banners
                // locationUrl={"https://www.acfanimalrescue.org/"}
                banrs="row banSmall"
                devChld="col-md-5 col-sm-5 col-5 banDevSmall"
                peraDev="banPeraDevsmall"
                peraChld="banPeraSmall"
                banPera={banFuturPro}
                hedPera="banHedngSmall"
                banhedng={headingpera}
                hedPera1="banHedng1Small"
                banhedng1={headingpera2}
                devChild1="col-md-7 col-sm-7 col-7 SiddiqSonsTablet"
                banPera1="banPera1Small"
                hedPera2="banHedng2Small"
                banhedng2={headingpera1}
                devChld1="col-md-5 col-sm-5 col-3 banChildDevSmall"
                devChld2="col-md-6 col-sm-6 col-7 banChildDev1Small"
                projectData={siddiqSons}

                seeAerro={devPeraImg}
                projctPera1="BanrPera1Mb"
                pera={GFAperaas}
                proAeroImg="BanPeraimg"
                devChld3="col-md-1 col-sm-1 col-1 banChildDev2Small"
              />
            </div>
          </div>
          <div className="d-block d-md-none d-lg-none d-xl-none col-12" style={{ paddingLeft: '0vw', marginTop: '40vw' }}>
            <div className="col-12 d-block d-md-none d-lg-none d-xl-none">
              <Banners
                // locationUrl={"https://www.acfanimalrescue.org/"}
                banrs="row banSmall"
                devChld="col-md-5 col-sm-5 col-5 banDevSmall"
                peraDev="banPeraDevsmall"
                peraChld="banPeraSmall"
                banPera={banFuturPro}
                hedPera="banHedngSmall"
                banhedng={headingpera}
                hedPera1="banHedng1Small"
                banhedng1={headingpera2}
                devChild1="col-md-7 col-sm-7 col-7 SiddiqSonsMobile"
                banPera1="banPera1Small"
                hedPera2="banHedng2Small"
                banhedng2={headingpera1}
                devChld1="col-md-5 col-sm-5 col-3 banChildDevSmall"
                devChld2="col-md-6 col-sm-6 col-7 banChildDev1Small"
                projectData={siddiqSons}

                seeAerro={devPeraImg}
                projctPera1="BanrPera1Mb"
                pera={GFAperaas}
                proAeroImg="BanPeraimg"
                devChld3="col-md-1 col-sm-1 col-1 banChildDev2Small"
              />
            </div>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>


          {/*peraChld="childPera"
                banPera={banrPeragh}
                banPera1={banrPeragh1} */}

          <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

          <div className="d-none d-md-none d-lg-block d-xl-block col-xl-6 col-lg-6" style={{ marginTop: '21vw' }}>

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 LightFDesktop'
              projctHedng="GFAhedng"
              locationUrl={""}
              hed='LIGHT-F Project By'
              hed1='JICA & Sindh Gvt'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"

              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='LIGHT-F (started by JICA with Sindh Government) wanted to launch a program fo...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={jicaLightF}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 GetFitDesktop'
              projctHedng="Drenthedng"
              hed='GetFitAthletic Branding'
              hed1='Mobile App & Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='A young & ambitious fitness trainer wanted to rebrand his venture, GitFitAthleti...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={getFit}
            />

            <Founder />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 CircleDesktop'
              projctHedng="GFAhedng"
              hed='Circle Women Merch'
              hed1='Design'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Circle Women, an non-profit organization working for women empowerment, neede...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={circleWomen}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 ZiyaratDesktop'
              projctHedng="Drenthedng"
              hed='Ziyarat Branding'
              hed1='Websites'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Ziyarat, a Pakistani designer wear retail brand needed a logo for their launch i...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={ziyaratBrand}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DallasPalmDesktop'
              projctHedng="Drenthedng"
              hed='Dallas Palms'
              hed1='Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Dallas Palms, a wedding venue in Dallas, wanted to launch their website that co...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={dallasPalm}

            />

          </div>


          {/*ipad visible */}

          <div className="d-none d-md-block col-lg-none d-xl-none col-md-5" style={{ marginTop: '21vw' }}>
            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 LightFTablet'
              projctHedng="GFAhedng"
              hed='LIGHT-F Project By'
              hed1='JICA & Sindh Gvt'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='LIGHT-F (started by JICA with Sindh Government) wanted to launch a program fo...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={jicaLightF}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 GetFitTablet'
              projctHedng="Drenthedng"
              hed='GetFitAthletic Branding'
              hed1='Mobile App & Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='A young & ambitious fitness trainer wanted to rebrand his venture, GitFitAthleti...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={getFit}
            />

            <Founder />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 CircleTablet'
              projctHedng="GFAhedng"
              hed='Circle Women Merch'
              hed1='Design'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Circle Women, an non-profit organization working for women empowerment, neede...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={circleWomen}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 ZiyaratTablet'
              projctHedng="Drenthedng"
              hed='Ziyarat Branding'
              hed1='Websites'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Ziyarat, a Pakistani designer wear retail brand needed a logo for their launch i...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={ziyaratBrand}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DallasPalmTablet'
              projctHedng="Drenthedng"
              hed='Dallas Palms'
              hed1='Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChild"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Dallas Palms, a wedding venue in Dallas, wanted to launch their website that co...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={dallasPalm}
            />

          </div>

          {/*mobile visible */}

          <div className="d-block d-md-none d-lg-none d-xl-none col-11" style={{ marginTop: '21vw', marginLeft: '4.3vw' }}>

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 LightFMobiLe'
              projctHedng="GFAhedng"
              hed='LIGHT-F Project By'
              hed1='JICA & Sindh Gvt'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='LIGHT-F (started by JICA with Sindh Government) wanted to launch a program fo...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={jicaLightF}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 GetFitMobiLe'
              projctHedng="Drenthedng"
              hed='GetFitAthletic Branding'
              hed1='Mobile App & Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='A young & ambitious fitness trainer wanted to rebrand his venture, GitFitAthleti...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={getFit}
            />

            <Founder />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 CircleMobiLe'
              projctHedng="GFAhedng"
              hed='Circle Women Merch'
              hed1='Design'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Circle Women, an non-profit organization working for women empowerment, neede...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={circleWomen}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 ZiyaratMobiLe'
              projctHedng="Drenthedng"
              hed='Ziyarat Branding'
              hed1='Websites'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Ziyarat, a Pakistani designer wear retail brand needed a logo for their launch i...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={ziyaratBrand}
            />

            <ProjectContainer projctBox='col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 DallasPalmMobiLe'
              projctHedng="Drenthedng"
              hed='Dallas Palms'
              hed1='Website'
              projctChildBox="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 bgChildMb"
              projctPera="GFApera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="GFApera1"
              pera='Dallas Palms, a wedding venue in Dallas, wanted to launch their website that co...'
              proAeroImg="GFAimg"
              ViewPro={ViewPro}
              projectData={dallasPalm}
            />

          </div>



          <div className="col-xl-5 col-lg-5 col-md-5 col-12 ">

            {/*mobile, ipad hidden*/}
            <ProjectContainer projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-9 col-lg-9 DrentDesktop'
              projctBox1="col-xl-1 col-lg-1 d-none d-sm-none d-md-none d-lg-block dxl-block"
              projctHedng="ADBhedng"
              hed="Drent Branding"
              hed1='& Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Drent needed a luxurious website to formally launch their dress rental servic...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={drentBrand}
            />
            {/*ipad visible*/}
            <div className="row">
              <ProjectContainer projctBox='d-none d-sm-block d-md-block d-xl-none d-lg-none DrentTablet'
                projctHedng="ADBhedngSmMd"
                hed="Drent Branding"
                hed1='& Website'
                projctChildBox="col-xl-12 col-lg-12 col-md-12 col-11 ADB_BgChildMd"
                projctPera="ADBpera"
                locationUrl={""}
                seeAerro={devPeraImg}
                projctPera1="ADBpera1"
                pera='Drent needed a luxurious website to formally launch their dress rental servic...'
                proAeroImg="ADBimg"
                ViewPro={ViewPro}
                projectData={drentBrand}
              />
            </div>
            {/*mobile visible*/}
            <div className="row">
              <ProjectContainer projctBox='d-block d-sm-none d-md-none d-xl-none d-lg-none col-11 DrentMobiLe'
                projctHedng="ADBhedngMb"
                hed="Drent Branding"
                hed1='& Website'
                projctChildBox="col-xl-12 col-lg-12 col-md-11 col-12 ADB_BgChildSmMd"
                projctPera="ADBpera"
                locationUrl={""}
                seeAerro={devPeraImg}
                projctPera1="ADBpera1"
                pera='Drent needed a luxurious website to formally launch their dress rental servic...'
                proAeroImg="ADBimg"
                ViewPro={ViewPro}
                projectData={drentBrand}
              />
            </div>


            {/*mobile, ipad hidden*/}
            <ProjectContainer projctBox1="col-xl-1 col-lg-1 d-none d-sm-none d-md-none d-lg-block d-xl-block"
              projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-9 col-lg-9 ACFDesktopTab'
              projctHedng="ADBhedng"
              hed='ACF Animal'
              hed1='Rescue Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 DPW_BgChild"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a websi...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={aCFRescue}
            />
            {/*ipad visible*/}
            <ProjectContainer projctBox='d-none d-md-block d-xl-none d-lg-none ACFDesktopTab'
              projctHedng="ADBhedngSmMd"
              hed='ACF Animal'
              hed1='Rescue Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-11 DPW_BgChildMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a websi...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={aCFRescue}
            />
            {/*mobile visible*/}
            <ProjectContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 ACFMobiLe'
              projctHedng="ADBhedngSmMd"
              hed='ACF Animal'
              hed1='Rescue Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-12 DPW_BgChildSmMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Ayesha Chundrigar Foundation, an NGO helping out troubled animals, needed a websi...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={aCFRescue}
            />



            {/*mobile, ipad hidden*/}
            <ProjectContainer projctBox1="col-xl-1 col-lg-1 d-none d-sm-none d-md-none d-lg-block dxl-block"
              projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-9 col-lg-9 PakJazbaDesktopTab'
              projctHedng="ADBhedng"
              hed='Pakjazba Online'
              hed1='Portal System'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Pakjazba is a one stop portal that allows users to buy & sell stuff, book room...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={pakJazba}
            />
            {/*ipad visible*/}
            <ProjectContainer projctBox='d-none d-md-block d-xl-none d-lg-none col-md-12 PakJazbaDesktopTab'
              projctHedng="ADBhedngSmMd"
              hed='Pakjazba Online'
              hed1='Portal System'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-11 ODW_BgChildMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Pakjazba is a one stop portal that allows users to buy & sell stuff, book room...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={pakJazba}
            />
            {/*mobile visible*/}
            <ProjectContainer projctBox='d-block d-sm-none d-md-none d-xl-none d-lg-none col-11 PakJazbaMobiLe'
              projctHedng="ADBhedngSmMd"
              hed='Pakjazba Online'
              hed1='Portal System'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-12 ODW_BgChildSmMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Pakjazba is a one stop portal that allows users to buy & sell stuff, book room...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={pakJazba}
            />

            

            {/*mobile, ipad hidden*/}
            <ProjectContainer projctBox1="col-xl-1 col-lg-1 d-none d-sm-none d-md-none d-lg-block dxl-block"
              projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-9 col-lg-9 OxbridgeDesktopTab'
              projctHedng="ADBhedng"
              hed='Oxbridge Video,'
              hed1='Social Media & Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Oxbridge, an English training start up, had an innovative approach to trainin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={oxBridge}
            />
            {/*ipad visible*/}
            <ProjectContainer projctBox='d-none d-sm-block d-md-block d-xl-none d-lg-none col-md-12 OxbridgeDesktopTab'
              projctHedng="ADBhedngSmMd"
              hed='Oxbridge Video,'
              hed1='Social Media & Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-11 ODW_BgChildMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Oxbridge, an English training start up, had an innovative approach to trainin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={oxBridge}
            />
            {/*mobile visible*/}
            <ProjectContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 OxbridgeMobiLe'
              projctHedng="ADBhedngSmMd"
              hed='Oxbridge Video,'
              hed1='Social Media & Website'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-12 ODW_BgChildSmMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Oxbridge, an English training start up, had an innovative approach to trainin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={oxBridge}
            />


            {/*mobile, ipad hidden*/}
            <ProjectContainer projctBox1="col-xl-1 col-lg-1 d-none d-sm-none d-md-none d-lg-block dxl-block"
              projctBox='d-none d-sm-none d-md-none d-lg-block dxl-block col-xl-9 col-lg-9 AmberDazelDesktopTab'
              projctHedng="ADBhedng"
              hed='Amber Dazzel'
              hed1='Website & TVC'
              projctChildBox="col-xl-12 col-lg-12 col-md-11 col-sm-11 col-11 ADB_BgChild"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Amber Dazzle, an American cosmetics brand, wanted to launch their product lin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={AmberDazzel}
            />
            {/*ipad visible*/}
            <ProjectContainer projctBox='d-none d-sm-block d-md-block d-xl-none d-lg-none col-md-12 AmberDazelDesktopTab'
              projctHedng="ADBhedngSmMd"
              hed='Amber Dazzel'
              hed1='Website & TVC'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-11 ODW_BgChildMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Amber Dazzle, an American cosmetics brand, wanted to launch their product lin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={AmberDazzel}
            />
            {/*mobile visible*/}
            <ProjectContainer projctBox='d-block d-md-none d-xl-none d-lg-none col-11 AmberDazelMobiLe'
              projctHedng="ADBhedngSmMd"
              hed='Amber Dazzel'
              hed1='Website & TVC'
              projctChildBox="col-xl-12 col-lg-12 col-md-12 col-12 ODW_BgChildSmMd"
              projctPera="ADBpera"
              locationUrl={""}
              seeAerro={devPeraImg}
              projctPera1="ADBpera1"
              pera='Amber Dazzle, an American cosmetics brand, wanted to launch their product lin...'
              proAeroImg="ADBimg"
              ViewPro={ViewPro}
              projectData={AmberDazzel}
            />


          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12"></div>
        </div>


        <Link to={`/contact`} className="changingColor">
          <div className="row proSeeFotr">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2"></div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">{/*seeBckColr="proSeeFotr" ye class or css use hogi*/}
              <SeeProject
                roWalign='row ReW_home'
                se_Text="seProFotr_text"
                se_Text1="largeProFotr_text"
                seeText="Like what you see?"
                lrgText="Send a request "
                lgBrText=""
                arrow_Right="arrowRight1_ProjeCT"
              />
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12"></div>
          </div>
        </Link>


      </div>
    );
  }
}

export default Projects;

// banrs="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 banDev"
// banrsChldDev="row banProChildDev"
// devChld="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 childProDev1"

// seeAerro={devPeraImg}
// devChld1="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 chilDev2"
// devChldPera1="childProhedng"
// hedPera={headingpera}
// colrHed="colrhedng"
// hedPera1={headingpera1} 
// hedPera2={headingpera2}