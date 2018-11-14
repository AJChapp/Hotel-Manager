import React, { Component } from 'react';
import './Login.css';
import { Button, InputGroup, InputGroupAddon, Input, Row, Col } from 'reactstrap';
import API from '../../utils/API.js';
import { Redirect } from 'react-router'

class Login extends Component {

    state = {
        password: "",
        email: "",
        loginRedirect: false,
        newUserRedirect: false,
        errorMessage: ''
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
            return <Redirect to='/' />
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
                if (response.data.success) {
                    this.props.loginLifter(response.data.user)
                    this.setRedirect('login')
                }
            })
        }
    }

    render() {
        return (
            <div className="loginPage">
                {this.renderRedirect()}
                <div className='loginForm'>
                    <Col>
                        <Row>
                            <h2>Login</h2>
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
            </div>
        )
    }
}

export default Login;