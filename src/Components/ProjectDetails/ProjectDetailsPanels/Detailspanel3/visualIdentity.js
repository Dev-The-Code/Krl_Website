import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Detailspanel3/visualIdentity.css';
class VisualIdentity extends Component {

    render() {
        const { data } = this.props
        console.log(data,'data');
        return (
            <div className="animatedup animatedFadeInUp fadeInUp">
                <div className="row">

                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-12 d-none d-xl-block d-lg-block d-md-block" style={{textAlign:'left'}}>
                        {data.visualidentityLogo && data.visualidentityLogo != '' && <h3 className="visulIdntityHedng">Visual Identity</h3>}
                        {data.visualidentityLogo && data.visualidentityLogo != '' && <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12 devVidentity">
                                <h3 className="V-IdentityLogo">Logo</h3>
                                <p className="IdentityPera">
                                    {data.visualidentityLogoText}
                                </p>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-12" style={{ paddingLeft: '0vw' }}>
                                <img href="#" className="D-logo" src={data.visualidentityLogo[0]} />
                            </div>
                        </div>}
                        {data.colorPaletteAllColor && data.colorPaletteAllColor != '' && <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12 devVidentity2">
                                <h3 className="visulIdntityshortHedng">Color Palette</h3>
                                <p className="IdentityPera2">
                                    {data.colorpaletteText}
                                </p>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-12 devVidentity3">
                                {data.colorPaletteAllColor.map((elem,key)=>{
                                    return (
                                        <div className="devColors" style={{ backgroundColor: elem }}></div>
                                    )
                                })}             
                            </div>
                        </div>}
                        {data.fontFamilyText && data.fontFamilyText != '' && <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12 devVidentity4">
                                <h3 className="visulIdntityshortHedng1">Fonts</h3>
                                <p className="IdentityPera3">
                                    {data.fontText}
                                </p>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-12" style={{ paddingLeft: '0vw' }}>
                                {data.fontFamilyText.map((elem,key)=>{
                                    return (
                                        <h3 className="visulIdntityshortHedng2" style={{fontFamily: data.fontFamily[key]}}>
                                            {elem}
                                        </h3>
                                    )
                                })}
                               
                            </div>
                        </div>}

                    </div>



                    <div className="col-12 d-block d-xl-none d-lg-none d-md-none"  style={{textAlign:'left'}}>
                    {data.visualidentityLogo && data.visualidentityLogo != '' &&  <h3 className="visulIdntityHedng">Visual Identity</h3>}
                        {data.visualidentityLogo && data.visualidentityLogo != '' &&  <div className="row">
                            <div className="col-12 devVidentity">
                                <h3 className="V-IdentityLogo">Logo</h3>
                                <p className="IdentityPeraMob">
                                    {data.visualidentityLogoText}
                                </p>
                            </div> 
                            <div className="col-12" style={{ paddingLeft: '0vw' }}>
                                <img href="#" className="D-logo" src={data.visualidentityLogo[0]} />
                            </div>
                        </div> } 
                        {data.colorPaletteAllColor && data.colorPaletteAllColor != '' && <div className="row">     
                            <div className="col-12 devVidentity2">
                                <h3 className="visulIdntityshortHedng">Color Palette</h3>
                                <p className="IdentityPeraMob2">
                                    {data.colorpaletteText}
                                </p>
                            </div>
                            <div className="col-12 devVidentity3">
                                {data.colorPaletteAllColor.map((elem,key)=>{
                                    return (
                                        <div className="devColors" style={{ backgroundColor: elem }}></div>
                                    )
                                })} 
                            </div>
                        </div>}
                        {data.fontFamilyText && data.fontFamilyText != '' && <div className="row">
                            <div className="col-12 devVidentity4">
                                <h3 className="visulIdntityshortHedng1">Fonts</h3>
                                <p className="IdentityPeraMob2">
                                    {data.fontText}
                                </p>
                            </div>
                            <div className="col-12" style={{ paddingLeft: '0vw' }}>
                                {data.fontFamilyText.map((elem,key)=>{
                                    return (
                                        <h3 className="visulIdntityshortHedng2" style={{fontFamily: data.fontFamily[key]}}>
                                            {elem}
                                        </h3>
                                    )
                                })}
                            </div>
                        </div>}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                </div>

            </div>
        );
    }
}

export default VisualIdentity;