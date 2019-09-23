import React, { Component } from 'react';
import './ourTeam.css';


class OurTeam extends Component {
 
    render() {
      return (
          <div>
           
             <img className={this.props.drnClass} src={this.props.teamImg}/>
                 
          </div>
        
    );
  }
}

export default OurTeam;

