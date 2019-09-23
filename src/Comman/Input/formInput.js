import React, { Component } from 'react';

class Input extends Component {
 
    render() {
      return (
        <div>
          <input 
              type={this.props.type}
              className={this.props.className} 
              name={this.props.name} 
              placeholder={this.props.holder}
          />
        </div>
    );
  }
}

export default Input;