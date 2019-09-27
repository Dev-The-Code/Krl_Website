import React, { Component } from 'react';
import AboutUs from './AboutUs/aboutUs';
import Services from './Services/services';
import OurCoreValues from './OurCoreValues/ourCoreValues';
import OurOffices from './OurOffices/ourOffices';
import OurTeam from './OurTeam/ourTeam';
import SocialMedia from './SocialMedia/socialMedia';
import Header2 from '../Header/header2';
import SeeProject from '../ContactPage/SeeProject/seeProject';
import Contains from '../../Comman/ServiceContainer/contain';
import AboutBanner from './AboutBanner/aboutBanner';
import '../../Components/ContactPage/SeeProject/seeProject.css';


class About extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sendPrp: 'Send a request',
      hedngPrp: "Let's build something ",
      hedngPrp1: "awesome together!",
    };
  }

  render() {
    return (
      <div>
        <Header2 />

        <AboutBanner 
          Consl_text='Consultation'
          solu_text='with solution.'
          para_Text='divi_Colorsty'
          para_ClaSs='para_Textt'
          descrip_Text='KRL Creatives provides consultation businesses to help them grow. We listen thouroughly to your problem, empathize with you and your customers and create useful digital solutions that maximise your return on investments.'
          mOR_texT=''
          conts_sol='Consultation '
          With_sool='with solution.'
          bigGerText="KRL Creatives provides consultation businesses to help them grow.
          We listen thouroughly to your problem, empathize with you and your
          customers and create useful digital solutions that maximise
          your return on investments."
          bigGerInSmall=''
        />
        <br /><br />
        <OurCoreValues />
        <OurOffices
          backColor='row raw_background'
          headTextOff='off_head'
          decripText='demo'
        />
        <OurTeam />
        <SocialMedia />
        <SeeProject
          seeBckColr="row SEE_backColor"
          se_Text="se_text"
          se_Text1="large_text"
          seeText="Let's build something awesome together"
          lrgText="Send a request"
          lgBrText=""
          arrow_Right="arrowRight1"
        />
      </div>

    );
  }
}

export default About;