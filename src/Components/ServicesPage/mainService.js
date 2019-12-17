import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './servicesPage.css';
import ProjectContainer from '../../Comman/ProjectContainer/projectContainer';
import MainPageServices from '../../Comman/ServicesMainContainer/mainPageServices';
class ServicesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      serviceHeading: 'Services',
      marketHeading: 'Marketing',
      offerHeading: 'Few services we offer',
      offerPeragraph: '-Social Media Marketing',
      offerPeragraph1: '-Billboard Advertisement',
      offerPeragraph2: '-Compaign Marketing',
      developmentHeading: 'Development',
      designHeading: 'Design',
      productionHeading: 'Production',
      marketPeragraph: 'With the power of empathy transparent communication and honest dealing, we work with you to help you find the right path to maximissing the outcome your brand creates.',



      devPeraAeroImg: true,
      devParagraph: false,
      ViewPro: true


    }
  }


  render() {
    const {serviceHeading, marketHeading, offerHeading, offerPeragraph, offerPeragraph1, offerPeragraph2, devPeraAeroImg, devParagraph, ViewPro,
      developmentHeading, designHeading, productionHeading, marketPeragraph,} = this.state

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
          marketPeraText={marketPeragraph}
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
            marketPeraText={marketPeragraph}
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
            marketPeraText={marketPeragraph}
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
            marketPeraText={marketPeragraph}
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
            marketPeraText={marketPeragraph}
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
          />

          <MainPageServices 
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 developmentMob"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={developmentHeading}
            marketMobBox="marketChildDevMob1"
            marketPragph="marketPeraMob"
            marketPeraText={marketPeragraph}
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
          />

          <MainPageServices 
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 designMob"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={designHeading}
            marketMobBox="marketChildDevMob1"
            marketPragph="marketPeraMob"
            marketPeraText={marketPeragraph}
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
          />

          <MainPageServices 
            marketBox="col-xl-11 col-lg-11 col-md-11 col-11 productionMob"
            marketBox1="col-xl-12 col-lg-12 col-md-12 col-12 marketDev2"
            marketBox2="col-xl-12 col-lg-12 col-md-12 col-12 marketChildDev"
            marketH1="hedngMarket"
            marketH1text={productionHeading}
            marketMobBox="marketChildDevMob1"
            marketPragph="marketPeraMob"
            marketPeraText={marketPeragraph}
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
          />
        </div>

      </div>
    );
  }
}

export default ServicesPage;
