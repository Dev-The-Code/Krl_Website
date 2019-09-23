import React, { Component } from 'react';
import './ourOffices.css';
import OfficesContainer from '../../../Comman/OfficesContainer/officeContainer'
import khi from '../../../Assets/Images/karachi.png';
import Ari from '../../../Assets/Images/arizona.png';
import Tuc from '../../../Assets/Images/tucson.png';


class OurOffices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ari_head: 'Arizon',
      ari_head1: 'Head office',
      ariTime: '05:01 AM',
      ariPhone: ' +1 4598-3738-73',
      ariMail: ' ar@krlcreatives.com',
      tuscan_No: '+1 4598-3738-73',
      tuscan_head1: 'Marketing',
      tuscanMail: 'ts@krlcreatives.com',
      khi_head: 'Karachi',
      khi_head1: 'Operations',
      khiPhone: '+92 21 388-83676',
      khiMail: 'khi@krlcreatives.com',

    };
  }

  render() {
    const { arizonDev, ariHead, miniHead, ari_head, ari_head1, ariTime, ariPhone, ariMail, tuscan_No, tuscanMail, khi_head, khi_head1, khiPhone, khiMail } = this.state
    return (
      <div>
        <div className="d-none d-sm-block">
          <div className="row raw_background">
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <h4 className="off_head">Offices</h4>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 back_divColor">
              <OfficesContainer
                ariHead={Ari}
                img_Stylig='locat_office'
                inerHedTxt={ariTime}
                cont_textStyle1="mt-xl-4 mt-lg-4 mt-md-3 mt-sm-3 iner_head_text"
                inerHedTxt2={ariPhone}
                cont_textStyle2="iner_head_text"
                inerHedTxt3={ariMail}
                cont_textStyle3="pb-xl-3 iner_head_text"
                
              />
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 back_divColor">
              <OfficesContainer
                ariHead={khi}
                img_Stylig='locat_office'
                inerHedTxt={ariTime}
                cont_textStyle1="mt-xl-4 mt-lg-4 mt-md-3  mt-sm-3 iner_head_text"
                inerHedTxt2={khiPhone}
                cont_textStyle2="iner_head_text"
                inerHedTxt3={khiMail}
                cont_textStyle3="pb-xl-3 iner_head_text"
                
              />
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 back_divColor">
              <OfficesContainer
                ariHead={Tuc}
                img_Stylig='locat_office'
                inerHedTxt={ariTime}
                cont_textStyle1="mt-xl-4 mt-lg-4 mt-md-3 mt-sm-3 iner_head_text"
                inerHedTxt2={tuscan_No}
                cont_textStyle2="iner_head_text"
                inerHedTxt3={tuscanMail}
                cont_textStyle3="pb-xl-3 iner_head_text"
               
              />
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
        </div>
        <div className="d-block d-sm-none">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-9  raw_background">
              <div className="col-12">
                <h4 className="off_head">Offices</h4>
              </div>
              <div className="col-12 back_divColor">
                <OfficesContainer
                  ariHead={Ari}
                  img_Stylig='local_imgOffice'
                  inerHedTxt={ariTime}
                  cont_textStyle1="detail_text"
                  inerHedTxt2={ariPhone}
                  cont_textStyle2="detail_text"
                  inerHedTxt3={ariMail}
                  cont_textStyle3="detail_Email"
                />
              </div>
              <br />
              <div className="col-12 back_divColor">
                <OfficesContainer
                  ariHead={khi}
                  img_Stylig='local_imgOffice'
                  inerHedTxt={ariTime}
                  cont_textStyle1="detail_text"
                  inerHedTxt2={khiPhone}
                  cont_textStyle2="detail_text"
                  inerHedTxt3={khiMail}
                  cont_textStyle3="detail_Email"
                />
              </div>
              <br />
              <div className="col-12 back_divColor">
                <OfficesContainer
                  ariHead={Tuc}
                  img_Stylig='local_imgOffice'
                  inerHedTxt={ariTime}
                  cont_textStyle1="detail_text"
                  inerHedTxt2={tuscan_No}
                 cont_textStyle2="detail_text"
                  inerHedTxt3={tuscanMail}
                  cont_textStyle3="detail_Email"
                />
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        {/*<div className={this.props.backColor}>
                <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <h4 className={this.props.headTextOff}>Our offices</h4> 
                    <p className={this.props.decripText}>
                      We are international digital consultation<br/>
                      agency. Our offices are spread in Arizona,<br/>
                      Tuscan and Pakistan </p>
                </div>
                
                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 oCvG">
                  <div className="row">
                      <OfficesContainer arizonDev={"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 back_color_arr"} ariHead={ari_head} miniHead={ari_head1} inerHedTxt={ariTime} inerHedTxt2={ariPhone} inerHedTxt3={ariMail} />
                      <OfficesContainer arizonDev={"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 back_color_tus"} ariHead={tuscan_head} miniHead={ari_head1} inerHedTxt={ariTime} inerHedTxt2={ariPhone} inerHedTxt3={tuscanMail}/>
                      <OfficesContainer arizonDev={"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 back_color_khi"} ariHead={khi_head} miniHead={khi_head1} inerHedTxt={ariTime} inerHedTxt2={khiPhone} inerHedTxt3={khiMail}/>
                    </div>
                </div> 
            </div>*/}
      </div>

    );
  }
}

export default OurOffices;