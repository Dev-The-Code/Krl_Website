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
                    <br />
                    <h3 className="teamName">Khumar Raza</h3>
                    <p className="teamDesignation">(Co-Founder)</p>
                  </div>
                  <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787050/saadbnw_jorehz.jpg'} />
                    <br />
                    <h3 className="teamName">Saad Masroor</h3>
                    <p className="teamDesignation">(Design Dept Lead)</p>
                  </div>
                  <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/masoodbnw_ugiv7k.jpg'} />
                    <br />
                    <h3 className="teamName">Masood Bukhari</h3>
                    <p className="teamDesignation">(Production Dept Lead)</p>
                  </div>
                  <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787050/Awaisbnw_aug18u.jpg'} />
                    <br />
                    <h3 className="teamName">Awais Rehman</h3>
                    <p className="teamDesignation">(Software Dept Lead)</p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: '3vw' }}>
                  <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/shayanbnw_xunz3m.jpg'} />
                    <br />
                    <h3 className="teamName">Shayan Mutahir</h3>
                    <p className="teamDesignation">(Wordpress Dept Lead)</p>
                  </div>
                  <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/daniyalbnw_zynssw.jpg'} />
                    <br />
                    <h3 className="teamName">Daniyal Raza</h3>
                    <p className="teamDesignation">(Front End Developer)</p>
                  </div>
                  <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/waqasbnw_q8wazj.jpg'} />
                    <br />
                    <h3 className="teamName">Waqas Mumtaz</h3>
                    <p className="teamDesignation">(Application Developer)</p>
                  </div>
                  <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787052/sheerazbnw_rccsbi.jpg'} />
                    <br />
                    <h3 className="teamName">M.Sheeraz</h3>
                    <p className="teamDesignation">(Application Intern)</p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: '3vw' }}>
                  <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <AllTeam drnClass='imG_teamMem' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/zainabbnw_mr5aeg.jpg'} />
                    <br />
                    <h3 className="teamName">Zainab Dawood</h3>
                    <p className="teamDesignation">(Design Intern)</p>
                  </div>
                  <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
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
                <h3 className="teamNameMob">Khumar Raza</h3>
                <p className="teamDesignationMob">(Co-Founder Of KRl Creatives)</p>
              </div>
              <div className="col-1"></div>
            </div><br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787050/saadbnw_jorehz.jpg'} />
                <h3 className="teamNameMob">Saad Masroor</h3>
                <p className="teamDesignationMob">(Design Department Lead)</p>
              </div>
              <div className="col-1"></div>
            </div><br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/masoodbnw_ugiv7k.jpg'} />
                <h3 className="teamNameMob">Masood Bukhari</h3>
                <p className="teamDesignationMob">(Production Department Lead)</p>
              </div>
              <div className="col-1"></div>
            </div><br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787050/Awaisbnw_aug18u.jpg'} />
                <h3 className="teamNameMob">Awais Rehman</h3>
                <p className="teamDesignationMob">(Full Stack Developer)</p>
              </div>
              <div className="col-1"></div>
            </div><br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/shayanbnw_xunz3m.jpg'} />
                <h3 className="teamNameMob">Shayan Mutahir</h3>
                <p className="teamDesignationMob">(Wordpress Department Lead)</p>
              </div>
              <div className="col-1"></div>
            </div><br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/daniyalbnw_zynssw.jpg'} />
                <h3 className="teamNameMob">Daniyal Raza</h3>
                <p className="teamDesignationMob">(Front End Developer)</p>
              </div>
              <div className="col-1"></div>
            </div><br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/waqasbnw_q8wazj.jpg'} />
                <h3 className="teamNameMob">Waqas Mumtaz</h3>
                <p className="teamDesignationMob">(Application Developer)</p>
              </div>
              <div className="col-1"></div>
            </div><br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787052/sheerazbnw_rccsbi.jpg'} />
                <h3 className="teamNameMob">M.Sheeraz</h3>
                <p className="teamDesignationMob">(Application Intern)</p>
              </div>
              <div className="col-1"></div>
            </div><br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <AllTeam drnClass='imG_teamMem_Mob' teamImg={'https://res.cloudinary.com/dxk0bmtei/image/upload/v1579787051/zainabbnw_mr5aeg.jpg'} />
                <h3 className="teamNameMob">Zainab Dawood</h3>
                <p className="teamDesignationMob">(Design Intern)</p>
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