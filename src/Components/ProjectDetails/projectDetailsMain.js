import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Header/header2';
import PanelDetails from './ProjectDetailsPanels/DetailsPanel1/panelDetails';
import DetailBanner from './ProjectDetailsPanels/DetailsBannerPanel2/detailsBanner';
import ProjDetailsMainTabs from './projDetailMainTabs';
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
                <ProjDetailsMainTabs data={data} />
              </TabPane>
              <TabPane
                tab={<span>Development</span>}
                key="2"
              >
              </TabPane>
                <ProjDetailsMainTabs data={data} />
              <TabPane
                tab={<span>Design</span>}
                key="3"
              >
                <ProjDetailsMainTabs data={data} />
              </TabPane>
              <TabPane
                tab={<span>Production</span>}
                key="4"
              >
                <ProjDetailsMainTabs data={data} />
              </TabPane>
              <TabPane
                tab={<span>Consultation</span>}
                key="5"
              >
                <ProjDetailsMainTabs data={data} />
              </TabPane>
              <TabPane
                tab={<span>Training</span>}
                key="6"
              >
                <ProjDetailsMainTabs data={data} />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetailsPage;
