import React, { Component } from 'react';
import './seeProject.css';

class SeeProject extends Component {
    constructor(props){
    super(props);

    }
    render() {
        const{seeBckColr, se_Text, se_Text1, arrow_Right, seeText, lrgText, lgBrText}= this.props;
      return (
        <div>
            <div className={seeBckColr}>{/*row SEE_backColor */}
                <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                <div className="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                    <div className="row">
                        <div className={this.props.colSetText}>
                            <h4 className={se_Text}>{seeText}</h4><br/>{/*se_text */}
                            <h1 className={se_Text1}>{lrgText}<br/>{lgBrText}</h1>{/*large_text */}
                        </div>
                        <div className={this.props.colSetArrow}>
                            <img href="#" className={arrow_Right} src={require('../../../Assets/Images/arrow.png')} />
                        </div>
                    </div>                
                </div>
            </div>
        </div>        
    );
  }
}

export default SeeProject;