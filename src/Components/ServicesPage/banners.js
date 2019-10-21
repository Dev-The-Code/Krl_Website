import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Header/header2';
import './banners.css';

class Banners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devPeraImg: true,


        }
    }

    render() {
        const { projctPera1, seeAerro, proAeroImg, banrs, devChld, banhedng1, banhedng2, devChild1, devChld2, devChld3, devChldPera, peraChld, banPera, banPera1, devChld1, devChldPera1, hedPera, colrHed, hedPera1, hedPera2, banhedng,
            peraChld1, banPera2, banPera3, peraChld2, BanParagraph, peraDev } = this.props

        return (
            <div>

                <div className={banrs}>{/*"row ban" */}
                    <div className={devChld}>{/*"col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 banDev" */}
                        <div className={peraDev}>
                            <p className={peraChld}>{/*"banPera" */}{banPera}</p>
                        </div>

                        <h1 className={hedPera}>{/*"banHedng" */}{banhedng} <br /> <e className={hedPera1}>{/*"banHedng1" */}{banhedng1}</e></h1>
                    </div>
                    <div className={devChild1}>{/*"col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 banDev1" */}
                        <p className="banPera1">{/*"banPera1" */}</p>
                        <h1 className={hedPera2}>{/*"banHedng2" */}{banhedng2}</h1>
                        <div className="row">
                            <div className={devChld1}>{/*"col-xl-8 col-lg-8 col-md-5 col-sm-5 col-5 banChildDev" */}
                            </div>
                            <div className={devChld2}>{/*"col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 banChildDev1" */}
                                <Link rel="noopener noreferrer" to={`/project Details`}  className="changingdec">
                                    {seeAerro ? <p href={this.props.locationUrl} className={projctPera1}>
                                        View Project<img href="#" className={proAeroImg} src={require('../../Assets/Images/arrowPurple.png')} />
                                    </p>
                                        : null}

                                    {BanParagraph ? <div>
                                        <p className={peraChld1}>{banPera2}</p>
                                        <p className={peraChld2}>{banPera3}</p>
                                    </div> : null}

                                </Link>
                            </div>

                            <div className={devChld3}>{/*"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 banChildDev2" */}</div>
                        </div>
                    </div>
                </div>




            </div >
        );
    }
}

export default Banners;

// <div className="row">
//                 <div className={banrs}>{/*"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 banDev" */}

//                     <div className={banrsChldDev}>{/*"row banChildDev" */}
//                         <div className={devChld}>{/*"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 childDev1" */}
//                             <div className="row">
//                                 <div className={devChldPera}>{/*"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 chidDevPera" */}
//                                     <p className={peraChld}>{/* "childPera"*/}
//                                         {banPera}
//                                         <br/><br/>
//                                        {banPera1}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3" ></div>
//                     </div>
//                     <div className="row" style={{position: 'relative'}}>

//                         <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3"></div>
//                         <div className={devChld1}>{/*"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 chilDev2" */}
//                             <p className={devChldPera1}>{/*"childhedng" */}
//                                 {hedPera}<e className={colrHed}>{/*"colrhedng" */}{hedPera1}</e>{hedPera2}
//                             </p>
//                         </div>

//                     </div>
//                 </div>
//             </div>






// {/*visible mobile tablet ipad */}
// <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
// <div className={banrs}>{/*"row banSmall"*/}
//     <div className={devChld}>{/*"col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 banDevSmall" */}
//         <p className={peraChld}>{/*"banPeraSmall" */}{banPera}</p>
//         <h1 className={hedPera}>{/*"banHedngSmall" */}{banhedng} <br/> <e className={hedPera1}>{/*"banHedng1Small" */}{banhedng1}</e></h1>
//     </div>
//     <div className={devChild1}>{/*"col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 banDev1Small" */}
//         <p className={banPera1}>{/*"banPera1Small" */}</p>
//         <h1 className={hedPera2}>{/*"banHedng2Small" */}{banhedng2}</h1>
//         <div className="row">
//             <div className={devChld1}>{/*"col-xl-7 col-lg-7 col-md-5 col-sm-5 col-5 banChildDevSmall" */}</div>
//             <div className={devChld2}>{/*"col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 banChildDev1Small" */}
//                 {seeAerro  ? <p className={projctPera1}>
//                         View Project.<img href="#" className={proAeroImg} src={require('../../Assets/Images/arrowPurple.png')} />
//                     </p>
//                     : null }
//             </div>
//             <div className={devChld3}>{/*"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 banChildDev2Small" */}</div>
//         </div>
//     </div>
// </div>
// </div>