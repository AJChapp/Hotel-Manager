import React, { Component } from 'react';
import { Col, Row, Button, CardBody, CardText, CardTitle, Card, CardHeader } from 'reactstrap';
import './BookingCard.css'

class BookingCard extends Component {



    render() {
        return (
                <Card className="activeBookingCard">
                    <CardHeader>
                        Room Number: {this.props.roomNumber}
                    </CardHeader>
                    <CardBody>
                        <CardTitle>
                            Dates Booked:
                        </CardTitle>
                        <CardText>
                            {this.props.datesToBook[0]} -
                        {this.props.datesToBook[this.props.datesToBook.length - 1]}
                        </CardText>
                    </CardBody>
                </Card>
        )
    }
}

export default BookingCard;