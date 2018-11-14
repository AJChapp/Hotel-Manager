import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import API from '../../../utils/API.js';
import './RoomTD.css';



class RoomLG extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    bookDates = () => {

        API.addBooking(this.props.postObj).then((response) => {
            if(response.status===200){
                // Put Redirect here
                this.toggle()
            }
        }).catch((err)=>{
            console.log(err)
        })
    }


    render() {

        return (
            <tr>
                <th>${this.props.roomInfo.rate}</th>
                <th>{this.props.roomInfo.maxAdult}</th>
                <th>{this.props.roomInfo.squareFt} ft.</th>
                <th>{this.props.roomInfo.nonSmoking ? 'No-Smoking' : 'Smoking'}</th>
                <th>{this.props.user?
                <Button onClick={this.toggle} color="primary">Book It</Button>
                :
                <Link to='/login'><Button color ='danger'>Login to Book</Button></Link>
                }</th>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Confirm Booking</ModalHeader>
                    <ModalBody className="RoomTD-modalbody RoomTD-modalbody-one">
                        <Row>
                            <Col className="roomInfo">
                                <div>Rate: ${this.props.roomInfo.rate} </div>
                                <div>Max Number of Adults {this.props.roomInfo.maxAdult} </div>
                                <div>Square Feet: {this.props.roomInfo.squareFt} ft.</div>
                                <div>{this.props.roomInfo.nonSmoking ? 'No-Smoking' : 'Smoking'}</div>
                            </Col>
                            <Col className="dates">
                                {this.props.datesToBook.map((part, index) => {
                                    return <div key={index}> {part}</div>
                                })}
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.bookDates}>Book It</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </tr>
        );
    }
}

// this.props.onClick

export default RoomLG;