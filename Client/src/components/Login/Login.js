import React, { Component } from 'react';
import './Login.css';
import { Button, InputGroup, InputGroupAddon, Input, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from '../../utils/API.js';
import { Redirect } from 'react-router'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            password: "",
            email: "",
            loginRedirect: false,
            newUserRedirect: false,
            errorMessage: ''
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    setRedirect = (target) => {
        switch (target) {
            case 'login': {
                this.setState({
                    loginRedirect: true
                })
                break;
            }
            case 'newUser': {
                this.setState({
                    newUserRedirect: true
                })
                break;
            }
            default: {
                console.log('improper value passed ', target)
                console.log('only accepted values are newUser & login')
                break;
            }

        }
    }
    renderRedirect = () => {

        if (this.state.loginRedirect) {
            return <Redirect to='/home' />
        }
        else if (this.state.newUserRedirect) {
            return <Redirect to='/signup' />
        }
    }

    captureInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value.trim()
        })
    }

    submitBtn = (event) => {
        event.preventDefault()
        if (this.state.email.trim() === "" || this.state.password.trim() === "") {
            if (this.state.email === "" && this.state.password.trim() === "") {
                this.setState({
                    errorMessage: 'Please Enter Your Email & Password'
                })
            }
            else if (this.state.email.trim() === "") {
                this.setState({
                    errorMessage: 'Please Enter Your Email'
                })
            }
            else if (this.state.password.trim() === "") {
                this.setState({
                    errorMessage: 'Please Enter Your Password '
                })
            }
        }
        else {

            API.login({
                email: this.state.email,
                password: this.state.password
            }).then((response) => {
                console.log(response)
                if (response.status===200) {
                    this.setRedirect('login')
                    this.props.loginLifter(response.data.user)
                }
            }).catch((response)=>{
                this.toggle();
                console.log('caught')
            })
        }
    }

    render() {
        return (
            <div className="loginPage">
                {this.renderRedirect()}
                <div className='loginForm'>
                    <Col>
                        <br />
                        <Row>
                            <Col>
                                <h2 className="pageTitle">Login</h2>
                            </Col>
                        </Row>
                        <Row>
                            <p className='errorMessage'>{this.state.errorMessage}</p>
                        </Row>
                        <Row>
                            <InputGroup >
                                <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
                                <Input onChange={this.captureInput} name='email' placeholder="yourEmail@email.com" />
                            </InputGroup>
                        </Row>
                        <br />
                        <Row>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Password:</InputGroupAddon>
                                <Input type='password' name='password' onChange={this.captureInput} placeholder="Password" />
                            </InputGroup>
                            <br />
                        </Row>
                        <br />
                        <Button onClick={this.submitBtn}>Submit</Button>
                        <br />
                        <br />
                        <p className='linkTo' onClick={() => this.setRedirect('newUser')}>Click here to sign up</p>
                    </Col>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Login Failed</ModalHeader>
                    <ModalBody>
                        Please  check email and password and try again.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Login;