import React, { Component } from 'react';
import './servicesPage.css';
import MainPageServices from '../../Comman/ServicesMainContainer/mainPageServices';


class ServicesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      development: 'development',
      production: 'production',
      design: 'design',
      marketing: 'marketing',

      serviceHeading: 'Services',
      marketHeading: 'Marketing',
      offerHeading: 'Few services we offer',
      offerPeragraph: '-Social Media Marketing',
      offerPeragraph1: '-Billboard Advertisement',
      offerPeragraph2: '-Compaign Marketing',
      offerPeragraph3: '',
      developmentHeading: 'Development',
      designHeading: 'Design',
      productionHeading: 'Production',
      marketPeragraph: 'With the power of empathy transparent communication and honest dealing, we work with you to help you find the right path to maximissing the outcome your brand creates.',



      devPeraAeroImg: true,
      devParagraph: false,
      ViewPro: true,

      marketingBanner : 'marketing',

    }
  }


  render() {
    const { serviceHeading, marketHeading, offerHeading, offerPeragraph, offerPeragraph1, offerPeragraph2, offerPeragraph3, devPeraAeroImg, devParagraph, ViewPro,
          marketing, production, design, development,developmentHeading, designHeading, productionHeading, marketPeragraph, } = this.state
    return (
      <div className="animateFadeIn">

        {/* mobile hidden */}
        <div className="d-none d-xl-block d-lg-block d-md-block">
          <MainPageServices
            serviceH1="hedngSir"
            serviceH1text={serviceHeading}
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 market"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={marketHeading}
            marketBox3="marketChildDev1"
            marketPragph="marketPera"
            marketPeraText='We stand by the triad of empathy, transparency and honest dealing in order to help you find the right path to maximise the success and outcome created by your brand.'
            marketBox4="marketChildDev1"
            offerH5="weOffer"
            offerH5text={offerHeading}
            offerPragph="offerPeras"
            offerPeraText={offerPeragraph}
            offerPeraText1={offerPeragraph1}
            offerPeraText2={offerPeragraph2}
            marketBox5="marketChildDev2"

            PeraAerroImg={devPeraAeroImg}
            peraAeroImg="peraAero"
            LP_rightAeroImg="LP_AeroImg"
            projectObj={marketing}
          />
          <MainPageServices
            serviceH1="hedngSir"
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 development"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={developmentHeading}
            marketBox3="marketChildDev1"
            marketPragph="marketPera"
            marketPeraText='Our developers are up-to-date with the latest and cutting-edge technologies and use them to provide efficient solutions for your brand.'
            marketBox4="marketChildDev1"
            offerH5="weOffer"
            offerH5text={offerHeading}
            offerPragph="offerPeras"
            offerPeraText='- Mobile Appications'
            offerPeraText1='- Web Development'
            offerPeraText2='- Wordpress Development'
            offerPeraText3='- Ecommerce Websites'
            marketBox5="marketChildDev2"

            PeraAerroImg={devPeraAeroImg}
            peraAeroImg="peraAero"
            LP_rightAeroImg="LP_AeroImg"
            projectObj={development}
          />
          <MainPageServices
            serviceH1="hedngSir"
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 design"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={designHeading}
            marketBox3="marketChildDev1"
            marketPragph="marketPera"
            marketPeraText='Our designers work diligently to create immersive experiences that help you achieve your business goals whilst engaging your target audience simultaneously. '
            marketBox4="marketChildDev1"
            offerH5="weOffer"
            offerH5text={offerHeading}
            offerPragph="offerPeras"
            offerPeraText='- Creative Direction'
            offerPeraText1='- Branding'
            offerPeraText2='- UI / UX, Web Design'
            offerPeraText3='- Print Designs'
            marketBox5="marketChildDev2"

            PeraAerroImg={devPeraAeroImg}
            peraAeroImg="peraAero"
            LP_rightAeroImg="LP_AeroImg"
            projectObj={design}
          />
          <MainPageServices
            serviceH1="hedngSir"
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 production"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={productionHeading}
            marketBox3="marketChildDev1"
            marketPragph="marketPera"
            marketPeraText='Did you say photos and videos? Our producers have got you covered with their expertise and their eye for great lighting. From documentaries and digital videos to photography and production, our team is always ready to get behind the lens and tell your story.'
            marketBox4="marketChildDev1"
            offerH5="weOffer"
            offerH5text={offerHeading}
            offerPragph="offerPeras"
            offerPeraText='- Product Photography'
            offerPeraText1='- TVC & Documentaries'
            offerPeraText2='- Event Coverage'
            offerPeraText3='- Interviews & Podcasts'
            marketBox5="marketChildDev2"

            PeraAerroImg={devPeraAeroImg}
            peraAeroImg="peraAero"
            LP_rightAeroImg="LP_AeroImg"
            projectObj={production}

          />
        </div>

        {/* mobile visible */}
        <div className="d-block d-xl-none d-lg-none d-md-none">
          <MainPageServices
            serviceH1="hedngSir"
            serviceH1text={serviceHeading}
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 marketMob"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={marketHeading}
            marketMobBox="marketChildDevMob1"
            marketPragph="marketPeraMob"
            marketPeraText='We stand by the triad of empathy, transparency and honest dealing in order to help you find the right path to maximise the success and outcome created by your brand.'
            offerH5="weOffer"
            offerH5text={offerHeading}
            offerPragph="offerPerasMob"
            offerPeraText={offerPeragraph}
            offerPeraText1={offerPeragraph1}
            offerPeraText2={offerPeragraph2}
            marketMobBox1="marketChildDevMob2"

            PeraAerroImg={devPeraAeroImg}
            peraAeroImg="peraAero"
            LP_rightAeroImg="LP_AeroImg"
            projectObj={marketing}
          />
          <MainPageServices
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 developmentMob"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={developmentHeading}
            marketMobBox="marketChildDevMob1"
            marketPragph="marketPeraMob"
            marketPeraText='Our developers are up-to-date with the latest and cutting-edge technologies being used today and do not shy away from using them to provide efficient solutions for your brand.'
            offerH5="weOffer"
            offerH5text={offerHeading}
            offerPragph="offerPerasMob"
            offerPeraText='- Mobile Appications'
            offerPeraText1='- Web Development'
            offerPeraText2='- Wordpress Development'
            offerPeraText3='- Ecommerce Websites'
            marketMobBox1="marketChildDevMob2"

            PeraAerroImg={devPeraAeroImg}
            peraAeroImg="peraAero"
            LP_rightAeroImg="LP_AeroImg"
            projectObj={development}
          />
          <MainPageServices
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 designMob"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={designHeading}
            marketMobBox="marketChildDevMob1"
            marketPragph="marketPeraMob"
            marketPeraText='Our designers work diligently to create immersive experiences that help you achieve your business goals whilst engaging your target audience simultaneously.  '
            offerH5="weOffer"
            offerH5text={offerHeading}
            offerPragph="offerPerasMob"
            offerPeraText='- Creative Direction'
            offerPeraText1='- Branding'
            offerPeraText2='- UI / UX, Web Design'
            offerPeraText3='- Print Designs'
            marketMobBox1="marketChildDevMob2"

            PeraAerroImg={devPeraAeroImg}
            peraAeroImg="peraAero"
            LP_rightAeroImg="LP_AeroImg"
            projectObj={design}
          />
          <MainPageServices
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 productionMob"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={productionHeading}
            marketMobBox="marketChildDevMob1"
            marketPragph="marketPeraMob"
            marketPeraText='Did you say photos and videos? Our producers have got you covered with their expertise and their eye for great lighting. From documentaries and digital videos to photography and production, our team is always ready to get behind the lens and tell your story.'
            offerH5="weOffer"
            offerH5text={offerHeading}
            offerPragph="offerPerasMob"
            offerPeraText='- Product Photography'
            offerPeraText1='- TVC & Documentaries'
            offerPeraText2='- Event Coverage'
            offerPeraText3='- Interviews & Podcasts'
            marketMobBox1="marketChildDevMob2"

            PeraAerroImg={devPeraAeroImg}
            peraAeroImg="peraAero"
            LP_rightAeroImg="LP_AeroImg"
            projectObj={production}
          />
        </div>

      </div>
    );
  }
}

export default ServicesPage;
