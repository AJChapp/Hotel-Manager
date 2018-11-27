import React, { Component } from 'react';
import './BookingSuccess.css';
import { Button, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

class BookingSuccess extends Component {

    state={
        homePage: false,
        accountPage: false,
    }

    
    render() {
        return (
            <div id="successPage">
                <Col id="successSubpage">
                    <Row>
                        <Col>
                            <h2 className="pageTitle">Successfully Booked</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/home" className="nav-link">
                                <Button>Return Home</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}

export default BookingSuccess;