import React, { Component } from 'react';
import Input from '../../../Comman/Input/formInput';
import Button from '../../../Comman/Button/button';
import './requestQuote.css';

class contForm extends Component {

    render() {
        return (
            <div>
                <div className="row cont_requet">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Input
                                    type='text'
                                    holder='Name'
                                    className='naam_input'
                                    name='firstname'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Input
                                    type='text'
                                    holder='Email'
                                    className='mailCont_input'
                                    name='firstname'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Input
                                    type='text'
                                    holder='Contact # (optional)'
                                    className='mailCont_input'
                                    name='firstname'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Input
                                    type='text'
                                    holder='Project description (optional)'
                                    className='projectt_input'
                                    name='firstname'
                                />
                            </div>
                        </div>
                        <br /><br />
                        <div className="row">
                            <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                <Button
                                    label='Send request'
                                    textCss='text_sendRqust'
                                    classMd='btn_sendRequest'
                                />
                            </div>
                            <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7"></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default contForm;