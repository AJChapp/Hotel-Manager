import React, { Component } from 'react';
import { Col, Row, Button, CardBody, CardText, CardTitle, Card, CardHeader } from 'reactstrap';
import './BookingCard.css'

class BookingCard extends Component {



    render() {
        return (
                <Card className="activeBookingCard">
                    <CardHeader className="roomNumber-card">
                            {this.props.datesToBook[0]} -
                        {this.props.datesToBook[this.props.datesToBook.length - 1]}
                    </CardHeader>
                    <CardBody className="cardBody-card">
                        <CardTitle className="datesTitle-card">
                        Room Info
                        </CardTitle>
                        <CardText className="dates-card">
                        Room Number: {this.props.roomNumber}
                        </CardText>
                    </CardBody>
                </Card>
        )
    }
}

export default BookingCard;