import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Header/header2';
import PanelDetails from './ProjectDetailsPanels/DetailsPanel1/panelDetails';
import DetailBanner from './ProjectDetailsPanels/DetailsBannerPanel2/detailsBanner';
import DetailPanelTwo from './ProjectDetailsPanels/DetailPanel2/detailPanel2';
import MarketingTab from './ContentTabsProjectDetail/MarketingTab/marketingTab';
import DevelopmentTab from './ContentTabsProjectDetail/DevelopmentTab/developmentTab';
import DesignTab from './ContentTabsProjectDetail/DesignTab/designTab';
import ProductionTab from './ContentTabsProjectDetail/ProductionTab/productionTab';
import TrainingTab from './ContentTabsProjectDetail/TrainingTab/trainingTabs';
import ConsultationTab from './ContentTabsProjectDetail/ConsultationTab/consultationTabs';
import ProjectDetailFooter from './ProjectDetailsPanels/DetailsPanelFooter9/projectDetailsFooter';
import { Tabs } from 'antd';

class ProjectDetailsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      defaultTabInDetailPage: '1',
    }
  }
  componentWillMount() {
    let data = this.props.location.pathname;
    let dataOfProject = this.props.location.state
    // console.log(this.props.location.state, 'this.props.location.state')
    if (data) {
      let routName;
      routName = data.slice(1);
      routName = routName.charAt(0).toUpperCase() + routName.slice(1);
      this.setState({
        headerPath: routName,
      });
    }

    if (dataOfProject) {
      console.log(dataOfProject.defaultTab, 'dataOfProject')
      this.setState({
        data: dataOfProject
      });
      if (dataOfProject.defaultTab == 'marketing') {
        this.setState({
          defaultTabInDetailPage: '1'
        })
      }
      else if (dataOfProject.defaultTab == 'development') {
        this.setState({
          defaultTabInDetailPage: '2'
        })
      }
      else if (dataOfProject.defaultTab == 'design') {
        this.setState({
          defaultTabInDetailPage: '3'
        })
      }
      else if (dataOfProject.defaultTab == 'production') {
        this.setState({
          defaultTabInDetailPage: '4'
        })
      }
    }
    window.scrollTo(0, 0)
  }
  componentDidMount() {
  }

  render() {
    const { headerPath, data, defaultTabInDetailPage } = this.state
    const { TabPane } = Tabs;
    return (
      <div className="animateFadeIn">
        <Header2 headerPath={headerPath} headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" />
        <PanelDetails data={data} />
        <DetailBanner data={data} />
        <DetailPanelTwo data={data} />
        <div className="row devChalnge">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Tabs defaultActiveKey={defaultTabInDetailPage} style={{ textAlign: 'center' }}>

              {data.marketing.length != 0 && <TabPane
                tab={<span>Marketing</span>}
                key="1"
              >
                <MarketingTab data={data} />
              </TabPane>}

              {data.development.length != 0 && <TabPane
                tab={<span>Development</span>}
                key="2"
              >
                <DevelopmentTab data={data} />
              </TabPane>}

              {data.design.length != 0 && <TabPane
                tab={<span>Design</span>}
                key="3"
              >
                <DesignTab data={data} />
              </TabPane>}

              {data.production.length != 0 && <TabPane
                tab={<span>Production</span>}
                key="4"
              >
                <ProductionTab data={data} />
              </TabPane>}

              {data.consultation.length != 0 && <TabPane
                tab={<span>Consultation</span>}
                key="5"
              >
                <ConsultationTab data={data} />
              </TabPane>}

              {data.training.length != 0 && <TabPane
                tab={<span>Training</span>}
                key="6"
              >
                <TrainingTab data={data} />
              </TabPane>}

            </Tabs>

            <ProjectDetailFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetailsPage;
