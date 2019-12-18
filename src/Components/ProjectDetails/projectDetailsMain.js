import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Header/header2';
import PanelDetails from './ProjectDetailsPanels/DetailsPanel1/panelDetails'; 
import DetailBanner from './ProjectDetailsPanels/DetailsBannerPanel2/detailsBanner';
import VisualIdentity from './ProjectDetailsPanels/Detailspanel3/visualIdentity';
import IconSet from './ProjectDetailsPanels/DetailsPanel4/iconSet';
import Illustration from './ProjectDetailsPanels/DetailsPanel5/illustration';
import WebSiteVideo from './ProjectDetailsPanels/DetailPanel6/webSiteVideos';
import FinalVideosYouTube from './ProjectDetailsPanels/DetailsPanel7/finalvideosYoutube';
import SomeImages from './ProjectDetailsPanels/DetailsPanel8/someImages';
import PreviousButton from '../../Comman/ProjectDetailsButtons/previousButton';
import ProjectDetailFooter from './ProjectDetailsPanels/DetailsPanelFooter9/projectDetailsFooter';


class ProjectDetailsPage extends Component {


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
    const {headerPath}= this. state

    return (
        <div className="animateFadeIn">
          <Header2 headerPath={headerPath} headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" />
            <PanelDetails />
            <DetailBanner />
            <VisualIdentity />
            <IconSet />
            <Illustration />
            <WebSiteVideo />
            <FinalVideosYouTube />
            <SomeImages />
            <PreviousButton />
            <ProjectDetailFooter />
        </div>
    );
  }
}

export default ProjectDetailsPage;
    