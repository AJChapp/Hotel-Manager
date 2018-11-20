import React, { Component } from 'react';
import './About.css';
import { Col, Row } from 'reactstrap';
class About extends Component {

    render() {
        return (
            <div id="AboutUs">
                <Col>
                    <Row>
                        <Col>
                            <h2 className="pageTitle">About Us</h2>
                        </Col>
                    </Row>
                    <Row>
                        <p className="info">
                            My name is Andrew and I am the designer of this website. The purpose of this website is to showcase some of my coding abilities.
                            (not my design (￣ω￣)) This site is desgined to be what a user would see when booking a hotel.
                             The reason I chose to do this was because I wanted my demo site to have real world application.
                             I hope you enjoy it.
                        </p>
                    </Row>
                    <Row className="emoji">
                    <Col>
                        {<span>٩(๑˃̵ᴗ˂̵)و*✰</span>}<br/>
                    </Col>
                    </Row>
                    <br/>
                </Col>
            </div>
        )
    }
}

export default About;