import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Components/ServicesPage/servicesPage.css';
import ProjectContainer from '../../Comman/ProjectContainer/projectContainer';

var marketing = [
  {
    name: 'LIGHT-F Project By JICA & Sindh Gvt',
    desciption: 'LIGHT-F (founded by JICA in association with the Sindh Government) aimed to launch a program working towards the welfare of rural women in interior Sindh. They were in need of a brand identity and approached KRL. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610272/cover_vjziro.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 LightFProject',
    ourRole: 'KRL Creatives designed a visual representation for their brand, thus giving them a brand identity by creating various materials such as letterheads, certificates and brand guidelines. In addition, our design and production teams worked together to create their product catalogue.',
    technologyUsed: '',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610909/light-f-logo_lpqdtl.png'],
    visualidentityLogoText: 'The LIGHT-F logo is a word mark. It incorporates a torch facing upwards which symbolises life, truth and the regenerative quality of a flame.',
    colorpaletteText: 'Purple was chosen to depict ambition and bringing about change. The complementary orange demonstrates the energy of the brand. ',
    colorPaletteAllColor: ['#662D91', '#F58441', '#912F6C', '#FFC907', '#CCAED3',],
    fontText: 'The font chosen for LIGHT-F has a clean look which shows the openness and maturity of the brand. ',
    fontFamilyText: ['Nunito Sans'],
    fontFamily: ['Nunito Sans'],
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
    name: 'Oxbridge Video Website',
    desciption: 'Oxbridge, an English training startup, had an innovative approach to training and educational centres. They contacted KRL Creatives to design and develop their website.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579707315/waldemar-brandt-U3Ptj3jafX8-unsplash_osnp6q.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 OxbridgeProjectHomMartService',
    ourRole: 'We were responsible for coming up with a website design that would communicate their innovative approach effectively and could help connect their customers to the young brand. ',
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
      mainHeadsubText: 'KRL Creatives’ marketing department consults with Oxbridge to help strengthen their brand and further identify the correct target audience. Additionally, we also continue to shoot their video podcasts for their website and various social media platforms.',
      mainVideos: "https://res.cloudinary.com/dxk0bmtei/video/upload/v1579780552/oxbridge_3_tips_fy9sd2.mp4",
    },]
  },
  {
    name: 'GetFitAthletic Branding Mobile App & Website',
    desciption: 'A young and ambitious fitness trainer wanted to rebrand his venture, GetFitAtheletic. He reached out to us for a new logo, mobile application for iOS and Android devices and a website to showcase his fitness venture. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696454/shutterstock_696813646_1_d90qsc.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 GetFitProjectHomMartService',
    ourRole: 'We designed a new logo for GetFitAtheletic, developed a hybrid mobile application and a website.',
    technologyUsed: 'We used React Native to create a hybrid mobile application and developed a Wordpress website.',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579693689/logo_1_ni7ufn.png'],
    visualidentityLogoText: 'The colours and symbols used to create this logo captures the energetic, strong and welcoming personality of the GetFitAthletic brand.',
    colorpaletteText: 'The combination of orange and black brings forward the youthful and friendly brand personality.',
    colorPaletteAllColor: ['#FD5F01', '#000000'
    ],
    fontText: 'We chose ChunkFive Roman as it is bold yet amiable.',
    fontFamilyText: ['Chunk Five Roman'],
    fontFamily: ['ChuckFive-Regular'],
    illustration: [
      {
        illustrationText: 'Mobile App Screens',
        illustrationSubText: 'Our designers worked together with the client to come up with an application experience that covers all business activities under one roof. Thus, it would serve to help increase sales and revenues.',
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
    desciption: 'Ayesha Chundrigar Foundation, an NGO coming to the aid of troubled animals, needed a website for their cause as well as photography that would help move their audience and motivate them to join in on their cause. They were in need of a mobile application that would help collect the data of rescued animals in areas where internet connectivity was unavailable. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579864118/acf-cover-img_srzfhp.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 ACFProjectHomMartService',
    ourRole: 'We were responsible for coming up with the right kind of design for the website that would connect emotionally to their viewers. KRL Creatives was behind the lens for ACF’s website photography. ',
    technologyUsed: 'The website was built using Wordpress. For the Android mobile application, we used Ant.design, React.JS, Redux-Saga and Firebase to develop a system that could store data offline and then upload it to ACF’s server once an internet connection was available. ',
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
    name: 'Amber Dazzle Website & TVC',
    desciption: 'Amber Dazzle, an American cosmetics brand, wanted to launch their product line up in Pakistan for which they required a website that appealed to the Pakistani audience. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579702268/amber-dazzle-image_egxm3v.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 AmberDezelProjectHomMartService',
    ourRole: 'Our production team worked with models to compose the shots into an appealing TVC. Our designers worked with their product photographs and branding guidelines to design and set up an aesthetically pleasing and user-friendly website.',
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
  },
];

var development = [
  {
    name: 'GetFitAthletic Branding Mobile App & Website',
    desciption: 'A young and ambitious fitness trainer wanted to rebrand his venture, GetFitAtheletic. He reached out to us for a new logo, mobile application for iOS and Android devices and a website to showcase his fitness venture. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696454/shutterstock_696813646_1_d90qsc.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 GetFitProjectHomdevService',
    ourRole: 'We designed a new logo for GetFitAtheletic, developed a hybrid mobile application and a website.',
    technologyUsed: 'We used React Native to create a hybrid mobile application and developed a Wordpress website.',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579693689/logo_1_ni7ufn.png'],
    visualidentityLogoText: 'The colours and symbols used to create this logo captures the energetic, strong and welcoming personality of the GetFitAthletic brand.',
    colorpaletteText: 'The combination of orange and black brings forward the youthful and friendly brand personality. ',
    colorPaletteAllColor: ['#FD5F01', '#000000'
    ],
    fontText: 'We chose ChunkFive Roman as it is bold yet amiable.',
    fontFamilyText: ['Chunk Five Roman'],
    fontFamily: ['ChuckFive-Regular'],
    illustration: [
      {
        illustrationText: 'Mobile App Screens',
        illustrationSubText: 'Our designers worked together with the client to come up with an application experience that covers all business activities under one roof. Thus, it would serve to help increase sales and revenues.',
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
    name: 'Drent Branding & Website',
    desciption: 'Drent needed a luxurious website to formally launch their dress rental service in UK for Asian communities. Their focus was making it a personalised brand that would make great impact on their customers.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697423/Asset_1_seshuz.png'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 DrentProjectHomdevService',
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
    name: 'Ziyarat Branding Website',
    desciption: 'Ziyarat, a Pakistani designer-wear retail brand was in need of a logo for their launch in the UK. In addition, they required an ecommerce website which would help the brand sell online. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706873/artem-beliaikin-9Jr9hUzRVhc-unsplash_wao7xo.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 ZiyaratProject',
    ourRole: 'We were responsible for coming up with a logo which would represent their luxury line up and serve as a strong face for the brand.',
    fontText: 'The Ziyarat logo uses San Marino, a font to depict modernity and regal stature.',
    visualidentityLogoText: 'As Ziyarat is associated with designer wear, their logo was meant to look traditional but with a modern twist. We designed a logo that looked premium and adorned in a modern font.',
    colorpaletteText: 'We used a combination of Burgundy and Gold to create a feeling of royalty. ',
    technologyUsed: '',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706510/Ziyarat-Final_sbrpqx.png'],
    visualidentityLogoText: 'As Ziyarat is associated with designer wear, their logo was meant to look traditional but with a modern twist. We designed a logo that looked premium and adorned in a modern font.',
    colorpaletteText: 'We used a combination of Burgundy and Gold to create a feeling of royalty. ',
    colorPaletteAllColor: ['#671429', '#E3B16D', '#CE8497'],
    fontText: 'The Ziyarat logo uses San Marino, a font to depict modernity and regal stature.',
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
    name: 'ACF Animal Rescue Website',
    desciption: 'Ayesha Chundrigar Foundation, an NGO coming to the aid of troubled animals, needed a website for their cause as well as photography that would help move their audience and motivate them to join in on their cause. They were in need of a mobile application that would help collect the data of rescued animals in areas where internet connectivity was unavailable. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579864118/acf-cover-img_srzfhp.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 ACFProjectHomdevService',
    ourRole: 'The website was built using Wordpress. For the Android mobile application, we used Ant.design, React.JS, Redux-Saga and Firebase to develop a system that could store data offline and then upload it to ACF’s server once an internet connection was available. ',
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
    name: 'Dallas Palms Website',
    desciption: 'Dallas Palms, a wedding venue in Dallas, wanted to launch their website to effectively showcase their venues and provide relevant information to their customers.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579774103/dallas-palms_znfrqa.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 DallasPalmProject',
    ourRole: 'KRL was responsible for the design and development behind the website.',
    technologyUsed: 'Wordpress',
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
    name: 'Pakjazba Online Portal System',
    desciption: 'PakJazba is a one-stop portal, created for overseas Pakistanis, that allows users to buy and sell goods, book rooms, find jobs and much more.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579704937/pawel-nolbert-4u2U8EO9OzY-unsplash_jhrdz9.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 PakJazbaProjectHomdevService',
    ourRole: 'KRL Creatives designed and developed this portal and maintain it to manage bug fixes and performance improvements.',
    technologyUsed: 'This portal is developed using latest technologies such as React.Js for front-end and Node.Js for back-end. Due to the vast variety of data on this portal, we chose to use Amazon for server and database deployment. ',
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
    name: 'Oxbridge Video Website',
    desciption: 'Oxbridge, an English training startup, had an innovative approach to training and educational centres. They contacted KRL Creatives to design and develop their website.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579707315/waldemar-brandt-U3Ptj3jafX8-unsplash_osnp6q.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 OxbridgeProjectHomdevService',
    ourRole: 'We were responsible for coming up with a website design that would communicate their innovative approach effectively and could help connect their customers to the young brand. ',
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
      mainHeadsubText: 'KRL Creatives’ marketing department consults with Oxbridge to help strengthen their brand and further identify the correct target audience. Additionally, we also continue to shoot their video podcasts for their website and various social media platforms.',
      mainVideos: "https://res.cloudinary.com/dxk0bmtei/video/upload/v1579780552/oxbridge_3_tips_fy9sd2.mp4",
    },]
  },
  {
    name: 'Amber Dazzle Website & TVC',
    desciption: 'Amber Dazzle, an American cosmetics brand, wanted to launch their product line up in Pakistan for which they required a website that appealed to the Pakistani audience. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579702268/amber-dazzle-image_egxm3v.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 AmberDazelProjectHomdevService',
    ourRole: 'Our production team worked with models to compose the shots into an appealing TVC. Our designers worked with their product photographs and branding guidelines to design and set up an aesthetically pleasing and user-friendly website.',
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
];

var production = [
  {
    name: 'LIGHT-F Project By JICA & Sindh Gvt',
    desciption: 'LIGHT-F (founded by JICA in association with the Sindh Government) aimed to launch a program working towards the welfare of rural women in interior Sindh. They were in need of a brand identity and approached KRL. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610272/cover_vjziro.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 LightFProject',
    ourRole: 'KRL Creatives designed a visual representation for their brand, thus giving them a brand identity by creating various materials such as letterheads, certificates and brand guidelines. In addition, our design and production teams worked together to create their product catalogue.',
    technologyUsed: '',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610909/light-f-logo_lpqdtl.png'],
    visualidentityLogoText: 'The LIGHT-F logo is a word mark. It incorporates a torch facing upwards which symbolises life, truth and the regenerative quality of a flame.',
    colorpaletteText: 'Purple was chosen to depict ambition and bringing about change. The complementary orange demonstrates the energy of the brand. ',
    colorPaletteAllColor: ['#662D91', '#F58441', '#912F6C', '#FFC907', '#CCAED3',],
    fontText: 'The font chosen for LIGHT-F has a clean look which shows the openness and maturity of the brand.',
    fontFamilyText: ['Nunito Sans'],
    fontFamily: ['Nunito Sans'],
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
    name: 'ACF Animal Rescue Website',
    desciption: 'Ayesha Chundrigar Foundation, an NGO coming to the aid of troubled animals, needed a website for their cause as well as photography that would help move their audience and motivate them to join in on their cause. They were in need of a mobile application that would help collect the data of rescued animals in areas where internet connectivity was unavailable. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579864118/acf-cover-img_srzfhp.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 ACFProjectHomProService',
    ourRole: 'We were responsible for coming up with the right kind of design for the website that would connect emotionally to their viewers. KRL Creatives was behind the lens for ACF’s website photography. ',
    technologyUsed: 'The website was built using Wordpress. For the Android mobile application, we used Ant.design, React.JS, Redux-Saga and Firebase to develop a system that could store data offline and then upload it to ACF’s server once an internet connection was available. ',
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
    name: 'Oxbridge Video Website',
    desciption: 'Oxbridge, an English training startup, had an innovative approach to training and educational centres. They contacted KRL Creatives to design and develop their website.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579707315/waldemar-brandt-U3Ptj3jafX8-unsplash_osnp6q.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 OxbridgeProjectHomProService',
    ourRole: 'We were responsible for coming up with a website design that would communicate their innovative approach effectively and could help connect their customers to the young brand. ',
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
      mainHeadsubText: 'KRL Creatives’ marketing department consults with Oxbridge to help strengthen their brand and further identify the correct target audience. Additionally, we also continue to shoot their video podcasts for their website and various social media platforms.',
      mainVideos: "https://res.cloudinary.com/dxk0bmtei/video/upload/v1579780552/oxbridge_3_tips_fy9sd2.mp4",
    },]
  },
  {
    name: 'Amber Dazzle Website & TVC',
    desciption: 'Amber Dazzle, an American cosmetics brand, wanted to launch their product line up in Pakistan for which they required a website that appealed to the Pakistani audience. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579702268/amber-dazzle-image_egxm3v.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 AmberDazelProjectHomProService',
    ourRole: 'Our production team worked with models to compose the shots into an appealing TVC. Our designers worked with their product photographs and branding guidelines to design and set up an aesthetically pleasing and user-friendly website.',
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
];

var design = [
  {
    name: 'LIGHT-F Project By JICA & Sindh Gvt',
    desciption: 'LIGHT-F (founded by JICA in association with the Sindh Government) aimed to launch a program working towards the welfare of rural women in interior Sindh. They were in need of a brand identity and approached KRL. .',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610272/cover_vjziro.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 LightFProject',
    ourRole: 'KRL Creatives designed a visual representation for their brand, thus giving them a brand identity by creating various materials such as letterheads, certificates and brand guidelines. In addition, our design and production teams worked together to create their product catalogue.',
    technologyUsed: '',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579610909/light-f-logo_lpqdtl.png'],
    visualidentityLogoText: 'The LIGHT-F logo is a word mark. It incorporates a torch facing upwards which symbolises life, truth and the regenerative quality of a flame.',
    colorpaletteText: 'Purple was chosen to depict ambition and bringing about change. The complementary orange demonstrates the energy of the brand.',
    colorPaletteAllColor: ['#662D91', '#F58441', '#912F6C', '#FFC907', '#CCAED3',],
    fontText: 'The font chosen for LIGHT-F has a clean look which shows the openness and maturity of the brand. ',
    fontFamilyText: ['Nunito Sans'],
    fontFamily: ['Nunito Sans'],
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
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 DrentProjectHomdevService',
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
    desciption: 'A young and ambitious fitness trainer wanted to rebrand his venture, GetFitAtheletic. He reached out to us for a new logo, mobile application for iOS and Android devices and a website to showcase his fitness venture. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696454/shutterstock_696813646_1_d90qsc.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 GetFitProject',
    ourRole: 'We designed a new logo for GetFitAtheletic, developed a hybrid mobile application and a website.',
    technologyUsed: 'We used React Native to create a hybrid mobile application and developed a Wordpress website.',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579693689/logo_1_ni7ufn.png'],
    visualidentityLogoText: 'The colours and symbols used to create this logo captures the energetic, strong and welcoming personality of the GetFitAthletic brand.',
    colorpaletteText: 'The combination of orange and black brings forward the youthful and friendly brand personality. ',
    colorPaletteAllColor: ['#FD5F01', '#000000'
    ],
    fontText: 'We chose ChunkFive Roman as it is bold yet amiable. ',
    fontFamilyText: ['Chunk Five Roman'],
    fontFamily: ['ChuckFive-Regular'],
    illustration: [
      {
        illustrationText: 'Mobile App Screens',
        illustrationSubText: 'Our designers worked together with the client to come up with an application experience that covers all business activities under one roof. Thus, it would serve to help increase sales and revenues.',
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
    name: 'Pakjazba Online Portal System',
    desciption: 'PakJazba is a one-stop portal, created for overseas Pakistanis, that allows users to buy and sell goods, book rooms, find jobs and much more.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579704937/pawel-nolbert-4u2U8EO9OzY-unsplash_jhrdz9.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 PakJazbaProjectHomdevService',
    ourRole: 'KRL Creatives designed and developed this portal and maintain it to manage bug fixes and performance improvements.',
    technologyUsed: 'This portal is developed using latest technologies such as React.Js for front-end and Node.Js for back-end. Due to the vast variety of data on this portal, we chose to use Amazon for server and database deployment. ',
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
    name: 'Circle Women Merch Design',
    desciption: 'Circle Women, a non-profit organisation working towards women empowerment, was in need of merchandise designs for an educational event being hosted. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705454/christin-hume-Hcfwew744z4-unsplash_dlkimg.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 CircleProject',
    ourRole: 'After thorough research on the brand, KRL came up with interesting and aesthetically pleasing merch designs that would engage and attract the attendees at the event, thus leaving a lasting imprint in their minds. ',
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
    name: 'Oxbridge Video Website',
    desciption: 'Oxbridge, an English training startup, had an innovative approach to training and educational centres. They contacted KRL Creatives to design and develop their website.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579707315/waldemar-brandt-U3Ptj3jafX8-unsplash_osnp6q.jpg'],
    frontImg: 'col-11 col-md-12 col-xl-11 col-lg-11 OxbridgeProjectHomdesiService',
    ourRole: 'We were responsible for coming up with a website design that would communicate their innovative approach effectively and could help connect their customers to the young brand. ',
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
      mainHeadsubText: 'KRL Creatives’ marketing department consults with Oxbridge to help strengthen their brand and further identify the correct target audience. Additionally, we also continue to shoot their video podcasts for their website and various social media platforms.',
      mainVideos: "https://res.cloudinary.com/dxk0bmtei/video/upload/v1579780552/oxbridge_3_tips_fy9sd2.mp4",
    },]
  },
  {
    name: 'Ziyarat Branding Website',
    desciption: 'Ziyarat, a Pakistani designer-wear retail brand was in need of a logo for their launch in the UK. In addition, they required an ecommerce website which would help the brand sell online. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706873/artem-beliaikin-9Jr9hUzRVhc-unsplash_wao7xo.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 ZiyaratProjectHomdesiService',
    ourRole: 'We were responsible for coming up with a logo which would represent their luxury line up and serve as a strong face for the brand.',
    technologyUsed: '',
    visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706510/Ziyarat-Final_sbrpqx.png'],
    visualidentityLogoText: 'As Ziyarat is associated with designer wear, their logo was meant to look traditional but with a modern twist. We designed a logo that looked premium and adorned in a modern font.',
    colorpaletteText: 'We used a combination of Burgundy and Gold to create a feeling of royalty. ',
    colorPaletteAllColor: ['#671429', '#E3B16D', '#CE8497'],
    fontText: 'The Ziyarat logo uses San Marino, a font to depict modernity and regal stature.',
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
];

class HomeServicesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      development: development,
      production: production,
      design: design,
      marketing: marketing,

      ConsulHedng: 'Marketing',
      ConsulPeraas: 'With the power of empathy, transparent communication and honest dealing we work with you to help you find the right path to maximising the outcome your brand create.',
      dvelpmntHedng: 'Development',
      dvelpmntPeraas: 'Did you say photos and videos? Our producers are here with all their experience and expertise!',
      dsgnHedng: 'Design',
      dsgnPeraas: 'Our designers works hard to design delightful experiences that help you achieve business goals.',
      productionHedng: 'Production',
      devPeraImg: true,
      ViewPro: true,
    }
  }


  render() {

    const { marketing, production, design, development } = this.state

    return (
      <div>


        {/*hidden ipad tablet mobile */}
        <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
          <div className="row">
            <div className="col-xl-1 col-lg-1"></div>

            <div className="col-xl-11 col-lg-11">
              <div className="row">
                <div className="col-xl-5 col-lg-5" style={{ paddingLeft: '0vw' }}>
                  <div className="consultImage">
                    <h3 className="consulHedng">
                      Marketing
                      </h3>
                  </div>
                  <div className="consultDev">
                    <p className="consultPera" style={{ marginBottom: '-10px' }}>
                      We stand by the triad of empathy, transparency and honest
                      dealing in order to help you find the right path to maximise
                      the success and outcome created by your brand.
                    </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/project`, state: marketing }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-7 col-lg-7" style={{ padding: '0vw' }}>
                  <div className="row">
                    <div className="col-xl-5 col-lg-5" style={{ padding: '0vw' }}>
                      <div className="develpImage">
                        <h3 className="devlpHedng">
                          Development
                          </h3>
                      </div>
                      <div className="developmentDev">
                        <p className="developmentPera" style={{ marginBottom: '-10px' }}>
                          Our developers are up-to-date with the latest and cutting-edge
                          technologies being used today and do not shy away from using
                          them to provide efficient solutions for your brand.
                          </p>
                        <Link rel="noopener noreferrer"
                          to={{ pathname: `/project`, state: development }}
                          className="changingdec">
                          <a href={this.props.locationUrl} className="changingdec">
                            <p className="ArrowHomeSErvice" style={{ paddingTop: '0' }}>
                              View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                            </p>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-1 col-lg-1"></div>

                    <div className="col-xl-5 col-lg-5" style={{ padding: '0vw' }}>
                      <div className="designImage">
                        <h3 className="designHedng" style={{ paddingTop: '3.1vw', paddingLeft: '3.1vw', fontSize: '1.2vmax', color: 'white', fontFamily: 'aleta-bold' }}>
                          Design
                          </h3>
                      </div>
                      <div className="designDev">
                        <p className="designPera" style={{ marginBottom: '-10px' }}>
                          Our designers work diligently to create immersive experiences
                           that help you achieve your business goals.
                          </p>
                        <Link rel="noopener noreferrer"
                          to={{ pathname: `/project`, state: design }}
                          className="changingdec">
                          <a href={this.props.locationUrl} className="changingdec">
                            <p className="ArrowHomeSErvice" style={{ paddingTop: '0' }}>
                              View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                            </p>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-1 col-lg-1"></div>

                  </div>
                </div>

                <div className="col-xl-5 col-lg-5">

                </div>

                <div className="col-xl-7 col-lg-7" style={{ padding: '0vw' }}>
                  <div className="row">
                    <div className="col-xl-5 col-lg-5" style={{ padding: '0vw' }}>
                      <div className="productionImage">
                        <h3 className="devlpHedng">
                          Production
                          </h3>
                      </div>
                      <div className="developmentDev">
                        <p className="developmentPera" style={{ marginBottom: '-10px' }}>
                          Did you say photos and videos? Our producers have got
                          you covered with their expertise and their eye for great lighting.
                          </p>
                        <Link rel="noopener noreferrer"
                          to={{ pathname: `/project`, state: production }}
                          className="changingdec">
                          <a href={this.props.locationUrl} className="changingdec">
                            <p className="ArrowHomeSErvice" style={{ paddingTop: '0' }}>
                              View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                            </p>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-1 col-lg-1"></div>
                    <Link to={`/services`}>
                      <div className="col-xl-5 col-lg-5" style={{ padding: '0vw' }}>
                        <div className="blankDesign">
                          <p className="blankperaimg1">Learn more
                          <img href="#" className="ADBimg" src={require('../../Assets/Images/arrowPurple.png')} /></p>
                        </div>
                        <div className="">

                        </div>
                      </div>
                    </Link>

                    <div className="col-xl-1 col-lg-1"></div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/*visible ipad tablet and mobile hidden */}
        <div className="d-none d-sm-block d-md-block d-lg-none d-xl-none">
          <div className="row">
            <div className="col-md-1 col-sm-1 col-12"></div>

            <div className="col-md-11 col-sm-11 col-12">
              <div className="row">

                <div className="col-md-6 col-sm-6 col-12" style={{ paddingLeft: '0vw' }}>
                  <div className="consultImageSm">
                    <h3 className="consulHedngSm">
                      Marketing
                      </h3>
                  </div>
                  <div className="consultDevSm" style={{ height: 'auto' }}>
                    <p className="consultPeraSm" style={{ paddingBottom: '0' }}>
                      We stand by the triad of empathy, transparency and honest
                      dealing in order to help you find the right path to maximise
                      the success and outcome created by your brand.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/project`, state: marketing }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-12">
                  <div className="develpImageSm">
                    <h3 className="develpHedngSm">
                      Development
                      </h3>
                  </div>
                  <div className="develpDevSm">
                    <p className="develpPera" style={{ paddingBottom: '0' }}>
                      ` Our developers are up-to-date with the latest and cutting-edge
                         technologies being used today and do not shy away from using
                         them to provide efficient solutions for your brand.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/project`, state: development }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-12" style={{ paddingLeft: '0vw' }}>
                  <div className="designImageSm">
                    <h3 className="designHedng">
                      Design
                      </h3>
                  </div>
                  <div className="designDevSm">
                    <p className="developmentPeraSm" style={{ paddingBottom: '0' }}>
                      Our designers work diligently to create immersive experiences
                      that help you achieve your business goals.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/project`, state: design }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-12">
                  <div className="productionImageSm">
                    <h3 className="designHedng">
                      Production
                      </h3>
                  </div>
                  <div className="designDevSm">
                    <p className="developmentPeraSm" style={{ paddingBottom: '0' }}>
                      Did you say photos and videos? Our producers have got
                      you covered with their expertise and their eye for great lighting.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/project`, state: production }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <Link to={`/services`}>
                  <div className="col-md-12 col-sm-12" style={{ paddingLeft: '0vw' }}>
                    <div className="blankDesignSm" style={{ backgroundColor: '#f7f7f7' }}>
                      <p className="blankperaimgMd1">Learn more
                            <img href="#" className="ADBimg" src={require('../../Assets/Images/arrowPurple.png')} /></p>
                    </div>
                    <div className="">
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/*visible mobile */}
        <div className="d-block d-sm-none d-md-none d-lg-none d-xl-none">
          <div className="row">
            <div className="col-md-1 col-sm-1 col-12"></div>

            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="consultImageMb">
                    <h3 className="consulHedngMb">
                      Marketing
                      </h3>
                  </div>
                  <div className="consultDevMb">
                    <p className="consultPeraMb" style={{ paddingBottom: '0' }}>
                      We stand by the triad of empathy, transparency and honest
                      dealing in order to help you find the right path to maximise
                      the success and outcome created by your brand.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/project`, state: marketing }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0', paddingLeft: '7.5vw' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-12">
                  <div className="develpImageMb">
                    <h3 className="develpHedngMb">
                      Development
                      </h3>
                  </div>
                  <div className="develpDevMb">
                    <p className="develpPeraMb" style={{ paddingBottom: '0' }}>
                      Our developers are up-to-date with the latest and cutting-edge
                       technologies being used today and do not shy away from using
                       them to provide efficient solutions for your brand.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/project`, state: development }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0', paddingLeft: '7.5vw' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>


                <div className="col-12">
                  <div className="designImageMb">
                    <h3 className="develpHedngMb">
                      Design
                      </h3>
                  </div>
                  <div className="develpDevMb">
                    <p className="develpPeraMb" style={{ paddingBottom: '0' }}>
                      Our designers work diligently to create immersive experiences
                           that help you achieve your business goals.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/project`, state: design }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0', paddingLeft: '7.5vw' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-12">
                  <div className="productionImageMb">
                    <h3 className="develpHedngMb">
                      Production
                      </h3>
                  </div>
                  <div className="develpDevMb">
                    <p className="develpPeraMb" style={{ paddingBottom: '0' }}>
                      Did you say photos and videos? Our producers have got
                      you covered with their expertise and their eye for great lighting.
                      </p>
                    <Link rel="noopener noreferrer"
                      to={{ pathname: `/project`, state: production }}
                      className="changingdec">
                      <a href={this.props.locationUrl} className="changingdec">
                        <p className="ArrowHomeSErvice" style={{ paddingTop: '0', paddingLeft: '7.5vw' }}>
                          View Projects<img href="#" className='ADBimg' src={require('../../Assets/Images/arrowPurple.png')} />
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <Link to={`/services`}>
                  <div className="col-12">
                    <div className="blankDesignMb">
                      <p className="blankperaimgMb1">Learn more
                          <img href="#" className="ADBimg" src={require('../../Assets/Images/arrowPurple.png')} /></p>
                    </div>
                    <div className="develpDevMb">

                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>













        {/* hidden xs sm md  */}


        {/*<div className="col-xl-4 col-lg-4 d-none d-sm-none d-md-none d-lg-block d-xl-block">{ col-md-12 col-sm-12 col-12 }
                  <ProjectContainer 
                    projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 consul_BgImg'
                    projctHedng="servis_hedng" 
                    hed={ConsulHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={ConsulPeraas} 
                  />
                </div>*/}


        {/* visible xs sm md  */}


        {/*<div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">{ col-md-12 col-sm-12 col-12 }
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 consul_BgImgSmMd'
                    projctHedng="servis_hedng" 
                    hed={ConsulHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                    projctPera="servisPera"
                    pera={ConsulPeraas} 
                  />
                </div>
                <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>*/}


        {/* hidden xs sm md  */}

        {/*<div className="col-xl-3 col-lg-3 d-xl-block d-lg-block d-none d-sm-none d-md-none ">{ col-md-12 col-sm-12 col-12 }
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 devlop_BgImg'
                    projctHedng="servis_hedng" 
                    hed={dvelpmntHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 prodctn_BgImg'
                    projctHedng="servis_hedng" 
                    hed={productionHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                </div>*/}

        {/* visible xs sm md  */}


        {/*<div className="d-xl-none d-lg-none d-block d-sm-block d-md-block ">{ col-md-12 col-sm-12 col-12 }
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-10 devlop_BgImgSmMd'
                    projctHedng="servis_hedng" 
                    hed={dvelpmntHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-10 HomeProdctn_BgImg'
                    projctHedng="servis_hedng" 
                    hed={productionHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                </div>
                <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>*/}

        {/* hidden xs sm md  */}


        {/* <div className="col-xl-3 col-lg-3 d-none d-sm-none d-md-none d-lg-block d-xl-block">{ col-md-12 col-sm-12 col-12}
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 desgn_BgImg'
                    projctHedng="servis_hedng" 
                    hed={dsgnHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={dsgnPeraas} 
                    
                  />

                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 blnkColr'
                    projctPera="servisPera"
                    seeAerro= {true}
                    projctPera1="ADBpera1"
                    ViewPro='View our work.'
                    pera={DPWperaas}
                    proAeroImg="ADBimg"
                  />

                </div>*/}


        {/* visible xs sm md  */}


        {/*<div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">{ col-md-12 col-sm-12 col-12}
                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 desgn_BgImgSmMd'
                   projctHedng="servis_hedng" 
                   hed={dsgnHedng} 
                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                   projctPera="servisPera"
                   pera={dsgnPeraas} 
                   
                 />

                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 blnkColr'
                   projctPera="servisPera"
                   seeAerro= {devPeraImg}
                   projctPera1="ADBpera1"
                   pera={DPWperaas}
                   ViewPro='View our work.'
                   proAeroImg="ADBimg"
                />

                </div>*/}
        {/* </div>
             </div>*/}
        {/*<div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default HomeServicesPage;
