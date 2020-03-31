import React, { Component } from 'react';
import moment from 'moment';
import tz from 'moment-timezone';

class OfficesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveTiming : '',
    };
  }  
  componentDidMount(){
      this.nowLiveTimer();
  }


  componentWillUnmount() {
    if (this.interval) {
        clearInterval(this.interval);
    }
  }

  nowLiveTimer = () => {
    this.interval = setInterval(() =>{ 
          const now = moment().format('LTS');
          this.setState({liveTiming : now})
      }, 1000)
  }

 

    render() {
      const {officeTimeStatus, arizonDev, ariHead, img_Stylig , cont_textStyle1, cont_textStyle2, cont_textStyle3, inerHedTxt, inerHedTxt2, inerHedTxt3 }= this.props
      const { officeTimingKHI , officeTimingARZ , officeTimingDals ,  liveTiming }= this.state
      // console.log(officeTiming , 'office timming')
      // console.log(liveTiming , 'live timming')

      return (
        <div className={arizonDev}>
          <div><img src={ariHead} className={img_Stylig}/></div>
          <p className={cont_textStyle1}>{officeTimeStatus}</p>
          <p className={cont_textStyle2}>{inerHedTxt2}</p>
          <p className={cont_textStyle3}>{inerHedTxt3}</p>
          {/* <p className={cont_textStyle1}>{liveTiming}</p> */}
          {/* <p className="officeContainerTimerClass">{liveTiming}</p> */}

        </div>
    );
  }
}
export default OfficesContainer;