import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dimg from '../../../../Assets/Images/coreValue/be-artistic-01.jpg';
import '../DetailPanel6/webSiteVideos.css';
class WebSiteVideo extends Component {

    render() {
        const { data } = this.props
        return (
            <div className="animatedup animatedFadeInUp fadeInUp">
                {data.demoHeading && <div> 
                    <div className="row">
                        <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                        <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                            <h3 className="webHedng">{data.demoHeading}</h3>
                        </div>                     
                        <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    </div> 
                    {data.demoVideo.map((elem,key)=>{
                        return (

                            <div className="row">
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-10">
                                    <video className="videoDemo" controls autoplay>
                                        <source src={elem} type="video/ogg" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                            </div>

                        )
                    })}     
            </div>}
        </div>
                    );
                }
            }
              
export default WebSiteVideo;