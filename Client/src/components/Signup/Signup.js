import React, { Component } from 'react';
import './Signup.css'
import { Button, InputGroup, Input, Row, Col, Tooltip } from 'reactstrap';
import API from '../../utils/API.js';
import { Redirect } from 'react-router'


class Signup extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false,
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            checkEmail: "",
            valid: false,
            invalid: false,
            passwordValid: false,
            passwordInvalid: false,
            phoneValid: false,
            phoneInvalid: false,
            errorMessage: "",
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    renderRedirect = () => {
        if (this.state.success) {
            return <Redirect to='/login' />
        }
    }

    captureInput = (event) => {
        if (event.target.name === 'phoneNumber') {
            event.target.value = event.target.value.substring(0, 10)
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        else {

            const inputValue = event.target.value.trim().replace(/[^-_a-zA-Z0-9@.]/g, "")
            this.setState({
                [event.target.name]: inputValue
            })
            event.target.value = inputValue;

        }
    }

    submit = (event) => {
        event.preventDefault();

        const newUser = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
        }
        API.signup(newUser).then((response) => {
            if (response.data.success) {
                this.setState({
                    success: true
                })
            }
        })
    }

    checkEmail = () => {
        const email = { email: this.state.email }
        if (!this.state.email) {
            this.setState({
                valid: false,
                invalid: true,
                errorMessage: "Please Enter an Email"
            })
        }
        else if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
            this.setState({
                valid: false,
                invalid: true,
                errorMessage: "Improper Email Format"
            })
        }
        else {

            API.checkEmail(email).then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({
                        valid: true,
                        invalid: false,
                        errorMessage: ""
                    })

                }
                else if (!response.data.success) {
                    this.setState({
                        valid: false,
                        invalid: true,
                        errorMessage: "Email in use"
                    })
                }
                else {
                    console.log('something went wrong')
                    console.log(response)
                }
            })
        }
    }

    comparePasswords = () => {
        if (this.state.password === this.state.confirmPassword && this.state.password && this.state.confirmPassword) {
            this.setState({
                passwordValid: true,
                passwordInvalid: false,
                errorMessage: ''
            })
        }
        else if (this.state.password !== this.state.confirmPassword && this.state.confirmPassword) {
            this.setState({
                passwordValid: false,
                passwordInvalid: true,
                errorMessage: "Mismatched Passwords"
            })
        }
    }

    checkPhoneNumber = () => {
        if (this.state.phoneNumber.length === 10) {
            this.setState({
                phoneValid: true,
                phoneInvalid: false,
                errorMessage: ""
            })
        }
        else {
            this.setState({
                phoneValid: false,
                phoneInvalid: true,
                errorMessage: "Invalid Phone Number Length"
            })
        }
    }



    render() {
        return (
            <div className="Signup">
                {this.renderRedirect()}
                <br />
                <Col>
                    <Row>
                        <Col>
                            <h2 className="pageTitle">Signup <i id='signupTooltip' className=" fas fa-question-circle"></i></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="errorSignup">
                                {this.state.errorMessage}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="inputTitle">Email</p>
                            <InputGroup >
                                <Input onBlur={this.checkEmail} valid={this.state.valid} invalid={this.state.invalid} className="signupInput" onChange={this.captureInput} name='email' placeholder="Your email here" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="inputTitle">Password</p>
                            <InputGroup >
                                <Input onBlur={this.comparePasswords} valid={this.state.passwordValid} invalid={this.state.passwordInvalid} className="signupInput" onChange={this.captureInput} name='password' type="password" placeholder="Enter your Password" />
                            </InputGroup>
                        </Col>
                        <Col>
                            <p className="inputTitle">Confirm Password</p>
                            <InputGroup >
                                <Input onBlur={this.comparePasswords} valid={this.state.passwordValid} invalid={this.state.passwordInvalid} className="signupInput" onChange={this.captureInput} name='confirmPassword' type="password" placeholder="Re-Enter Password" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="inputTitle">First Name</p>
                            <InputGroup >
                                <Input className="signupInput" onChange={this.captureInput} name='firstName' placeholder="First Name" />
                            </InputGroup>
                        </Col>
                        <Col>
                            <p className="inputTitle">Last Name</p>
                            <InputGroup >
                                <Input className="signupInput" onChange={this.captureInput} name='lastName' placeholder="Last Name" />
                            </InputGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <p className="inputTitle">Phone Number</p>
                            <InputGroup className="inputGroupSignup">
                                <Input onBlur={this.checkPhoneNumber} className="signupInput" valid={this.state.phoneValid} invalid={this.state.phoneInvalid} onChange={this.captureInput} type="number" name='phoneNumber' placeholder="Phone Number" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>{
                            this.state.phoneNumber.length === 10 && this.state.valid && this.state.passwordValid && this.state.email && this.state.phoneNumber && this.state.firstName && this.state.lastName && this.state.password && this.state.confirmPassword ?
                                <Button color="success" onClick={this.submit} >
                                    Signup!
                                </Button>
                                :
                                ""
                        }
                        </Col>
                        <br />
                        <br />
                    </Row>
                </Col>
                <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="signupTooltip" toggle={this.toggle}>
                    Signup Button will only appear when all field are properly filled out.<br /> If all fields are and the signup button has yet to appear simply click off of the form.<br /> If the button still doesnt appear please contact support.
                </Tooltip>
            </div>
        )
    }
}

export default Signup;