import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../DetailPanel6/webSiteVideos.css';
class WebSiteVideo extends Component {

  render() {

    return (
        <div>
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

                <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                    <h3 className="webHedng">Website</h3>
                
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12" style={{backgroundColor: 'blue', height: '42vmax', borderRadius: '1vmax',marginTop: '3vmax'}}></div>
                </div>
                

                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>

            </div>

        </div>
        );
    }
}
  
export default WebSiteVideo;