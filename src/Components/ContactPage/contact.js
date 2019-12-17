import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReqQoute from './RequestQuote/requestQuote';
import SeeProject from './SeeProject/seeProject';
import ContBanner from './ContactBanner/contactBanner';
import OurOffice from '../About/OurOffices/ourOffices';
import Header2 from '../Header/header2';

class Contact extends React.Component {
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
    const { headerPath } = this.state
    return (
      <div className="all_backgrundImageAfter animateFadeIn">
        <Header2 headerPath={headerPath} />
        <ContBanner />

        <ReqQoute />

        <OurOffice
          backColor='row background_office'
          headTextOff='off_head_cont'
          decripText='demo_cont'
        />
        <Link to={`/project`} className="changingColor">
        <SeeProject
          seeBckColr="row footer_contact"
          roWalign='row rEw_conT'
          colSetText='col-7 col-sm-8 col-md-8 col-lg-8 col-xl-8'
          seeText='See projects'
          se_Text='ml-xl-1 se_text_cOnt'    /*class css*/
          lrgText="Can't Make Your Mind?"
          lgBrText="See some of our projects"
          se_Text1='higH_TextContact'  /*class css*/
          colSetArrow='col-5 col-sm-4 col-md-4 col-xl-4'
          arrow_Right='arrowRight1_ConTact'
        />
        </Link>
      </div>

    );
  }
}

export default Contact;