import React, { Component } from 'react';


class OfficesContainer extends Component {

  constructor(props) {
    super(props);
  }

    render() {
      const {arizonDev, ariHead, img_Stylig , cont_textStyle1, cont_textStyle2, cont_textStyle3, inerHedTxt, inerHedTxt2, inerHedTxt3 }= this.props
      //console.log(arizonDev, ariHead, miniHead,inerHedTxt)
      return (
        <div className={arizonDev}>
          <div><img src={ariHead} className={img_Stylig}/></div>
          <p className={cont_textStyle1}>{inerHedTxt}</p>
          <p className={cont_textStyle2}>{inerHedTxt2}</p>
          <p className={cont_textStyle3}>{inerHedTxt3}</p>

        </div>
    );
  }
}

export default OfficesContainer;