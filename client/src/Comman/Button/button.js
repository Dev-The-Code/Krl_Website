import React, { Component } from 'react';

class Button extends Component {
 
    render() {
      return (
        <div>
            <button className={this.props.classMd}>
                <span className={this.props.textCss}>
                    {this.props.label}
                </span>
            </button>
        </div>
    );
  }
}

export default Button;