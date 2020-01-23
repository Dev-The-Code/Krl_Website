import React, { Component } from 'react';
import AllTeam from './allTeam';
import Handsome_img from '../../../Assets/Images/handsome.jpg';
import './ourTeam.css';


class OurTeam extends Component {

  render() {
    return (
      <div>
        <div className="d-none d-sm-block">
        <div className="animatedup animatedFadeInUp fadeInUp">
          <div className="row war_marG">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="team_txt">The Team</h2>
            </div>
          </div><br />
          <div className="row" style={{ paddingBottom: '6vw' }}>
            <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10">
              <div className="row">
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787050/khumarbnw_ejdx7d.jpg'} />
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787050/saadbnw_jorehz.jpg'} />
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/masoodbnw_ugiv7k.jpg'} />
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/shayanbnw_xunz3m.jpg'} />
                </div>
              </div>
              <div className="row" style={{marginTop: '3vw'}}>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787050/Awaisbnw_aug18u.jpg'} />
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/daniyalbnw_zynssw.jpg'} />
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/waqasbnw_q8wazj.jpg'} />
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/tahabnw_fjjr5n.jpg'} />
                </div>
              </div>
              <div className="row" style={{marginTop: '3vw'}}>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787052/sheerazbnw_rccsbi.jpg'} />
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/zainabbnw_mr5aeg.jpg'} />
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
        </div>
        </div>

        <div className="d-block d-sm-none">
        <div className="animatedup animatedFadeInUp fadeInUp">
          <div className="row war_marG">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="team_txt_mob">The Team</h2>
            </div>
          </div><br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787050/khumarbnw_ejdx7d.jpg'} />
            </div>
            <div className="col-1"></div>
          </div><br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787050/saadbnw_jorehz.jpg'} />
            </div>
            <div className="col-1"></div>
          </div><br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/masoodbnw_ugiv7k.jpg'} />
            </div>
            <div className="col-1"></div>
          </div><br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/shayanbnw_xunz3m.jpg'} />
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787050/Awaisbnw_aug18u.jpg'} />
            </div>
            <div className="col-1"></div>
          </div><br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/daniyalbnw_zynssw.jpg'} />
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/waqasbnw_q8wazj.jpg'} />
            </div>
            <div className="col-1"></div>
          </div><br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/tahabnw_fjjr5n.jpg'} />
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787052/sheerazbnw_rccsbi.jpg'} />
            </div>
            <div className="col-1"></div>
          </div><br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/zainabbnw_mr5aeg.jpg'} />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        </div>
      </div>

    );
  }
}

export default OurTeam;