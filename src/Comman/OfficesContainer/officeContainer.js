import React, { Component } from 'react';
import Moment from 'moment';

class OfficesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officeTiming : '',
      liveTiming : '',
    };
  }  
  componentDidMount(){
      this.nowLiveTimer();
  }

  componentWillMount(){
    this.handleDateKHI();
  }

  componentWillUnmount() {
    if (this.interval) {
        clearInterval(this.interval);
    }
  }

  nowLiveTimer = () => {
    this.interval = setInterval(() =>{ 
          const now = Moment().format('LTS');
          this.setState({liveTiming : now})
      }, 1000)
  }

  handleDateKHI = () =>{
    var currentTime = Moment().format('LT'); 
    var currentDay = Moment().format('dddd');   
    
    if(currentDay == 'Monday' || currentDay == 'Tuesday' || currentDay == 'Wednesday'
        || currentDay == 'Thursday' || currentDay == 'Friday'){
          if(currentTime >= '09:00:00 AM' && currentTime <= '6:00:00 PM'){
            this.setState({officeTiming: 'Open'})
            // console.log('if console Office Open');
          }
          else{
            this.setState({officeTiming: 'Close'})
            // console.log('Else console Office Close inner');
          }
    }
    else{
        this.setState({officeTiming: 'Close'})
        // console.log('Else console Office Close');
    }
  }
    render() {
      const { arizonDev, ariHead, img_Stylig , cont_textStyle1, cont_textStyle2, cont_textStyle3, inerHedTxt, inerHedTxt2, inerHedTxt3 }= this.props
      const { officeTiming , liveTiming }= this.state
      // console.log(officeTiming , 'office timming')
      // console.log(liveTiming , 'live timming')

      return (
        <div className={arizonDev}>
          <div><img src={ariHead} className={img_Stylig}/></div>
          <p className={cont_textStyle1}>{officeTiming}</p>
          <p className={cont_textStyle2}>{inerHedTxt2}</p>
          <p className={cont_textStyle3}>{inerHedTxt3}</p>
          {/* <p className={cont_textStyle1}>{liveTiming}</p> */}
          <p className="officeContainerTimerClass">{liveTiming}</p>

        </div>
    );
  }
}
export default OfficesContainer;