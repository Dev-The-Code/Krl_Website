import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './designTab.css';

class DesignTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
    }
    componentWillMount() {

    }
    componentDidMount() {
        let data = this.props.data;
        if (data) {
            this.setState({
                data: data,
            })
        }
    }

    render() {
        const { data } = this.state
        console.log('Design Tab', data.design);
        return (
            <div className="animateFadeIn">

                {/*visualidentity*/}
                {data.design && <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-12 d-none d-xl-block d-lg-block d-md-block" style={{ textAlign: 'left' }}>
                        {data.design[0].visualidentityLogo && data.design[0].visualidentityLogo != '' && <h3 className="visulIdntityHedng">Visual Identity</h3>}
                        {data.design[0].visualidentityLogo && data.design[0].visualidentityLogo != '' && <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12 devVidentity">
                                <h3 className="V-IdentityLogo">Logo</h3>
                                <p className="IdentityPera">
                                    {data.design[0].visualidentityLogoText}
                                </p>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-12" style={{ paddingLeft: '0vw' }}>
                                <img href="#" className="D-logo" src={data.design[0].visualidentityLogo[0]} />
                            </div>
                        </div>}
                        {data.design[0].colorPaletteAllColor && data.design[0].colorPaletteAllColor != '' && <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12 devVidentity2">
                                <h3 className="visulIdntityshortHedng">Color Palette</h3>
                                <p className="IdentityPera2">
                                    {data.design[0].colorpaletteText}
                                </p>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-12 devVidentity3">
                                {data.design[0].colorPaletteAllColor.map((elem, key) => {
                                    return (
                                        <div className="devColors" style={{ backgroundColor: elem }}></div>
                                    )
                                })}
                            </div>
                        </div>}
                        {data.design[0].fontFamilyText && data.design[0].fontFamilyText != '' && <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12 devVidentity4">
                                <h3 className="visulIdntityshortHedng1">Fonts</h3>
                                <p className="IdentityPera3">
                                    {data.design[0].fontText}
                                </p>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-12" style={{ paddingLeft: '0vw' }}>
                                {data.design[0].fontFamilyText.map((elem, key) => {
                                    return (
                                        <h3 className="visulIdntityshortHedng2" style={{ fontFamily: data.design[0].fontFamily[key] }}>
                                            {elem}
                                        </h3>
                                    )
                                })}

                            </div>
                        </div>}

                    </div>



                    <div className="col-12 d-block d-xl-none d-lg-none d-md-none" style={{ textAlign: 'left' }}>
                        {data.design[0].visualidentityLogo && data.design[0].visualidentityLogo != '' && <h3 className="visulIdntityHedng">Visual Identity</h3>}
                        {data.design[0].visualidentityLogo && data.design[0].visualidentityLogo != '' && <div className="row">
                            <div className="col-12 devVidentity">
                                <h3 className="V-IdentityLogo">Logo</h3>
                                <p className="IdentityPeraMob">
                                    {data.design[0].visualidentityLogoText}
                                </p>
                            </div>
                            <div className="col-12" style={{ paddingLeft: '0vw' }}>
                                <img href="#" className="D-logo" src={data.design[0].visualidentityLogo[0]} />
                            </div>
                        </div>}
                        {data.design[0].colorPaletteAllColor && data.design[0].colorPaletteAllColor != '' && <div className="row">
                            <div className="col-12 devVidentity2">
                                <h3 className="visulIdntityshortHedng">Color Palette</h3>
                                <p className="IdentityPeraMob2">
                                    {data.design[0].colorpaletteText}
                                </p>
                            </div>
                            <div className="col-12 devVidentity3">
                                {data.design[0].colorPaletteAllColor.map((elem, key) => {
                                    return (
                                        <div className="devColors" style={{ backgroundColor: elem }}></div>
                                    )
                                })}
                            </div>
                        </div>}
                        {data.design[0].fontFamilyText && data.design[0].fontFamilyText != '' && <div className="row">
                            <div className="col-12 devVidentity4">
                                <h3 className="visulIdntityshortHedng1">Fonts</h3>
                                <p className="IdentityPeraMob2">
                                    {data.design[0].fontText}
                                </p>
                            </div>
                            <div className="col-12" style={{ paddingLeft: '0vw' }}>
                                {data.design[0].fontFamilyText.map((elem, key) => {
                                    return (
                                        <h3 className="visulIdntityshortHedng2" style={{ fontFamily: data.design[0].fontFamily[key] }}>
                                            {elem}
                                        </h3>
                                    )
                                })}
                            </div>
                        </div>}
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                </div>}

                {/*Document Demo*/}
                {data.design && data.design[1].documentDemo != '' && <div>
                    <div className="row">
                        <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                        <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                            <h3 className="finalHedng">{data.design[1].documentHeading}</h3>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    </div>
                    <div className="row">
                        <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                        <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                            {data.design[1].documentDemo.map((elem, key) => {
                                return (
                                    <img src={elem} alt="banner" className="devFinal" />
                                )
                            })}
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    </div>
                </div>}

                {/*PdfPanel*/}
                {data.design && data.design[4].pdfPanelHeading != '' && <div>
                    <div className="row">
                        <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                        <div className="col-xl-10 col-lg-10 col-md-10 col-12" style={{ textAlign: 'left' }}>
                            <div className="row" style={{ marginTop: '4vmax' }}>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-12" style={{ paddingLeft: '0vw' }}>
                                    <h3 className="sumShortHedngDesign">{data.design[4].pdfPanelHeading}</h3>
                                    <p className="sumPeraDesign">
                                        {data.design[4].pdfPanelSubText}
                                    </p>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-12"  style={{ paddingLeft: '0vw' }}>
                                    <iframe src={data.design[4].pdfPanelFile} alt="PDF" className="mainDemoDesign" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    </div>
                </div>}

                {/*demo Heading*/}
                {data.design && data.design[2].demoHeading != '' && <div>
                    <div className="row">
                        <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                        <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                            <h3 className="webHedng">{data.design[2].demoHeading}</h3>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                    </div>
                    {data.design[2].demoVideo.map((elem, key) => {
                        return (

                            <div className="row">
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                                    <iframe src={elem} alt="PDF" className="videoDemo" allowfullscreen></iframe>
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                            </div>

                        )
                    })}
                </div>}

                {/*illustration*/}
                {data.design && data.design[3].illustration[0].illustrationText != '' && <div>
                    {data.design[3].illustration.map((elem, key) => {
                        return (
                            <div className="row">
                                <div className="col-xl-1 col-lg-1 col-md-1 col-12"></div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-12" style={{ textAlign: 'left' }}>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-none d-xl-block d-lg-block d-md-block devIlustration" style={{ paddingLeft: '0vw' }}>
                                            <h3 className="IlustrationHedng">{elem.illustrationText}</h3>

                                            <p className="IlustrationPera">
                                                {elem.illustrationSubText}
                                            </p>
                                        </div>
                                        <div className="col-12 d-block d-xl-none d-lg-none d-md-none devIlustration" style={{ paddingLeft: '0vw' }}>
                                            <h3 className="IlustrationHedng">{elem.illustrationText}</h3>

                                            <p className="IlustrationPeraMob">
                                                {elem.illustrationSubText}
                                            </p>
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-md-8 d-none d-sm-block" style={{ marginTop: '8vmax' }}>
                                            <div className="row">
                                                {elem.illustrationImages.map((elem, key) => {
                                                    return (

                                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                                            <img src={elem} className="illustrImg1" />
                                                        </div>

                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="col-12 d-block d-sm-none" style={{ marginTop: '8vmax' }}>
                                            <div className="row">
                                                {elem.illustrationImages.map((elem, key) => {
                                                    return (
                                                        <div className="col-12" style={{ marginRight: "5vw" }}>
                                                            <img src={elem} className="illustrImgMob1" />
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                    </div>
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

export default DesignTab;
