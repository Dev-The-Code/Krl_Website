import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Comman/Button/button';
import './header.css';

class Header extends Component {

    render() {
        return (
            <div>
                <div className="naVBar_aliGN">
                    <div className="row">
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                        <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                            <img href="#" className="logo" src={require('../../Assets/Images/logo.png')} />
                        </div>
                        <div className="col-12 col-md-7 col-lg-7 col-xl-7"></div>
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1">
                            <img className="menu" src={require('../../Assets/Images/close.png')} />
                        </div>
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                            <div className="row" style={{ paddingTop: '16vw' }}>
                                <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                                    <Button
                                        classMd="nav_bTnTeXt"
                                        label='Home'
                                    />
                                </div>
                                <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                                    <Button
                                        classMd="nav_bTnTeXt"
                                        label='Service'
                                    />
                                </div>
                                <div className="col-12 col-md-2 col-lg-2 col-xl-2 btNCenter">
                                    <Button
                                        classMd="nav_bTnTeXt"
                                        label='Project'
                                    />
                                </div>
                                <div className="col-12 col-md-2 col-lg-2 col-xl-2 btNCenter">
                                    <Button
                                        classMd="nav_bTnTeXt"
                                        label='About'
                                    />
                                </div>
                                <div className="col-12 col-md-2 col-lg-2 col-xl-2 btNCenter">
                                    <Button
                                        classMd="nav_bTnTeXt"
                                        label='Contact'
                                    />
                                </div>
                                <div className="col-12 col-md-2 col-lg-2 col-xl-2 btNCenter">
                                    <Button
                                        classMd="nav_bTnTeXt"
                                        label='Blog'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;