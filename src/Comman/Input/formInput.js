import React, { Component } from 'react';
import { Input } from 'antd';

class InputComponent extends Component {
 
    render() {
      return (
        <div>
          <Input 
              type={this.props.type}
              className={this.props.className} 
              name={this.props.name} 
              placeholder={this.props.holder}
          />
        </div>
    );
  }
}

export default InputComponent;