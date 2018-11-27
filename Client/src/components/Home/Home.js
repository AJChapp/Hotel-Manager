import React, { Component } from 'react';
import './Home.css';
import { Col, Row, Container } from 'reactstrap';

class Home extends Component {

    render() {
        return (
            <div className="homePage">
                <Col>
                    <Row>
                        <Container className="imgTextHome" fluid>
                        <p id= "homeTitle">Riverside Resort</p>
                        <p id="homeSubtitle">Our First home is Your Second</p>
                        </Container>
                    </Row>
                </Col>
            </div>
        )
    }

}

export default Home;