import React, { Component } from 'react';
import './blogPost.css';

class BlogPost extends Component {
 
    render() {
      return (
        <div>
            <div className="row">
                <div className={this.props.imgEe}>
                </div>
            </div>
            <div>
                <p className={this.props.headClass}>{this.props.textH1}<br/>{this.props.textH2}</p>
                <p className={this.props.paraClass}>{this.props.textPara1}<br/>{this.props.textPara2}</p>
            </div>
        </div>
    );
  }
}

export default BlogPost;