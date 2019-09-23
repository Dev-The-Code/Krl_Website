import React, { Component } from 'react';
import ReqQoute from './RequestQuote/requestQuote';
import SeeProject from './SeeProject/seeProject';
import ContBanner from './ContactBanner/contactBanner';
import OurOffice from '../About/OurOffices/ourOffices';
import Header2 from '../Header/header2';

class Contact extends React.Component {

  render() {
    return (
      <div>
        <Header2 />
        <ContBanner />

        <br /><br />

        <ReqQoute />

        <br /><br /><br /><br />

        <OurOffice
          backColor='row background_office'
          headTextOff='off_head_cont'
          decripText='demo_cont'
        />

        <br /><br /><br />

        <SeeProject
          seeBckColr="row footer_contact"
          colSetText='col-7 col-sm-8 col-md-8 col-lg-8 col-xl-8'
          seeText='See projects'
          se_Text='ml-xl-1 se_text'    /*class css*/
          lrgText="Can't Make Your Mind?"
          lgBrText="See our projects!"
          se_Text1='large_text'  /*class css*/
          colSetArrow='col-5 col-sm-4 col-md-4 col-lg-4 col-xl-4'
          arrow_Right='arrowRight1'
        />
      </div>

    );
  }
}

export default Contact;