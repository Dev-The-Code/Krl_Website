import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Components/Projects/projects.css';


class ProjectContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { projects } = this.props
    return (
      <div>
        
        {projects && projects.map((elem, key) => {
          return (
            <div className="row">
              <div className="col-12 col-md-11 col-xl-10 col-lg-10">
                <div className="animatedup animatedFadeInUp fadeInUp">
                  <div className="row" style={{ paddingRight: '0vw' }}>
                    <div className={elem.frontImg}>
                      <h2 className="GFAhedngProjects">{elem.name}</h2>
                      <div className="row">
                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                        <div className="col-12 col-md-12 col-xl-8 col-lg-9 bgChildProject">
                          <p className="GFApera">
                            {elem.desciption.slice(0, 70)}...
                                </p>
                          <Link rel="noopener noreferrer"
                            to={{ pathname: `/project`, state: elem, }}
                            className="changingdec">
                            <a className="changingdec">
                              <p className="GFApera1">
                                View Project<img href="#" className="GFAimg" src={require('../../Assets/Images/arrowPurple.png')} />
                              </p>
                            </a>
                          </Link>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div>
                  </div>
                </div><br /><br />
              </div>
              <div className="col-12 col-md-1 col-xl-2 col-lg-2"></div>
            </div>
          )
        })}
      </div>

    );
  }
}

export default ProjectContainer;
