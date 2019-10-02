import React, { Component } from 'react';
import Banner from '../Banner/banner';
import Blog from './BlogContent/blog1';
import Header2 from '../Header/header2'
class blog extends React.Component {
  componentWillMount() {
    let data = this.props.location.pathname;
    let routName;
    routName = data.slice(1);
    routName = routName.charAt(0).toUpperCase() + routName.slice(1);
    //  console.log(routName,'sss');
    this.setState({ headerPath: routName });
    window.scrollTo(0, 0)
  }
  render() {
    const { headerPath } = this.state
    return (
      <div>
        <Header2 headerPath={headerPath} />
        <Banner
          mainClas='raw_marg'
          styleHeading='banner_textStyle'
          bannerText='How to manage a rebrand'
          lateText='Latest post'
          rawLateText='row'
          reBrandText='Rebrand can be scary, but sometimes they are all your business nee...'
        />
        <Blog />
      </div>

    );
  }
}

export default blog;



