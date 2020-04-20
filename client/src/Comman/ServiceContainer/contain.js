import React, { Component } from 'react';

class Contains extends Component {
    
    constructor(props) {
        super(props);
      }
      
    render() {
        const {kuchBhi,bhejDo , colurChange}= this.props
        console.log(colurChange)
      return (
            <div className={colurChange}>
                <p className="sh7">{kuchBhi}</p>
                <p className="sh8">{bhejDo}</p>
            </div>
    );
  }
}

export default Contains;