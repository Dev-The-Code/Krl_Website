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
                            <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <Button
                                    label='Send Request'
                                    textCss='text_sendRqust'
                                    classMd='btn_sendRequest'
                                />
                            </div>
                            <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9"></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default contForm;