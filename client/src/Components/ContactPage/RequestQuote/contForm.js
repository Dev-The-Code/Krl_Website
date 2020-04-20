import React, { Component } from 'react';
// import Input from '../../../Comman/Input/formInput';
import Button from '../../../Comman/Button/button';
import './requestQuote.css';
import 'antd/dist/antd.css';
import { Form, Input } from 'antd';
import { HttpUtils } from "../../../Services/HttpUtils";

const FormItem = Form.Item;

const { TextArea } = Input;
class ContForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoader: false
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    isLoader: true
                })

                this.sendRequest(values)
            }
        })
    }

    sendRequest = async (values) => {
        let req = await HttpUtils.post('companiesContact', values)
        let email = values.companyEmail;
        // let response = await HttpUtils.get('userregister?nickname=' + values.name + '&email=' + values.companyEmail + '&password=' + values.contactnumber + '&notrobot=' + values.projectDescription)
        let response = await HttpUtils.post('sendEmailToCompany', values);
        console.log(response, 'send email response')
        if (req) {
            if (req.code == 200) {
                this.setState({
                    isLoader: false
                })
            }
            else {
                this.setState({
                    isLoader: false
                })
            }
        }
        else {
            this.setState({
                isLoader: false
            })
        }
        console.log(req, 'req')
    }

    validateNumber(rule, value, callback) {
        if (isNaN(value)) {
            callback('Please type Numbers');
        } else {
            callback()
        }

    }

    checkValue(rule, value, callback) {
        this.setState({ desLength: value ? value.length : 0 })
        callback();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div className="row cont_requet">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <Form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <FormItem style={{ padding: '2%' }}>
                                        {getFieldDecorator('name', {
                                            // initialValue: jobTitle,
                                            rules: [{
                                                required: true,
                                                message: 'Please input your name',
                                                whitespace: true
                                            }],
                                        })(
                                            <Input type="text" className="form-control" placeholder="Name" />
                                        )}
                                    </FormItem>
                                    {/* <Input
                                    type='text'
                                    holder='Name'
                                    className='naam_input'
                                    name='firstname'
                                /> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <FormItem>
                                        {getFieldDecorator('companyEmail', {
                                            // initialValue: compEmail,
                                            rules: [{
                                                type: 'email', message: 'The input is not valid E-mail!',
                                                whitespace: true
                                            }, {
                                                required: true,
                                                message: 'Please input your Company Email!',
                                                whitespace: true
                                            }],
                                        })(
                                            <Input type="text" className="form-control" placeholder="Email" />
                                        )}
                                    </FormItem>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <FormItem

                                    >
                                        {getFieldDecorator('contactnumber', {
                                            // initialValue: contactnumber,
                                            rules: [{
                                                required: true, message: 'Please input your Number!',
                                                whitespace: true
                                            },
                                            { validator: this.validateNumber.bind(this) }]
                                        })(
                                            <Input placeholder="Contact No" />
                                        )}
                                    </FormItem>
                                    {/* <Input
                                    type='text'
                                    holder='Contact # (optional)'
                                    className='mailCont_input'
                                    name='firstname'
                                /> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <FormItem>
                                        {getFieldDecorator('projectDescription', {
                                            // initialValue: compDescription,
                                            rules: [
                                                {
                                                    required: true, message: 'Please input your project Description!',
                                                    whitespace: true
                                                },
                                                {
                                                    validator: this.checkValue.bind(this)
                                                }],
                                        })(
                                            <TextArea rows={6} maxLength="500" placeholder="Project Description" />
                                        )}
                                    </FormItem>
                                    {/* <Input
                                    type='text'
                                    holder='Project description (optional)'
                                    className='projectt_input'
                                    name='firstname'
                                /> */}
                                </div>
                            </div>
                            <div className="d-none d-sm-block">
                                <div className="row">
                                    <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                        <Button
                                            label='Send request'
                                            textCss='text_sendRqust'
                                            classMd='btn_sendRequest'
                                        />
                                        <hr className="hR_LIne" />
                                    </div>
                                    <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7"></div>
                                </div>
                            </div>
                            <div className="d-block d-sm-none">
                                <div className="row">
                                    <div className="col-12">
                                        <Button
                                            label='Send request'
                                            textCss='text_sendRqust_MOB'
                                            classMd='btn_sendRequest_MOB'
                                        />
                                        <hr className="hR_LIne" />
                                    </div>
                                    <div className="col-12"></div>
                                </div>
                            </div>
                        </Form>
                        {this.state.isLoader ? <div class="loading1">   </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

// export default contForm;

const WrappedContForm = Form.create()(ContForm);
export default WrappedContForm;
