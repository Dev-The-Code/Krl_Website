import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Header/header2';
import PanelDetails from './ProjectDetailsPanels/DetailsPanel1/panelDetails';
import DetailBanner from './ProjectDetailsPanels/DetailsBannerPanel2/detailsBanner';
import DetailPanelTwo from './ProjectDetailsPanels/DetailPanel2/detailPanel2';
import VisualIdentity from './ProjectDetailsPanels/Detailspanel3/visualIdentity';
import IconSet from './ProjectDetailsPanels/DetailsPanel4/iconSet';
import Illustration from './ProjectDetailsPanels/DetailsPanel5/illustration';
import WebSiteVideo from './ProjectDetailsPanels/DetailPanel6/webSiteVideos';
import FinalVideosYouTube from './ProjectDetailsPanels/DetailsPanel7/finalvideosYoutube';
import SomeImages from './ProjectDetailsPanels/DetailsPanel8/someImages';
import PreviousButton from '../../Comman/ProjectDetailsButtons/previousButton';
import ProjectDetailFooter from './ProjectDetailsPanels/DetailsPanelFooter9/projectDetailsFooter';
import { Tabs } from 'antd';

class DetailAllTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // data: this.props.location.state,
      data: ''
    }
  }
  // componentWillMount() {
  //   console.log(this.state.data, 'data in priject tabs file');
  // }
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

    // console.log(data, 'data in priject tabs file');
    return (
      <div className="animateFadeIn">
        <DetailPanelTwo data={data} />
        <VisualIdentity data={data} />
        {/* <IconSet data={data} /> */}
        <Illustration data={data} />
        <FinalVideosYouTube data={data} />
        <WebSiteVideo data={data} />
        <SomeImages data={data} />
        <PreviousButton data={data} />
        <ProjectDetailFooter data={data} />
      </div>
    );
  }
}

export default DetailAllTabs;
