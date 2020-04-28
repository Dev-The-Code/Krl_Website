import React, { Component } from 'react';
import './ourOffices.css';
import OfficesContainer from '../../../Comman/OfficesContainer/officeContainer'
import khi from '../../../Assets/Images/karachi.png';
import Ari from '../../../Assets/Images/dallas.png';
import Dal from '../../../Assets/Images/arizona.png';
import moment from 'moment';

class OurOffices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ari_head: 'Arizon',
      ari_head1: 'Head office',
      ariPhone: '+92 21 388-83676',
      ariMail: ' info@krlcreatives.com',
      dallas_No: '+92 21 388-83676',
      tuscan_head1: 'Marketing',
      tuscanMail: 'info@krlcreatives.com',
      khi_head: 'Karachi',
      khi_head1: 'Operations',
      khiPhone: '+92 21 388-83676',
      khiMail: 'info@krlcreatives.com',

      officeTimingKHI : '',
      officeTimingARZ : '',
      officeTimingDals : '',
    };
  }


  componentWillMount(){
    this.handleDateKHI();
    this.handleDateARZ();
    this.handleDateDals();
  }

  handleDateKHI = () =>{
    var currentTimeKHI = moment().format('LT'); 
    var currentDayKHI = moment().format('dddd');   
    
    if(currentDayKHI == 'Monday' || currentDayKHI == 'Tuesday' || currentDayKHI == 'Wednesday'
        || currentDayKHI == 'Thursday' || currentDayKHI == 'Friday'){
          if(currentTimeKHI >= '09:00:00 AM' && currentTimeKHI <= '6:00:00 PM'){
            this.setState({officeTimingKHI: 'Open'})
            // console.log('if console Office Open');
          }
          else{
            this.setState({officeTimingKHI: 'Close'})
            // console.log('Else console Office Close inner');
          }
    }
    else{
        this.setState({officeTimingKHI: 'Close'})
        // console.log('Else console Office Close');
    }
  }

  handleDateARZ = () =>{
    var currentTimeARZ = moment.tz('America/Phoenix').format('LTS'); 
    var currentDayARZ = moment.tz('America/Phoenix').format('dddd');   

    // console.log("Arizona Time",currentTimeARZ);
    // console.log("Arizona Day",currentDayARZ);

    if(currentDayARZ == 'Monday' || currentDayARZ == 'Tuesday' || currentDayARZ == 'Wednesday'
        || currentDayARZ == 'Thursday' || currentDayARZ == 'Friday'){
          if(currentTimeARZ >= '9:00:00 AM' && currentTimeARZ <= '6:00:00 PM'){
            this.setState({officeTimingARZ: 'Open'})
            // console.log('if console Office Open');
          }
          else{
            this.setState({officeTimingARZ: 'Close'})
            // console.log('Else console Office Close inner');
          }
    }
    else{
        this.setState({officeTimingARZ: 'Close'})
        // console.log('Else console Office Close');
    }
  }

  handleDateDals = () =>{
    var currentTimeDals = moment.tz('America/Jamaica').format('LTS'); 
    var currentDayDals = moment.tz('America/Jamaica').format('dddd');   

    console.log("Dallas Time",currentTimeDals);
    console.log("Dallas Day",currentDayDals);

    if(currentDayDals == 'Monday' || currentDayDals == 'Tuesday' || currentDayDals == 'Wednesday'
        || currentDayDals == 'Thursday' || currentDayDals == 'Friday'){
          if(currentTimeDals >= '9:00:00 AM' && currentTimeDals <= '6:00:00 PM'){
            this.setState({officeTimingDals: 'Open'})
            console.log('if console Office Open');
          }
          else{
            this.setState({officeTimingDals: 'Close'})
            console.log('Else console Office Close innerr');
          }
    }
    else{
        this.setState({officeTimingDals: 'Close'})
        console.log('Else console Office Close');
    }
  }

  render() {
    const { officeTimingKHI , officeTimingARZ, officeTimingDals,  officeTiming , ariPhone, ariMail, dallas_No, tuscanMail, khiPhone, khiMail } = this.state
    return (
      <div>
        <div className="d-none d-sm-block">
        <div className="animatedup animatedFadeInUp fadeInUp">
          <div className="row raw_background">
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <h4 className="off_head">Offices</h4>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 back_divColor">
              <OfficesContainer
                ariHead={khi}
                img_Stylig='locat_office'
                officeTimeStatus={officeTimingKHI}
                // inerHedTxt={officeTiming}
                cont_textStyle1="mt-xl-4 mt-lg-4 mt-md-3 mt-sm-3 iner_head_textKhi"
                inerHedTxt2={khiPhone}
                cont_textStyle2="iner_head_text"
                inerHedTxt3={khiMail}
                cont_textStyle3="pb-xl-3 iner_head_text"              
              />
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 back_divColor">
              <OfficesContainer
                ariHead={Dal}
                img_Stylig='locat_office'
                officeTimeStatus={officeTimingARZ}
                // inerHedTxt={officeTiming}
                cont_textStyle1="mt-xl-4 mt-lg-4 mt-md-3  mt-sm-3 iner_head_textKhi"
                inerHedTxt2={ariPhone}
                cont_textStyle2="iner_head_text"
                inerHedTxt3={khiMail}
                cont_textStyle3="pb-xl-3 iner_head_text"
                
              />
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 back_divColor">
              <OfficesContainer
                ariHead={Ari}
                img_Stylig='locat_office'
                officeTimeStatus={officeTimingDals}
                // inerHedTxt={officeTiming}
                cont_textStyle1="mt-xl-4 mt-lg-4 mt-md-3 mt-sm-3 iner_head_textKhi"
                inerHedTxt2={dallas_No}
                cont_textStyle2="iner_head_text"
                inerHedTxt3={ariMail}
                cont_textStyle3="pb-xl-3 iner_head_text"
               
              />
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          </div>
        </div>
        
        <div className="d-block d-sm-none">
        <div className="animatedup animatedFadeInUp fadeInUp">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-9  raw_background">
              <div className="col-12">
                <h4 className="off_head_Mob">Offices</h4>
              </div>
              <div className="col-12 back_divColor_moB">
                <OfficesContainer
                  ariHead={khi}
                  img_Stylig='local_imgOffice'
                  officeTimeStatus={officeTimingKHI}
                  // inerHedTxt={officeTiming}
                  cont_textStyle1="detail_textKhi"
                  inerHedTxt2={khiPhone}
                  cont_textStyle2="detail_text"
                  inerHedTxt3={ariMail}
                  cont_textStyle3="detail_Email"
                />
              </div>
              <br />
              <div className="col-12 back_divColor_moB">
                <OfficesContainer
                  ariHead={Dal}
                  img_Stylig='local_imgOffice'
                  officeTimeStatus={officeTimingARZ}
                  // inerHedTxt={officeTiming}
                  cont_textStyle1="detail_textKhi"
                  inerHedTxt2={dallas_No}
                  cont_textStyle2="detail_text"
                  inerHedTxt3={khiMail}
                  cont_textStyle3="detail_Email"
                />
              </div>
              <br />
              <div className="col-12 back_divColor_moB">
                <OfficesContainer
                  ariHead={Ari}
                  img_Stylig='local_imgOffice'
                  officeTimeStatus={officeTimingDals}
                  // inerHedTxt={officeTiming}
                  cont_textStyle1="detail_textKhi"
                  inerHedTxt2={dallas_No}
                 cont_textStyle2="detail_text"
                  inerHedTxt3={tuscanMail}
                  cont_textStyle3="detail_Email"
                />
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          </div>
        </div>
      </div>

    );
  }
}

export default OurOffices;