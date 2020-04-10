import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConsultationTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  componentWillMount() {
    
  }
  componentDidMount() {
    let data = this.props.data;
    if (data) {
      this.setState({
        data: data,
      })
    }
  }

  render() {
    const { data } = this.state
    console.log('Consultation Tab',data);
    return (
      <div className="animateFadeIn">
        
      </div>
    );
  }
}

export default ConsultationTab;
