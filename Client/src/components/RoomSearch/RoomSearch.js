import React, { Component } from 'react';
import API from '../../utils/API.js'
import Calendar from 'react-calendar';
import './RoomSearch.js';
import './RoomSearch.css'
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, } from 'reactstrap';


class RoomSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            date: new Date(),
            rooms: [],
            roomStatus: '',
            value: "1"//maxAdult
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange = (event)=> {
        this.setState({ value: event.target.value });
    }

    // https://gist.github.com/miguelmota/7905510
    getDates = function (startDate, endDate) {
        let dates = [],
            currentDate = startDate,
            addDays = function (days) {
                let date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
            };
        while (currentDate <= endDate) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };
    //   changed vars to const and let
    //   end of borrowed code

    handleBtn = (event) => {
        event.preventDefault();
        let finalDate = ""
        //Grabs days between
        if (this.state.date.length >= 1) {
            let allDatesBooked = this.getDates(this.state.date[0], this.state.date[1])
            finalDate = allDatesBooked.map(element => {
                return format(
                    new Date(element),
                    "MM/DD/YYYY"
                )
            });
        }

        else {
            finalDate = [format(new Date(this.state.date), "MM/DD/YYYY")]
        }

        const reqBody ={
            booked:finalDate,
            maxAdult:this.state.value
        }

        API.findOpening(reqBody).then((response) => {
            this.setState({ rooms: response.data })
            this.props.bookLifter(response.data, finalDate)
            console.log(response.data);
            if (this.state.rooms.length === 0) {
                this.setState({ roomStatus: 'No Rooms Available' })
            }
            else if (this.state.rooms.length === 1) {
                this.setState({ roomStatus: this.state.rooms.length + ' Room Available' })
            }
            else if (this.state.rooms.length >= 1) {
                this.setState({ roomStatus: this.state.rooms.length + ' Rooms Available' })
            }
            this.toggle()
        }).catch(function (error) {
            console.log(error);
        });

    }


    render() {

        return (<div className="RoomSearch">
            <h4>RoomSearch</h4>
            <Label className="input-label-roomSearch" for="select">Number of Adults</Label>
            <Input className="selector" value={this.state.value} onChange={this.handleChange} type="select" name="select" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </Input>
            <br/>
            <Calendar onClickDay={(value) => this.setState({ date: value })} selectRange={true} minDate={new Date()} onChange={date => this.setState({ date })} value={this.state.date} />
            
            <br/>
            <Button onClick={this.handleBtn}>Find Room</Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{this.state.roomStatus}</ModalHeader>
                <ModalFooter>

                    {this.state.rooms.length === 0 ? "" : <Link to='/bookIt'><Button color="primary" onClick={this.toggle}>Book It!</Button></Link>}{' '}
                    <Button color="secondary" onClick={this.toggle}>{this.state.rooms.length === 0 ? 'Close' : 'Not Now'}</Button>
                </ModalFooter>
            </Modal>

        </div>)
    }
}

export default RoomSearch

