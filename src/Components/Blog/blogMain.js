import React, { Component } from 'react';
import Banner from '../Banner/banner';
import Blog from './BlogContent/blog1';
import   Header2 from '../Header/header2'
class blog extends React.Component {
 
    render() {
      return (
          <div>
              <Header2 />
              <Banner 
                  mainClas='raw_marg'
                  styleHeading='banner_textStyle'
                  bannerText='How to manage a rebrand' 
                  lateText='Latest post'
                  rawLateText='row'
                  reBrandText='Rebrand can be scary, but sometimes they are all your business nee...'
              />
              <Blog/>
          </div>
        
    );
  }
}

export default blog;



