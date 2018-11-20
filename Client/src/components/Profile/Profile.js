import React, { Component } from 'react';
import './Profile.css';
import { Col, Row, Button } from 'reactstrap';
import API from '../../utils/API.js';
import { Redirect } from 'react-router'

class Profile extends Component {

    state = {
        redirect: false,
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    }

    handleLogout = () => {
        API.logOut().then((response) => {
            console.log(response)
            this.props.loginLifter("")
            this.setState({
                redirect: true
            })
        })
    }

    render() {
        return (
            <div id="profilePage">
                {this.renderRedirect()}
                <Col>
                    <Row>
                        <Col>
                            <h2 className="pageTitle">My Account</h2>
                        </Col>
                    </Row>
    
                    <Row>
                        <Col className="userInfo">
                            <h5 className = "userPiece_head">First Name: <span className = "userPiece_body">{this.props.user.firstName}</span></h5>
                            <h5 className = "userPiece_head">Last Name: <span className = "userPiece_body">{this.props.user.lastName}</span></h5>
                            <h5 className = "userPiece_head">Email: <span className = "userPiece_body">{this.props.user.email}</span></h5>
                            <h5 className = "userPiece_head">Phone Number: <span className = "userPiece_body">{this.props.user.phoneNumber}</span></h5>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Button color="danger" onClick={this.handleLogout}>Log Out</Button>
                        </Col>
                    </Row>
                </Col>
                <br />
            </div>
        )
    }
}

export default Profile