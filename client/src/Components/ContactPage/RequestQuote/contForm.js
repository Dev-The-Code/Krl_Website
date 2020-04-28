import React, { Component } from 'react';
// import Input from '../../../Comman/Input/formInput';
import Button from '../../../Comman/Button/button';
import './requestQuote.css';
import 'antd/dist/antd.css';
import { Form, Input } from 'antd';
import { Spin } from 'antd';
import { HttpUtils } from "../../../Services/HttpUtils";

const FormItem = Form.Item;

const { TextArea } = Input;
class ContForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoader: false,
            isAlert: false,
            name: '',
            email: '',
            contactNumber: '',
            projectDescription: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    isLoader: true,
                    isAlert: false
                })

                this.sendRequest(values)
            }
        })
    }

    sendRequest = async (values) => {
        let req = await HttpUtils.post('companiesContact', values)
        let response = await HttpUtils.post('sendEmailToCompany', values);
        console.log(response, 'send email response')
        if (req) {
            if (req.code == 200) {
                this.setState({
                    isLoader: false,
                    isAlert: true,
                    name: '',
                    email: '',
                    contactNumber: '',
                    projectDescription: ''
                })
            }
            else {
                this.setState({
                    isLoader: false,
                    isAlert: false,
                    name: '',
                    email: '',
                    contactNumber: '',
                    projectDescription: ''
                })
            }
        }
        else {
            this.setState({
                isLoader: false,
                isAlert: false,
                name: '',
                email: '',
                contactNumber: '',
                projectDescription: ''
            })
        }
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
        // const {
        //     name,
        //     email,
        //     contactNumber,
        //     projectDescription
        // } = this.state;

        // console.log(name, 'name')
        // console.log(email, 'email')
        // console.log(contactNumber, 'contactNumber')
        // console.log(projectDescription, 'projectDescription')

        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div className="row cont_requet">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <Form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <Form.Item>
                                        {getFieldDecorator('name', {
                                            // initialValue: this.state.name,
                                            rules: [{
                                                required: true,
                                                message: 'Please input your name',
                                                whitespace: true
                                            }],
                                        })(
                                            <Input type="text" className="form-control naam_input" placeholder="Name" value={this.state.name} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <Form.Item>
                                        {getFieldDecorator('companyEmail', {
                                            // initialValue: this.state.email,
                                            rules: [{
                                                type: 'email', message: 'The input is not valid E-mail!',
                                                whitespace: true
                                            }, {
                                                required: true,
                                                message: 'Please input your Company Email!',
                                                whitespace: true
                                            }],
                                        })(
                                            <Input type="text" className="form-control mailCont_input" placeholder="Email" value={this.state.email} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <Form.Item

                                    >
                                        {getFieldDecorator('contactnumber', {
                                            // initialValue: this.state.contactNumber,
                                            rules: [{
                                                required: true, message: 'Please input your Number!',
                                                whitespace: true
                                            },
                                            { validator: this.validateNumber.bind(this) }]
                                        })(
                                            <Input placeholder="Contact No" className="mailCont_input" value={this.state.contactNumber} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <Form.Item>
                                        {getFieldDecorator('projectDescription', {
                                            // initialValue: this.state.projectDescription,
                                            rules: [
                                                {
                                                    required: true, message: 'Please input your project Description!',
                                                    whitespace: true
                                                },
                                                {
                                                    validator: this.checkValue.bind(this)
                                                }],
                                        })(
                                            <TextArea rows={3} maxLength="500" placeholder="Project Description" className="projectt_input" value={this.state.projectDescription} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <Form.Item>
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
                            </Form.Item>
                        </Form>
                        {this.state.isLoader ? <div class="loader">   </div>
                            : null
                        }
                        {this.state.isAlert ?
                            <div class="alert alert-success message" role="alert">
                                <strong>Request Submiting </strong>
                                        Thank you for contact us.
										Your request has been submited and
										one of our support member will call & email you shortly.
									</div>

                            : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

// export default ContForm;

const WrappedContForm = Form.create()(ContForm);
export default WrappedContForm;