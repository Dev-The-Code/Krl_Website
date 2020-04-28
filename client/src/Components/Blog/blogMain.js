import React, { Component } from 'react';
import Banner from '../Banner/banner';
import Blog from './BlogContent/blog1';
import Header2 from '../Header/header2';

class blog extends React.Component {
  componentWillMount() {
    let data = this.props.location.pathname;
    if(data){
      let routName;
      routName = data.slice(1);
      routName = routName.charAt(0).toUpperCase() + routName.slice(1);
      this.setState({ headerPath: routName });
    }
    //  console.log(routName,'sss');
    window.scrollTo(0, 0)
  }
  render() {
    const { headerPath } = this.state
    return (
      <div className="all_backgrundImageAfter animateFadeIn">
        <Header2 headerPath={headerPath}  headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" />
        <Banner
          mainClas='raw_marg animatedup animatedFadeInUp fadeInUp'
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



