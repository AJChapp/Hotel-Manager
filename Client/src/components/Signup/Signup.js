import React, { Component } from 'react';
import './Signup.css'
import { Button, InputGroup, InputGroupAddon, Input, Row, Col } from 'reactstrap';

class Signup extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
    }

    captureInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value.trim()
        })
    }

    render() {
        return (
            <div className="Signup">
                <br />
                <Col>
                    <Row>
                        <Col>
                            <p className="inputTitle">Email</p>
                            <InputGroup >
                                <Input onChange={this.captureInput} name='email' placeholder="Your email here" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="inputTitle">Password</p>
                            <InputGroup >
                                <Input onChange={this.captureInput} name='password' type="password" placeholder="Enter your Password" />
                            </InputGroup>
                        </Col>
                        <Col>
                            <p className="inputTitle">Password</p>
                            <InputGroup >
                                <Input onChange={this.captureInput} name='confirmPassword' type="password" placeholder="Re-Enter Password" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="inputTitle">First Name</p>
                            <InputGroup >
                                <Input onChange={this.captureInput} name='firstName' placeholder="First Name" />
                            </InputGroup>
                        </Col>
                        <Col>
                            <p className="inputTitle">Last Name</p>
                            <InputGroup >
                                <Input onChange={this.captureInput} name='lastName' placeholder="Last Name" />
                            </InputGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <p className="inputTitle">Phone Number</p>
                        <InputGroup >
                            <Input onChange={this.captureInput} type="number" name='phoneNumber' placeholder="Phone Number" />
                        </InputGroup>
                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}

export default Signup;