import React, { Component } from 'react';
import Bloog from '../../../Comman/BlogPost/blogPost';
import './blog.css';

class blog1 extends Component {
 
    render() {
      return (
          <div>
              <div className="row">
                  <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                  <div className="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                      <div className="row">
                          <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                <Bloog 
                                    imgEe='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 img_red'
                                    headClass='blog_head'
                                    textH1='7 questions to Ask Before Start Working With'
                                    textH2='Your Creative Agency'
                                    paraClass='blog_para'
                                    textPara1='If you are about to start your first project with a creative agency,'
                                    textPara2='here what to ask to make sure things go as smoothly'
                                />
                          </div>
                          <div className="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                          <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                <Bloog 
                                    imgEe='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 img_pink'
                                    headClass='blog_head'
                                    textH1='7 questions to Ask Before Start Working With'
                                    textH2='Your Creative Agency'
                                    paraClass='blog_para'
                                    textPara1='If you are about to start your first project with a creative agency,'
                                    textPara2='here what to ask to make sure things go as smoothly'
                                />
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
              </div> <br/>
              <div className="row">
                  <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                  <div className="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                      <div className="row">
                          <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                <Bloog 
                                    imgEe='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 img_blue'
                                    headClass='blog_head'
                                    textH1='7 questions to Ask Before Start Working With'
                                    textH2='Your Creative Agency'
                                    paraClass='blog_para'
                                    textPara1='If you are about to start your first project with a creative agency,'
                                    textPara2='here what to ask to make sure things go as smoothly'
                                />  
                          </div>
                          <div className="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                          <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                <Bloog 
                                    imgEe='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 img_orange'
                                    headClass='blog_head'
                                    textH1='7 questions to Ask Before Start Working With'
                                    textH2='Your Creative Agency'
                                    paraClass='blog_para'
                                    textPara1='If you are about to start your first project with a creative agency,'
                                    textPara2='here what to ask to make sure things go as smoothly'
                                />
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
              </div> 
          </div>
        
    );
  }
}

export default blog1;