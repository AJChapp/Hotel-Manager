import React, { Component } from 'react';
import './Profile.css';
import { Col, Row, Button, Container } from 'reactstrap';
import API from '../../utils/API.js';
import { Redirect } from 'react-router';
import BookingCard from './BookingCard/BookingCard.js';

class Profile extends Component {

    state = {
        redirect: false,
        userBookings: []
    }

    componentDidMount() {
        API.userBooking().then((res) => {
            this.setState({
                userBookings: res.data
            })
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    }

    handleLogout = () => {
        API.logOut().then((response) => {
            this.setState({
                redirect: true
            })
            this.props.loginLifter("")
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
                    {
                        this.state.userBookings.length > 0 ?
                            <div>
                                <Row>
                                    <Col>
                                        <h4 className="userPiece_head">Active Bookings:</h4>
                                    </Col>
                                </Row>

                                <Container className="activeBookings" fluid>
                                    {this.state.userBookings.map((part, index) => {
                                        return (
                                            <BookingCard key={index} roomNumber={part.roomNumber} datesToBook={part.datesToBook} index={index} />
                                        )
                                    })}
                                </Container>
                            </div>
                            :
                            ""
                    }
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