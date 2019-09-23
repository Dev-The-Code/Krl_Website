import React, { Component } from 'react';
import './servicesPage.css';
import ProjectContainer from '../../Comman/ProjectContainer/projectContainer';
class ServicesPage extends Component {
    
    constructor(props) {
        super(props);
        this.state={
          ConsulHedng: 'Consultation',
          ConsulPeraas: 'With the power of empathy, transparent communication and honest dealing we work with you to help you find the right path to maximising the outcome your brand create.',
          dvelpmntHedng: 'Development',
          dvelpmntPeraas: 'Did you say photos and videos? Our producers are here with all their experience and expertise!',
          dsgnHedng : 'Design',
          dsgnPeraas: 'Our designers works hard to design delightful experiences that help you achieve business goals.',
          productionHedng: 'Production',

          devPeraImg: false,
        }
      }
      
      
    render() {

      const {ConsulHedng, ConsulPeraas,  dvelpmntHedng, dvelpmntPeraas, dsgnHedng, dsgnPeraas, productionHedng, devPeraImg, DPWperaas}=this.state
        
      return (
        <div>
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>
            <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="row">
                {/* hidden xs sm md  */}
                <div className="col-xl-4 col-lg-4 d-none d-sm-none d-md-none d-lg-block d-xl-block">{/* col-md-12 col-sm-12 col-12 */}
                  <ProjectContainer 
                    projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 consul_BgImg'
                    projctHedng="servis_hedng" 
                    hed={ConsulHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={ConsulPeraas} 
                  />
                </div>
                {/* visible xs sm md  */}
                <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">{/* col-md-12 col-sm-12 col-12 */}
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 consul_BgImgSmMd'
                    projctHedng="servis_hedng" 
                    hed={ConsulHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                    projctPera="servisPera"
                    pera={ConsulPeraas} 
                  />
                </div>
                <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>
                {/* hidden xs sm md  */}
                <div className="col-xl-3 col-lg-3 d-xl-block d-lg-block d-none d-sm-none d-md-none ">{/* col-md-12 col-sm-12 col-12 */}
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 devlop_BgImg'
                    projctHedng="servis_hedng" 
                    hed={dvelpmntHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 prodctn_BgImg'
                    projctHedng="servis_hedng" 
                    hed={productionHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                </div>
                {/* visible xs sm md  */}
                <div className="d-xl-none d-lg-none d-block d-sm-block d-md-block ">{/* col-md-12 col-sm-12 col-12 */}
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 devlop_BgImgSmMd'
                    projctHedng="servis_hedng" 
                    hed={dvelpmntHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeProdctn_BgImg'
                    projctHedng="servis_hedng" 
                    hed={productionHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                    projctPera="servisPera"
                    pera={dvelpmntPeraas} 
                    
                  />
                </div>
                <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>
                {/* hidden xs sm md  */}
                <div className="col-xl-3 col-lg-3 d-none d-sm-none d-md-none d-lg-block d-xl-block">{/* col-md-12 col-sm-12 col-12*/}
                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 desgn_BgImg'
                    projctHedng="servis_hedng" 
                    hed={dsgnHedng} 
                    projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 servisDevChild"
                    projctPera="servisPera"
                    pera={dsgnPeraas} 
                    
                  />

                  <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 blnkColr'
                    projctPera="servisPera"
                    seeAerro= {true}
                    projctPera1="ADBpera1"

                    pera={DPWperaas}
                    proAeroImg="ADBimg"
                  />

                </div>
                 {/* visible xs sm md  */}
                 <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">{/* col-md-12 col-sm-12 col-12*/}
                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 desgn_BgImgSmMd'
                   projctHedng="servis_hedng" 
                   hed={dsgnHedng} 
                   projctChildBox="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 HomeServisDevChild"
                   projctPera="servisPera"
                   pera={dsgnPeraas} 
                   
                 />

                 <ProjectContainer projctBox='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 blnkColr'
                   projctPera="servisPera"
                   seeAerro= {devPeraImg}
                   projctPera1="ADBpera1"
                   pera={DPWperaas}
                   proAeroImg="ADBimg"
                 />

               </div> 
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>
          </div>   
      </div>
    );
  }
}

export default ServicesPage;
