import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import Header2 from '../Header/header2';
import ProjectContainer from '../../Comman/ProjectContainer/projectContainer';
import SeeProject from '../ContactPage/SeeProject/seeProject';
import Banners from '../ServicesPage/banners';
import { Tabs } from 'antd';
import './projects.css';
import 'antd/dist/antd.css';
import VisualIdentity from '../ProjectDetails/ProjectDetailsPanels/Detailspanel3/visualIdentity';

var jicaProject = {
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
var acfProject = {
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
var oxbridgeProject = {
  name: 'Oxbridge Video Website',
  desciption: 'Oxbridge, an English training startup, had an innovative approach to training and educational centres. They contacted KRL Creatives to design and develop their website.',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579707315/waldemar-brandt-U3Ptj3jafX8-unsplash_osnp6q.jpg'],
  frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 OxbridgeProject',
  ourRole: 'We were responsible for coming up with a website design that would communicate their innovative approach effectively and could help connect their customers to the young brand.',
  technologyUsed: '',
  marketing: [
    {
      mainVideoPanel: [
        {
          mainHead: 'Marketing & Video',
          mainHeadsubText: 'KRL Creatives’ marketing department consults with Oxbridge to help strengthen their brand and further identify the correct target audience. Additionally, we also continue to shoot their video podcasts for their website and various social media platforms.',
          mainVideos: "https://res.cloudinary.com/dxk0bmtei/video/upload/v1579780552/oxbridge_3_tips_fy9sd2.mp4",
        }
      ],
    }
  ],
  development: [
    {
      demoHeading: 'Final Website Video',
      demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707232/1_srkudb.mp4',
        'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707223/2_c2iriy.mp4',
      ],
    },
    {
      illustration: [
        {
          illustrationText: '',
          illustrationSubText: '',
          illustrationImages: [''],
        },
      ],
    }
  ],
  design: [],
  consultation: [],
  production: [],
  training: [],
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
  documentHeading: '',
  documentDemo: ['',
  ],
}
var pakJazbaProject = {
  name: 'Pakjazba Online Portal System',
  desciption: 'PakJazba is a one-stop portal, created for overseas Pakistanis, that allows users to buy and sell goods, book rooms, find jobs and much more. ',
  coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579704937/pawel-nolbert-4u2U8EO9OzY-unsplash_jhrdz9.jpg'],
  frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 PakJazbaProject',
  ourRole: 'KRL Creatives designed and developed this portal and maintain it to manage bug fixes and performance improvements.',
  technologyUsed: 'This portal is developed using latest technologies such as React.Js for front-end and Node.Js for back-end. Due to the vast variety of data on this portal, we chose to use Amazon for server and database deployment. ',
  design: [],
  development: [
    {
      demoHeading: 'Final Portal Videos',
      demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703973/03_dg5fcg.mp4',
        'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703984/04_exnwk9.mp4',
        'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703993/02_qyajzu.mp4',
        'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579704003/01_bn99ch.mp4'
      ],
    },
    {
      illustration: [
        {
          illustrationText: '',
          illustrationSubText: '',
          illustrationImages: ['']
        },
      ],
    }
  ],
  marketing: [],
  consultation: [],
  production: [],
  training: [],
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
  documentHeading: '',
  documentDemo: ['',
  ],
  mainVideoPanel: [{
    mainHead: '',
    mainHeadsubText: '',
    mainVideos: "",
  },]
}
var siddiqSonProject = {
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

var Allprojects = [
  {
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
  },
  {
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
  },
  {
    name: 'Drent Branding & Website',
    desciption: 'Drent needed a luxurious website to formally launch their dress rental service in UK for Asian communities. Their focus was making it a personalised brand that would make great impact on their customers.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697423/Asset_1_seshuz.png'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 DrentProject',
    ourRole: 'We designed them a new brand that speaks to the UK community, but at the same time was impactful for the Asian users. We decided to go with a heavily branded website design that would leave its impact on the customers’ minds, while keeping it simple to use.',
    technologyUsed: 'Drents website was created using React.js on frontend and Node.js on backend.',
    design: [
      {
        visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696864/drent-logo_d0usqb.png'],
        visualidentityLogoText: 'The logo consists of a rhombus shape made out of leaves Ancient Greek kings are known to wear. We chose this symbol and a luxurious serif font to give a royal look.',
        colorpaletteText: 'Since Drent was going with a royal look, we decided to go with a combination of Purple (that represents royalty and wealth) and Gold (because of its association with the precious metal: gold).',
        colorPaletteAllColor: ['#CB9D6C', '#F0D1B2', '#473463', '#2A1F3B', '#353535', '#9B9B9B'],
        fontText: 'We chose Playfair Display and Tajawal for their elegant feel. Being luxurious yet modern, the combo is a perfect fit.',
        fontFamilyText: ['Playfair Display', 'Tajawal'],
        fontFamily: ['Playfair Display', 'Tajawal'],
      },
      {
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
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
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Drent Final Website',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579698351/1_vqvncd.mp4'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    marketing: [],
    production: [],
    consultation: [],
    training: [],
    documentHeading: '',
    documentDemo: [''],
    mainVideoPanel: [
      {
        mainHead: '',
        mainHeadsubText: '',
        mainVideos: "",
      }
    ]
  },
  {
    name: 'GetFitAthletic Branding Mobile App & Website',
    desciption: 'A young and ambitious fitness trainer wanted to rebrand his venture, GetFitAtheletic. He reached out to us for a new logo, mobile application for iOS and Android devices and a website to showcase his fitness venture. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696454/shutterstock_696813646_1_d90qsc.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 GetFitProject',
    ourRole: 'We designed a new logo for GetFitAtheletic, developed a hybrid mobile application and a website.',
    technologyUsed: 'We used React Native to create a hybrid mobile application and developed a Wordpress website.',
    design: [
      {
        visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579693689/logo_1_ni7ufn.png'],
        visualidentityLogoText: 'The colours and symbols used to create this logo captures the energetic, strong and welcoming personality of the GetFitAthletic brand.',
        colorpaletteText: 'The combination of orange and black brings forward the youthful and friendly brand personality. ',
        colorPaletteAllColor: ['#FD5F01', '#000000'],
        fontText: 'We chose ChunkFive Roman as it is bold yet amiable.',
        fontFamilyText: ['Chunk Five Roman'],
        fontFamily: ['ChuckFive-Regular'],
      },
      {
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
        illustration: [
          {
            illustrationText: 'Mobile App Screens',
            illustrationSubText: 'Our designers worked together with the client to come up with an application experience that covers all business activities under one roof. Thus, it would serve to help increase sales and revenues.',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851011/2_q8jzms.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/18_zejyql.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851011/6_vxdopp.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/10_m9ama1.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/13_jypxe5.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/4_nivwyf.jpg'],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Final Application Video',
        demoVideo: ['https://www.youtube.com/embed/r1_C6PiVIws'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    marketing: [],
    production: [],
    consultation: [],
    training: [],
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
  },
  {
    name: 'Circle Women Merch Design',
    desciption: 'Circle Women, a non-profit organisation working towards women empowerment, was in need of merchandise designs for an educational event being hosted. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579705454/christin-hume-Hcfwew744z4-unsplash_dlkimg.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 CircleProject',
    ourRole: 'After thorough research on the brand, KRL came up with interesting and aesthetically pleasing merch designs that would engage and attract the attendees at the event, thus leaving a lasting imprint in their minds. ',
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
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
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
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586849884/Shield_1_gp2xxz.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586849897/Standee_reqtuf.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586849869/banner_wtexjn.png',],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    consultation: ['consultation'],
    marketing: [],
    development: [],
    production: [],
    training: [],
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'Pakjazba Online Portal System',
    desciption: 'PakJazba is a one-stop portal, created for overseas Pakistanis, that allows users to buy and sell goods, book rooms, find jobs and much more. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579704937/pawel-nolbert-4u2U8EO9OzY-unsplash_jhrdz9.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 PakJazbaProject',
    ourRole: 'KRL Creatives designed and developed this portal and maintain it to manage bug fixes and performance improvements.',
    technologyUsed: 'This portal is developed using latest technologies such as React.Js for front-end and Node.Js for back-end. Due to the vast variety of data on this portal, we chose to use Amazon for server and database deployment. ',
    design: [],
    development: [
      {
        demoHeading: 'Final Portal Videos',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703973/03_dg5fcg.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703984/04_exnwk9.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703993/02_qyajzu.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579704003/01_bn99ch.mp4'
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: ['']
          },
        ],
      }
    ],
    marketing: [],
    consultation: [],
    production: [],
    training: [],
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
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586850126/artem-beliaikin-9Jr9hUzRVhc-unsplash-min_m72rxs.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 ZiyaratProject',
    ourRole: 'We were responsible for coming up with a logo which would represent their luxury line up and serve as a strong face for the brand. ',
    technologyUsed: '',
    design: [
      {
        visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706510/Ziyarat-Final_sbrpqx.png'],
        visualidentityLogoText: 'As Ziyarat is associated with designer wear, their logo was meant to look traditional but with a modern twist. We designed a logo that looked premium and adorned in a modern font',
        colorpaletteText: 'We used a combination of Burgundy and Gold to create a feeling of royalty. ',
        colorPaletteAllColor: ['#671429', '#E3B16D', '#CE8497'],
        fontText: 'The Ziyarat logo uses San Marino, a font to depict modernity and regal stature.',
        fontFamilyText: ['San Marino'],
        fontFamily: ['San-Marino'],
      },
      {
        documentHeading: '',
        documentDemo: [''],
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
        ]
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579706642/1_jtphb8.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579706651/2_zch1v6.mp4'
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ]
      }
    ],
    marketing: [],
    consultation: [],
    production: [],
    training: [],
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: '',
    },]
  },
  {
    name: 'Oxbridge Video Website',
    desciption: 'Oxbridge, an English training startup, had an innovative approach to training and educational centres. They contacted KRL Creatives to design and develop their website.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579707315/waldemar-brandt-U3Ptj3jafX8-unsplash_osnp6q.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 OxbridgeProject',
    ourRole: 'We were responsible for coming up with a website design that would communicate their innovative approach effectively and could help connect their customers to the young brand.',
    technologyUsed: '',
    marketing: [
      {
        mainVideoPanel: [
          {
            mainHead: 'Marketing & Video',
            mainHeadsubText: 'KRL Creatives’ marketing department consults with Oxbridge to help strengthen their brand and further identify the correct target audience. Additionally, we also continue to shoot their video podcasts for their website and various social media platforms.',
            mainVideos: "https://www.youtube.com/embed/ogX3xoOsQMQ",
          }
        ],
      }
    ],
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707232/1_srkudb.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707223/2_c2iriy.mp4',
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    design: [],
    consultation: [],
    production: [],
    training: [],
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
    documentHeading: '',
    documentDemo: ['',
    ],
  },
  {
    name: 'Dallas Palms Website',
    desciption: 'Dallas Palms, a wedding venue in Dallas, wanted to launch their website to effectively showcase their venues and provide relevant information to their customers.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579774103/dallas-palms_znfrqa.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 DallasPalmProject',
    ourRole: 'KRL was responsible for the design and development behind the website.',
    technologyUsed: 'Wordpress.',
    development: [
      {
        demoHeading: 'Final Website Videos',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774405/2_jym2hq.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774411/6_av7vol.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774412/4_afbv1d.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774414/1_jr5o25.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774414/3_yeogym.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774419/5_wfpqik.mp4',
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    design: [],
    marketing: [],
    consultation: [],
    production: [],
    training: [],
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
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 AmberDazelProject',
    ourRole: 'Our production team worked with models to compose the shots into an appealing TVC. Our designers worked with their product photographs and branding guidelines to design and set up an aesthetically pleasing and user-friendly website.',
    technologyUsed: 'Wordpress and Woocommerce.',
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703499/01_dbtzfq.mp4', 'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703523/02_iyiama.mp4'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ]
      }
    ],
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
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
        illustration: [
          {
            illustrationText: 'Social Media posts',
            illustrationSubText: 'We designed social media posts for Amber Dazzles Instagram and Facebook marketing',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852304/Liquid_Foundation_zowxzz.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852304/glitter_gloss_a_insta_hsnxqb.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852301/new_arrivals_insta_hdfemq.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852300/Mountains_itenmg.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852295/lipstick_insta_s98jxs.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852290/shimmer_insta_wi0cpz.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852287/Keratin_Shampoo_vqt28u.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852283/FB_Cover_1_v1nltg.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852283/lips_insta_uc642c.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852279/banner_3_insta_vvd2ud.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852273/banner_2_insta_jxwsaw.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852273/lip_kit_insta_i4yq5u.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852269/face-min_ksw6kk.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852266/eyes-min_oqtrxe.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852266/brush-min_zce8ba.jpg'],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    marketing: [
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
    consultation: [],
    production: [],
    training: [],
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: [''],
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
    }]
  },
]
var marketing = [
  {
    name: 'GetFitAthletic Branding Mobile App & Website',
    desciption: 'A young and ambitious fitness trainer wanted to rebrand his venture, GetFitAtheletic. He reached out to us for a new logo, mobile application for iOS and Android devices and a website to showcase his fitness venture. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696454/shutterstock_696813646_1_d90qsc.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 GetFitProject',
    ourRole: 'We designed a new logo for GetFitAtheletic, developed a hybrid mobile application and a website.',
    technologyUsed: 'We used React Native to create a hybrid mobile application and developed a Wordpress website.',
    design: [
      {
        visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579693689/logo_1_ni7ufn.png'],
        visualidentityLogoText: 'The colours and symbols used to create this logo captures the energetic, strong and welcoming personality of the GetFitAthletic brand.',
        colorpaletteText: 'The combination of orange and black brings forward the youthful and friendly brand personality. ',
        colorPaletteAllColor: ['#FD5F01', '#000000'],
        fontText: 'We chose ChunkFive Roman as it is bold yet amiable.',
        fontFamilyText: ['Chunk Five Roman'],
        fontFamily: ['ChuckFive-Regular'],
      },
      {
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
        illustration: [
          {
            illustrationText: 'Mobile App Screens',
            illustrationSubText: 'Our designers worked together with the client to come up with an application experience that covers all business activities under one roof. Thus, it would serve to help increase sales and revenues.',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851011/2_q8jzms.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/18_zejyql.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851011/6_vxdopp.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/10_m9ama1.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/13_jypxe5.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/4_nivwyf.jpg'],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Final Application Video',
        demoVideo: ['https://www.youtube.com/embed/r1_C6PiVIws'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    marketing: [],
    production: [],
    consultation: [],
    training: [],
    documentHeading: '',
    documentDemo: [''],
    defaultTab: 'marketing',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
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
    defaultTab: 'marketing',
    mainVideoPanel: [
      {
        mainHead: '',
        mainHeadsubText: '',
        mainVideos: "",
      }
    ]
  },
  {
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
    marketing: [
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
    documentDemo: [''],
    defaultTab: 'marketing',
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
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 OxbridgeProject',
    ourRole: 'We were responsible for coming up with a website design that would communicate their innovative approach effectively and could help connect their customers to the young brand.',
    technologyUsed: '',
    marketing: [
      {
        mainVideoPanel: [
          {
            mainHead: 'Marketing & Video',
            mainHeadsubText: 'KRL Creatives’ marketing department consults with Oxbridge to help strengthen their brand and further identify the correct target audience. Additionally, we also continue to shoot their video podcasts for their website and various social media platforms.',
            mainVideos: "https://www.youtube.com/embed/ogX3xoOsQMQ",
          }
        ],
      }
    ],
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707232/1_srkudb.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707223/2_c2iriy.mp4',
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    design: [],
    consultation: [],
    production: [],
    training: [],
    defaultTab: 'marketing',
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
    documentHeading: '',
    documentDemo: ['',
    ],
  },
  {
    name: 'Amber Dazzle Website & TVC',
    desciption: 'Amber Dazzle, an American cosmetics brand, wanted to launch their product line up in Pakistan for which they required a website that appealed to the Pakistani audience. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579702268/amber-dazzle-image_egxm3v.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 AmberDazelProject',
    ourRole: 'Our production team worked with models to compose the shots into an appealing TVC. Our designers worked with their product photographs and branding guidelines to design and set up an aesthetically pleasing and user-friendly website.',
    technologyUsed: 'Wordpress and Woocommerce.',
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703499/01_dbtzfq.mp4', 'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703523/02_iyiama.mp4'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ]
      }
    ],
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
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
        illustration: [
          {
            illustrationText: 'Social Media posts',
            illustrationSubText: 'We designed social media posts for Amber Dazzles Instagram and Facebook marketing',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852304/Liquid_Foundation_zowxzz.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852304/glitter_gloss_a_insta_hsnxqb.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852301/new_arrivals_insta_hdfemq.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852300/Mountains_itenmg.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852295/lipstick_insta_s98jxs.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852290/shimmer_insta_wi0cpz.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852287/Keratin_Shampoo_vqt28u.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852283/FB_Cover_1_v1nltg.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852283/lips_insta_uc642c.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852279/banner_3_insta_vvd2ud.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852273/banner_2_insta_jxwsaw.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852273/lip_kit_insta_i4yq5u.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852269/face-min_ksw6kk.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852266/eyes-min_oqtrxe.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852266/brush-min_zce8ba.jpg'],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    marketing: [
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
    consultation: [],
    production: [],
    training: [],
    defaultTab: 'marketing',
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: [''],
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
    }]
  },
]
var development = [
  {
    name: 'Drent Branding & Website',
    desciption: 'Drent needed a luxurious website to formally launch their dress rental service in UK for Asian communities. Their focus was making it a personalised brand that would make great impact on their customers.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697423/Asset_1_seshuz.png'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 DrentProject',
    ourRole: 'We designed them a new brand that speaks to the UK community, but at the same time was impactful for the Asian users. We decided to go with a heavily branded website design that would leave its impact on the customers’ minds, while keeping it simple to use.',
    technologyUsed: 'Drents website was created using React.js on frontend and Node.js on backend.',
    design: [
      {
        visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696864/drent-logo_d0usqb.png'],
        visualidentityLogoText: 'The logo consists of a rhombus shape made out of leaves Ancient Greek kings are known to wear. We chose this symbol and a luxurious serif font to give a royal look.',
        colorpaletteText: 'Since Drent was going with a royal look, we decided to go with a combination of Purple (that represents royalty and wealth) and Gold (because of its association with the precious metal: gold).',
        colorPaletteAllColor: ['#CB9D6C', '#F0D1B2', '#473463', '#2A1F3B', '#353535', '#9B9B9B'],
        fontText: 'We chose Playfair Display and Tajawal for their elegant feel. Being luxurious yet modern, the combo is a perfect fit.',
        fontFamilyText: ['Playfair Display', 'Tajawal'],
        fontFamily: ['Playfair Display', 'Tajawal'],
      },
      {
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
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
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Drent Final Website',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579698351/1_vqvncd.mp4'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    marketing: [],
    production: [],
    consultation: [],
    training: [],
    documentHeading: '',
    documentDemo: [''],
    defaultTab: 'development',
    mainVideoPanel: [
      {
        mainHead: '',
        mainHeadsubText: '',
        mainVideos: "",
      }
    ]
  },
  {
    name: 'GetFitAthletic Branding Mobile App & Website',
    desciption: 'A young and ambitious fitness trainer wanted to rebrand his venture, GetFitAtheletic. He reached out to us for a new logo, mobile application for iOS and Android devices and a website to showcase his fitness venture. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696454/shutterstock_696813646_1_d90qsc.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 GetFitProject',
    ourRole: 'We designed a new logo for GetFitAtheletic, developed a hybrid mobile application and a website.',
    technologyUsed: 'We used React Native to create a hybrid mobile application and developed a Wordpress website.',
    design: [
      {
        visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579693689/logo_1_ni7ufn.png'],
        visualidentityLogoText: 'The colours and symbols used to create this logo captures the energetic, strong and welcoming personality of the GetFitAthletic brand.',
        colorpaletteText: 'The combination of orange and black brings forward the youthful and friendly brand personality. ',
        colorPaletteAllColor: ['#FD5F01', '#000000'],
        fontText: 'We chose ChunkFive Roman as it is bold yet amiable.',
        fontFamilyText: ['Chunk Five Roman'],
        fontFamily: ['ChuckFive-Regular'],
      },
      {
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
        illustration: [
          {
            illustrationText: 'Mobile App Screens',
            illustrationSubText: 'Our designers worked together with the client to come up with an application experience that covers all business activities under one roof. Thus, it would serve to help increase sales and revenues.',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851011/2_q8jzms.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/18_zejyql.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851011/6_vxdopp.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/10_m9ama1.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/13_jypxe5.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/4_nivwyf.jpg'],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Final Application Video',
        demoVideo: ['https://www.youtube.com/embed/r1_C6PiVIws'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    marketing: [],
    production: [],
    consultation: [],
    training: [],
    documentHeading: '',
    documentDemo: [''],
    defaultTab: 'development',
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
    defaultTab: 'development',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'Pakjazba Online Portal System',
    desciption: 'PakJazba is a one-stop portal, created for overseas Pakistanis, that allows users to buy and sell goods, book rooms, find jobs and much more. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579704937/pawel-nolbert-4u2U8EO9OzY-unsplash_jhrdz9.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 PakJazbaProject',
    ourRole: 'KRL Creatives designed and developed this portal and maintain it to manage bug fixes and performance improvements.',
    technologyUsed: 'This portal is developed using latest technologies such as React.Js for front-end and Node.Js for back-end. Due to the vast variety of data on this portal, we chose to use Amazon for server and database deployment. ',
    design: [],
    development: [
      {
        demoHeading: 'Final Portal Videos',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703973/03_dg5fcg.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703984/04_exnwk9.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703993/02_qyajzu.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579704003/01_bn99ch.mp4'
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: ['']
          },
        ],
      }
    ],
    marketing: [],
    consultation: [],
    production: [],
    training: [],
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
    documentHeading: '',
    documentDemo: ['',
    ],
    defaultTab: 'development',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'Ziyarat Branding Website',
    desciption: 'Ziyarat, a Pakistani designer-wear retail brand was in need of a logo for their launch in the UK. In addition, they required an ecommerce website which would help the brand sell online. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586850126/artem-beliaikin-9Jr9hUzRVhc-unsplash-min_m72rxs.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 ZiyaratProject',
    ourRole: 'We were responsible for coming up with a logo which would represent their luxury line up and serve as a strong face for the brand. ',
    technologyUsed: '',
    design: [
      {
        visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706510/Ziyarat-Final_sbrpqx.png'],
        visualidentityLogoText: 'As Ziyarat is associated with designer wear, their logo was meant to look traditional but with a modern twist. We designed a logo that looked premium and adorned in a modern font',
        colorpaletteText: 'We used a combination of Burgundy and Gold to create a feeling of royalty. ',
        colorPaletteAllColor: ['#671429', '#E3B16D', '#CE8497'],
        fontText: 'The Ziyarat logo uses San Marino, a font to depict modernity and regal stature.',
        fontFamilyText: ['San Marino'],
        fontFamily: ['San-Marino'],
      },
      {
        documentHeading: '',
        documentDemo: [''],
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
        ]
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579706642/1_jtphb8.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579706651/2_zch1v6.mp4'
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ]
      }
    ],
    marketing: [],
    consultation: [],
    production: [],
    training: [],
    defaultTab: 'development',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: '',
    },]
  },
  {
    name: 'Oxbridge Video Website',
    desciption: 'Oxbridge, an English training startup, had an innovative approach to training and educational centres. They contacted KRL Creatives to design and develop their website.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579707315/waldemar-brandt-U3Ptj3jafX8-unsplash_osnp6q.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 OxbridgeProject',
    ourRole: 'We were responsible for coming up with a website design that would communicate their innovative approach effectively and could help connect their customers to the young brand.',
    technologyUsed: '',
    marketing: [
      {
        mainVideoPanel: [
          {
            mainHead: 'Marketing & Video',
            mainHeadsubText: 'KRL Creatives’ marketing department consults with Oxbridge to help strengthen their brand and further identify the correct target audience. Additionally, we also continue to shoot their video podcasts for their website and various social media platforms.',
            mainVideos: "https://www.youtube.com/embed/ogX3xoOsQMQ",
          }
        ],
      }
    ],
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707232/1_srkudb.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707223/2_c2iriy.mp4',
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    design: [],
    consultation: [],
    production: [],
    training: [],
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
    documentHeading: '',
    documentDemo: ['',
    ],
    defaultTab: 'development',
  },
  {
    name: 'Dallas Palms Website',
    desciption: 'Dallas Palms, a wedding venue in Dallas, wanted to launch their website to effectively showcase their venues and provide relevant information to their customers.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579774103/dallas-palms_znfrqa.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 DallasPalmProject',
    ourRole: 'KRL was responsible for the design and development behind the website.',
    technologyUsed: 'Wordpress.',
    development: [
      {
        demoHeading: 'Final Website Videos',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774405/2_jym2hq.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774411/6_av7vol.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774412/4_afbv1d.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774414/1_jr5o25.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774414/3_yeogym.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579774419/5_wfpqik.mp4',
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    design: [],
    marketing: [],
    consultation: [],
    production: [],
    training: [],
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
    documentHeading: '',
    documentDemo: ['',
    ],
    defaultTab: 'development',
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
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 AmberDazelProject',
    ourRole: 'Our production team worked with models to compose the shots into an appealing TVC. Our designers worked with their product photographs and branding guidelines to design and set up an aesthetically pleasing and user-friendly website.',
    technologyUsed: 'Wordpress and Woocommerce.',
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703499/01_dbtzfq.mp4', 'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703523/02_iyiama.mp4'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ]
      }
    ],
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
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
        illustration: [
          {
            illustrationText: 'Social Media posts',
            illustrationSubText: 'We designed social media posts for Amber Dazzles Instagram and Facebook marketing',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852304/Liquid_Foundation_zowxzz.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852304/glitter_gloss_a_insta_hsnxqb.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852301/new_arrivals_insta_hdfemq.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852300/Mountains_itenmg.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852295/lipstick_insta_s98jxs.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852290/shimmer_insta_wi0cpz.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852287/Keratin_Shampoo_vqt28u.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852283/FB_Cover_1_v1nltg.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852283/lips_insta_uc642c.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852279/banner_3_insta_vvd2ud.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852273/banner_2_insta_jxwsaw.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852273/lip_kit_insta_i4yq5u.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852269/face-min_ksw6kk.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852266/eyes-min_oqtrxe.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852266/brush-min_zce8ba.jpg'],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    marketing: [],
    consultation: [],
    production: [],
    training: [],
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: [''],
    fontText: '',
    fontFamilyText: [''],
    fontFamily: [''],
    documentHeading: '',
    documentDemo: ['',
    ],
    defaultTab: 'development',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    }]
  },
]
var design = [
  {
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
    defaultTab: 'design',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    }]
  },
  {
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
    defaultTab: 'design',
    mainVideoPanel: [
      {
        mainHead: '',
        mainHeadsubText: '',
        mainVideos: "",
      }
    ]
  },
  {
    name: 'Drent Branding & Website',
    desciption: 'Drent needed a luxurious website to formally launch their dress rental service in UK for Asian communities. Their focus was making it a personalised brand that would make great impact on their customers.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579697423/Asset_1_seshuz.png'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 DrentProject',
    ourRole: 'We designed them a new brand that speaks to the UK community, but at the same time was impactful for the Asian users. We decided to go with a heavily branded website design that would leave its impact on the customers’ minds, while keeping it simple to use.',
    technologyUsed: 'Drents website was created using React.js on frontend and Node.js on backend.',
    design: [
      {
        visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696864/drent-logo_d0usqb.png'],
        visualidentityLogoText: 'The logo consists of a rhombus shape made out of leaves Ancient Greek kings are known to wear. We chose this symbol and a luxurious serif font to give a royal look.',
        colorpaletteText: 'Since Drent was going with a royal look, we decided to go with a combination of Purple (that represents royalty and wealth) and Gold (because of its association with the precious metal: gold).',
        colorPaletteAllColor: ['#CB9D6C', '#F0D1B2', '#473463', '#2A1F3B', '#353535', '#9B9B9B'],
        fontText: 'We chose Playfair Display and Tajawal for their elegant feel. Being luxurious yet modern, the combo is a perfect fit.',
        fontFamilyText: ['Playfair Display', 'Tajawal'],
        fontFamily: ['Playfair Display', 'Tajawal'],
      },
      {
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
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
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Drent Final Website',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579698351/1_vqvncd.mp4'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    marketing: [],
    production: [],
    consultation: [],
    training: [],
    documentHeading: '',
    documentDemo: [''],
    defaultTab: 'design',
    mainVideoPanel: [
      {
        mainHead: '',
        mainHeadsubText: '',
        mainVideos: "",
      }
    ]
  },
  {
    name: 'GetFitAthletic Branding Mobile App & Website',
    desciption: 'A young and ambitious fitness trainer wanted to rebrand his venture, GetFitAtheletic. He reached out to us for a new logo, mobile application for iOS and Android devices and a website to showcase his fitness venture. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579696454/shutterstock_696813646_1_d90qsc.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 GetFitProject',
    ourRole: 'We designed a new logo for GetFitAtheletic, developed a hybrid mobile application and a website.',
    technologyUsed: 'We used React Native to create a hybrid mobile application and developed a Wordpress website.',
    design: [
      {
        visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579693689/logo_1_ni7ufn.png'],
        visualidentityLogoText: 'The colours and symbols used to create this logo captures the energetic, strong and welcoming personality of the GetFitAthletic brand.',
        colorpaletteText: 'The combination of orange and black brings forward the youthful and friendly brand personality. ',
        colorPaletteAllColor: ['#FD5F01', '#000000'],
        fontText: 'We chose ChunkFive Roman as it is bold yet amiable.',
        fontFamilyText: ['Chunk Five Roman'],
        fontFamily: ['ChuckFive-Regular'],
      },
      {
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
        illustration: [
          {
            illustrationText: 'Mobile App Screens',
            illustrationSubText: 'Our designers worked together with the client to come up with an application experience that covers all business activities under one roof. Thus, it would serve to help increase sales and revenues.',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851011/2_q8jzms.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/18_zejyql.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851011/6_vxdopp.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/10_m9ama1.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/13_jypxe5.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586851012/4_nivwyf.jpg'],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Final Application Video',
        demoVideo: ['https://www.youtube.com/embed/r1_C6PiVIws'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    marketing: [],
    production: [],
    consultation: [],
    training: [],
    documentHeading: '',
    documentDemo: [''],
    defaultTab: 'design',
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
    defaultTab: 'design',
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
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
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
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586849884/Shield_1_gp2xxz.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586849897/Standee_reqtuf.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586849869/banner_wtexjn.png',],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    consultation: ['consultation'],
    marketing: [],
    development: [],
    production: [],
    training: [],
    defaultTab: 'design',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'Pakjazba Online Portal System',
    desciption: 'PakJazba is a one-stop portal, created for overseas Pakistanis, that allows users to buy and sell goods, book rooms, find jobs and much more. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579704937/pawel-nolbert-4u2U8EO9OzY-unsplash_jhrdz9.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 PakJazbaProject',
    ourRole: 'KRL Creatives designed and developed this portal and maintain it to manage bug fixes and performance improvements.',
    technologyUsed: 'This portal is developed using latest technologies such as React.Js for front-end and Node.Js for back-end. Due to the vast variety of data on this portal, we chose to use Amazon for server and database deployment. ',
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
        documentHeading: '',
        documentDemo: [''],
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
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Final Portal Videos',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703973/03_dg5fcg.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703984/04_exnwk9.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703993/02_qyajzu.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579704003/01_bn99ch.mp4'
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: ['']
          },
        ],
      }
    ],
    marketing: [],
    consultation: [],
    production: [],
    training: [],
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
    documentHeading: '',
    documentDemo: ['',
    ],
    defaultTab: 'design',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
    name: 'Ziyarat Branding Website',
    desciption: 'Ziyarat, a Pakistani designer-wear retail brand was in need of a logo for their launch in the UK. In addition, they required an ecommerce website which would help the brand sell online. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586850126/artem-beliaikin-9Jr9hUzRVhc-unsplash-min_m72rxs.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 ZiyaratProject',
    ourRole: 'We were responsible for coming up with a logo which would represent their luxury line up and serve as a strong face for the brand. ',
    technologyUsed: '',
    design: [
      {
        visualidentityLogo: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579706510/Ziyarat-Final_sbrpqx.png'],
        visualidentityLogoText: 'As Ziyarat is associated with designer wear, their logo was meant to look traditional but with a modern twist. We designed a logo that looked premium and adorned in a modern font',
        colorpaletteText: 'We used a combination of Burgundy and Gold to create a feeling of royalty. ',
        colorPaletteAllColor: ['#671429', '#E3B16D', '#CE8497'],
        fontText: 'The Ziyarat logo uses San Marino, a font to depict modernity and regal stature.',
        fontFamilyText: ['San Marino'],
        fontFamily: ['San-Marino'],
      },
      {
        documentHeading: '',
        documentDemo: [''],
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
        ]
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579706642/1_jtphb8.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579706651/2_zch1v6.mp4'
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ]
      }
    ],
    marketing: [],
    consultation: [],
    production: [],
    training: [],
    defaultTab: 'design',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: '',
    },]
  },
  {
    name: 'Amber Dazzle Website & TVC',
    desciption: 'Amber Dazzle, an American cosmetics brand, wanted to launch their product line up in Pakistan for which they required a website that appealed to the Pakistani audience. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579702268/amber-dazzle-image_egxm3v.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 AmberDazelProject',
    ourRole: 'Our production team worked with models to compose the shots into an appealing TVC. Our designers worked with their product photographs and branding guidelines to design and set up an aesthetically pleasing and user-friendly website.',
    technologyUsed: 'Wordpress and Woocommerce.',
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703499/01_dbtzfq.mp4', 'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703523/02_iyiama.mp4'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ]
      }
    ],
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
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
        illustration: [
          {
            illustrationText: 'Social Media posts',
            illustrationSubText: 'We designed social media posts for Amber Dazzles Instagram and Facebook marketing',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852304/Liquid_Foundation_zowxzz.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852304/glitter_gloss_a_insta_hsnxqb.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852301/new_arrivals_insta_hdfemq.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852300/Mountains_itenmg.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852295/lipstick_insta_s98jxs.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852290/shimmer_insta_wi0cpz.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852287/Keratin_Shampoo_vqt28u.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852283/FB_Cover_1_v1nltg.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852283/lips_insta_uc642c.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852279/banner_3_insta_vvd2ud.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852273/banner_2_insta_jxwsaw.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852273/lip_kit_insta_i4yq5u.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852269/face-min_ksw6kk.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852266/eyes-min_oqtrxe.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852266/brush-min_zce8ba.jpg'],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    marketing: [],
    consultation: [],
    production: [],
    training: [],
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: [''],
    fontText: '',
    fontFamilyText: [''],
    fontFamily: [''],
    documentHeading: '',
    documentDemo: ['',
    ],
    defaultTab: 'design',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    }]
  },
]
var production = [
  {
    name: 'ACF Animal Rescue Website',
    desciption: 'Ayesha Chundrigar Foundation, an NGO coming to the aid of troubled animals, needed a website for their cause as well as photography that would help move their audience and motivate them to join in on their cause. They were in need of a mobile application that would help collect the data of rescued animals in areas where internet connectivity was unavailable. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579864118/acf-cover-img_srzfhp.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 ACFProject',
    ourRole: 'We were responsible for coming up with the right kind of design for the website that would connect emotionally to their viewers. KRL Creatives was behind the lens for ACF’s website photography. ',
    technologyUsed: 'The website was built using Wordpress. For the Android mobile application, we used Ant.design, React.JS, Redux-Saga and Firebase to develop a system that could store data offline and then upload it to ACF’s server once an internet connection was available.',
    development: [
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
      {
        demoHeading: 'Final Website Videos',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579698702/1_hsmghk.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579698708/3_qr4mto.mp4'],
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
    documentDemo: [''],
    defaultTab: 'production',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    },]
  },
  {
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
    defaultTab: 'production',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    }]
  },
  {
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
    defaultTab: 'production',
    mainVideoPanel: [
      {
        mainHead: '',
        mainHeadsubText: '',
        mainVideos: "",
      }
    ]
  },
  {
    name: 'Oxbridge Video Website',
    desciption: 'Oxbridge, an English training startup, had an innovative approach to training and educational centres. They contacted KRL Creatives to design and develop their website.',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579707315/waldemar-brandt-U3Ptj3jafX8-unsplash_osnp6q.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 OxbridgeProject',
    ourRole: 'We were responsible for coming up with a website design that would communicate their innovative approach effectively and could help connect their customers to the young brand.',
    technologyUsed: '',
    marketing: [
      {
        mainVideoPanel: [
          {
            mainHead: 'Marketing & Video',
            mainHeadsubText: 'KRL Creatives’ marketing department consults with Oxbridge to help strengthen their brand and further identify the correct target audience. Additionally, we also continue to shoot their video podcasts for their website and various social media platforms.',
            mainVideos: "https://www.youtube.com/embed/ogX3xoOsQMQ",
          }
        ],
      }
    ],
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707232/1_srkudb.mp4',
          'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579707223/2_c2iriy.mp4',
        ],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ],
      }
    ],
    design: [],
    consultation: [],
    production: [
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          }
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
    training: [],
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: [''],
    fontText: '',
    fontFamilyText: [''],
    fontFamily: [''],
    defaultTab: 'production',
    illustration: [
      {
        illustrationText: '',
        illustrationSubText: '',
        illustrationImages: [''],
      },
    ],
    documentHeading: '',
    documentDemo: ['',
    ],
  },
  {
    name: 'Amber Dazzle Website & TVC',
    desciption: 'Amber Dazzle, an American cosmetics brand, wanted to launch their product line up in Pakistan for which they required a website that appealed to the Pakistani audience. ',
    coverImg: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1579702268/amber-dazzle-image_egxm3v.jpg'],
    frontImg: 'col-12 col-md-12 col-xl-11 col-lg-11 AmberDazelProject',
    ourRole: 'Our production team worked with models to compose the shots into an appealing TVC. Our designers worked with their product photographs and branding guidelines to design and set up an aesthetically pleasing and user-friendly website.',
    technologyUsed: 'Wordpress and Woocommerce.',
    development: [
      {
        demoHeading: 'Final Website Video',
        demoVideo: ['https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703499/01_dbtzfq.mp4', 'https://res.cloudinary.com/dxk0bmtei/video/upload/v1579703523/02_iyiama.mp4'],
      },
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          },
        ]
      }
    ],
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
        documentHeading: '',
        documentDemo: [''],
      },
      {
        demoHeading: '',
        demoVideo: [''],
      },
      {
        illustration: [
          {
            illustrationText: 'Social Media posts',
            illustrationSubText: 'We designed social media posts for Amber Dazzles Instagram and Facebook marketing',
            illustrationImages: ['https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852304/Liquid_Foundation_zowxzz.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852304/glitter_gloss_a_insta_hsnxqb.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852301/new_arrivals_insta_hdfemq.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852300/Mountains_itenmg.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852295/lipstick_insta_s98jxs.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852290/shimmer_insta_wi0cpz.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852287/Keratin_Shampoo_vqt28u.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852283/FB_Cover_1_v1nltg.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852283/lips_insta_uc642c.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852279/banner_3_insta_vvd2ud.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852273/banner_2_insta_jxwsaw.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852273/lip_kit_insta_i4yq5u.png',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852269/face-min_ksw6kk.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852266/eyes-min_oqtrxe.jpg',
              'https://res.cloudinary.com/dxk0bmtei/image/upload/v1586852266/brush-min_zce8ba.jpg'],
          },
        ],
      },
      {
        pdfPanelHeading: '',
        pdfPanelSubText: '',
        pdfPanelFile: '',
      },
    ],
    marketing: [],
    consultation: [],
    production: [
      {
        illustration: [
          {
            illustrationText: '',
            illustrationSubText: '',
            illustrationImages: [''],
          }
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
    training: [],
    visualidentityLogo: [''],
    visualidentityLogoText: '',
    colorpaletteText: '',
    colorPaletteAllColor: [''],
    fontText: '',
    fontFamilyText: [''],
    fontFamily: [''],
    documentHeading: '',
    documentDemo: ['',
    ],
    defaultTab: 'production',
    mainVideoPanel: [{
      mainHead: '',
      mainHeadsubText: '',
      mainVideos: "",
    }]
  },
]


class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projectStateFromHome: Allprojects,
      featuredProjectinLink: acfProject,

      banrPeragh: 'KRL Creatives covers you for all digital assets your brand needs to serve your audience well.',
      banrPeragh1: 'We design, develop and produce.',
      headingpera: 'Siddiqsons',
      headingpera1: 'Limited',
      headingpera2: ' Brochure',
      banFuturPro: 'Featured project',
      devPeraImg: true,
      devParagraph: false,
      ViewPro: true,

      developBanner: 'developerFeatureBanner',
      productionBanner: 'productionFeatureBanner',
      designBanner: 'designFeatureBanner',
      marketingBanner: 'marketingFeatureBanner',

      featuredBannerImg: 'acfFeatureImgAllOver',

      defaultTab: '1'
    }
  }

  componentWillMount() {
    let data = this.props.location.state;
    console.log(data, 'data')
    if (data) {
      if (data.projectObj == undefined) {
        if (data == "marketing") {
          this.setState({
            featuredBannerImg: 'oxbridgeFeatureImgMarket',
            projectStateFromHome: marketing,
            featuredProjectinLink: oxbridgeProject,
            defaultTab: '2'
          })
        }
        else if (data == "development") {
          this.setState({
            featuredBannerImg: 'pakjazbaFeatureImgDevelop',
            projectStateFromHome: development,
            featuredProjectinLink: pakJazbaProject,
            defaultTab: '3'
          })
        }
        else if (data == "design") {
          this.setState({
            featuredBannerImg: 'siddiqSonFeatureImgDesign',
            projectStateFromHome: design,
            featuredProjectinLink: siddiqSonProject,
            defaultTab: '4'
          })
        }
        else if (data == "production") {
          this.setState({
            featuredBannerImg: 'jicaFeatureImgProduct',
            projectStateFromHome: production,
            featuredProjectinLink: jicaProject,
            defaultTab: '5'
          })
        }
      }
      else if (data.projectObj != undefined) {
        if (data.projectObj == "marketing") {
          this.setState({
            featuredBannerImg: 'oxbridgeFeatureImgMarket',
            projectStateFromHome: marketing,
            featuredProjectinLink: oxbridgeProject,
            defaultTab: '2'
          })
        }
        else if (data.projectObj == "development") {
          this.setState({
            featuredBannerImg: 'pakjazbaFeatureImgDevelop',
            projectStateFromHome: development,
            featuredProjectinLink: pakJazbaProject,
            defaultTab: '3'
          })
        }
        else if (data.projectObj == "production") {
          this.setState({
            featuredBannerImg: 'jicaFeatureImgProduct',
            projectStateFromHome: production,
            featuredProjectinLink: jicaProject,
            defaultTab: '5'
          })
        }
        else if (data.projectObj == "design") {
          this.setState({
            featuredBannerImg: 'siddiqSonFeatureImgDesign',
            projectStateFromHome: design,
            featuredProjectinLink: siddiqSonProject,
            defaultTab: '4'
          })
        }
      }
    }

    let dataLocation = this.props.location.pathname;
    if (dataLocation) {
      let routName;
      routName = dataLocation.slice(1);
      routName = routName.charAt(0).toUpperCase() + routName.slice(1);
      this.setState({ headerPath: routName });
    }
    window.scrollTo(0, 0);
  }

  tabFunction = (param) => {

    if (param == 'Allprojects') {
      this.setState({ projectStateFromHome: Allprojects });
    }
    else if (param == 'marketing') {
      this.setState({ projectStateFromHome: marketing });
    }
    else if (param == 'development') {
      this.setState({ projectStateFromHome: development });
    }
    else if (param == 'design') {
      this.setState({ projectStateFromHome: design });
    }
    else if (param == 'production') {
      this.setState({ projectStateFromHome: production });
    }
  }

  render() {
    const { TabPane } = Tabs;
    const { GFAperaas, devPeraImg, headingpera, headingpera1, headingpera2, banFuturPro, ViewPro, headerPath,
      projects, featuredProjectinLink, projectStateFromHome, featuredBannerImg, defaultTab } = this.state;

    return (

      <div className="all_backgrundImageAfter animateFadeIn">
        <Header2 headerPath={headerPath} headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" />

        {/*Featured banner*/}
        <Link to={{ pathname: `/project`, state: featuredProjectinLink, }}>
          <div className="row">
            <div className={`col-12 col-md-12 col-lg-12 col-xl-12 ${featuredBannerImg}`}></div>
          </div>
        </Link>

        <div className="row bigProjectLeft">
          <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <Tabs defaultActiveKey={defaultTab} tabPosition={'left'} style={{ color: 'white' }}>

              <TabPane
                tab={<button className="tabsBtnProject" onClick={this.tabFunction.bind(this, 'Allprojects')}>All</button>}
                key="1"
              >
              </TabPane>
              <TabPane
                tab={<button className="tabsBtnProject" onClick={this.tabFunction.bind(this, 'marketing')}>Marketing</button>}
                key="2"
              >
              </TabPane>
              <TabPane
                tab={<button className="tabsBtnProject" onClick={this.tabFunction.bind(this, 'development')}>Development</button>}
                key="3"
              >
              </TabPane>
              <TabPane
                tab={<button className="tabsBtnProject" onClick={this.tabFunction.bind(this, 'design')}>Design</button>}
                key="4"
              >
              </TabPane>
              <TabPane
                tab={<button className="tabsBtnProject" onClick={this.tabFunction.bind(this, 'production')}>Production</button>}
                key="5"
              >
              </TabPane>
            </Tabs>
          </div>
          <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7">
            <ProjectContainer projects={projectStateFromHome} defaultTabOfAllProjects={defaultTab} />
          </div>
          <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
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
