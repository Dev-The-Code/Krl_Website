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

class ProjectDetailsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.location.state,
    }
  }
  componentWillMount() {
    let data = this.props.location.pathname;
    if (data) {
      let routName;
      routName = data.slice(1);
      routName = routName.charAt(0).toUpperCase() + routName.slice(1);
      this.setState({ headerPath: routName });
    }
    //  console.log(routName,'sss');
    window.scrollTo(0, 0)
  }
  componentDidMount() {

  }

  render() {
    const { headerPath, data } = this.state
    // console.log("ProjectDetailsPage -> data", data)
    const { TabPane } = Tabs;
    return (
      <div className="animateFadeIn">
        <Header2 headerPath={headerPath} headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" />
        <PanelDetails data={data} />
        <DetailBanner data={data} />
        <div className="row devChalnge">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Tabs defaultActiveKey="1" style={{ textAlign: 'center' }}>
              <TabPane
                tab={<span>Marketing</span>}
                key="1"
              >
                
              </TabPane>
              <TabPane
                tab={<span>Development</span>}
                key="2"
              >
              </TabPane>
              <TabPane
                tab={<span>Design</span>}
                key="3"
              >

              </TabPane>
              <TabPane
                tab={<span>Production</span>}
                key="4"
              >

              </TabPane>
              <TabPane
                tab={<span>Consultation</span>}
                key="5"
              >
              </TabPane>
              <TabPane
                tab={<span>Training</span>}
                key="6"
              >
              </TabPane>
            </Tabs>
          </div>
        </div>
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

export default ProjectDetailsPage;
