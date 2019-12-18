import React, { Component } from 'react';
import Header2 from '../../Header/header2';
import './blogDetails.css';
class BlogDetails extends Component {

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
    const { headerPath } = this.state
    return (
      <div className="animateFadeIn">
        <Header2 headerPath={headerPath} headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" />
        <div className="animatedup animatedFadeInUp fadeInUp">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-1"></div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10">
              <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 blgDev">

                  <p className="blgDetl"><i>Rebrands can be scary, but sometimes they are all your business needs.</i></p>

                  <br />

                  <p className="blgDetl">We're initiating a series of posts about the challenges facing Cuber-to's world-class devs where Design with a capital 'D' take prece-dences.
                    We'll Share non-template app development experiencess and give you a glimpse into how are exceptional develpers trans-form novel ideas into solid reality.
                    </p>

                  <p className="blgDetl"><b className="blgDetl2">Desclaimer:</b>our solutions aren't intended to be a guide or refernce to mobile app development.</p>

                  <br />

                  <p className="blgDetl3">At the outset</p>

                  <p className="blgDetl">At the outset it's worth mentioning that logic-minded devs have a hard time understanding howa it's even possible to sketch an adap-tive design without linking every little thing on the smartphone screen to screen resolution.
                    On the other hand, asthetically-moti-vated designers don't see what's so hard about putting a button and block of text on a single line in both in iPhone 8 and the same in iPhone SE, but along with the input button.
                       <br /><br />
                    This is just a small example of topical designer/developer clashes, but our company always find a compromise that leaves everybody happy. The takeaway design and development is a single whole.
                    You shouldn't order design from a studio that has no development experience. Othewise, it will be drawing mock-ups without devel-opment logic.
                    </p>

                  <br />

                  <span className="blgDetl5">
                    <p>
                      <i>"The takeaway:design and development
                          <br />
                        is a single whole."
                        </i>
                    </p>
                  </span>

                  <p className="blgDetl">After years of working with a variety of applications we've ham-mered out some guiding principles.
                    For example, we don't waste time on universal components which can be used in other future projects.
                      <e className="blgDetl6">Our design philosophy</e> demands a unique approach to each project--we don't do cookie-cutter template.
                    We also devoted a ton of attention to UI details and make every effort to gen-erate and elegant, supported code while still allowing for a few "workarounds" here and there for achieving the desired effect.
                    </p>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 blgDetlDev"></div>

                  <span className="blgDetl7" style={{ textAlign: 'center' }}>
                    <p>
                      <small>
                        <i>image credit: Forbes.</i>
                      </small>
                    </p>
                  </span>

                  <p className="blgDetl">This is just a small example of topical designer/developer clashes, but our company always find a compromise that leaves everybody happy. The takeaway design and development is a single whole.
                    You shouldn't order design from a studio that has no development experience. Othewise, it will be drawing mock-ups without devel-opment logic.</p>

                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
              </div>

            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-1"></div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 blgDetlDev1">
              <p className="blgDetl8">7 Question to Ask Before You Start
                Working With Your Creative Agency
                </p>
              <p className="blgDetl9" style={{ float: 'left' }}><img href="#" className="blgDetlImg" src={require('../../../Assets/Images/arrow.png')} />Previous</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 blgDetlDev1">
              <p className="blgDetl8">7 Question to Ask Before You Start
                Working With Your Creative Agency
                </p>
              <p className="blgDetl10" style={{ float: 'right' }}><img href="#" className="blgDetlImg" src={require('../../../Assets/Images/arrow.png')} />Next</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default BlogDetails;