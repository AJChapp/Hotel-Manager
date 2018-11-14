import React, { Component } from 'react';
import RoomTD from './RoomTD/RoomTD.js';//table = td
import { Table } from 'reactstrap';
import './BookIt.css';
class BookIt extends Component {

    state = {
        roomsToBook: this.props.roomsToBook
    }

    sortByRateAscending = () => {
        const unsortedRooms = this.state.roomsToBook
        const sortedRooms = unsortedRooms.sort(function (a, b) { return a.rate - b.rate })
        this.setState({ roomsToBook: sortedRooms })
    }
    sortByRateDescending = () => {
        const unsortedRooms = this.state.roomsToBook
        const sortedRooms = unsortedRooms.sort(function (a, b) { return b.rate - a.rate })
        this.setState({ roomsToBook: sortedRooms })
    }
    sortByAdultsAscending = () => {
        const unsortedRooms = this.state.roomsToBook
        const sortedRooms = unsortedRooms.sort(function (a, b) { return a.maxAdult - b.maxAdult })
        this.setState({ roomsToBook: sortedRooms })
    }
    sortByAdultsDescending = () => {
        const unsortedRooms = this.state.roomsToBook
        const sortedRooms = unsortedRooms.sort(function (a, b) { return b.maxAdult - a.maxAdult })
        this.setState({ roomsToBook: sortedRooms })
    }
    sortBySquareFtAscending = () => {
        const unsortedRooms = this.state.roomsToBook
        const sortedRooms = unsortedRooms.sort(function (a, b) { return a.squareFt - b.squareFt })
        this.setState({ roomsToBook: sortedRooms })
    }
    sortBySquareFtDescending = () => {
        const unsortedRooms = this.state.roomsToBook
        const sortedRooms = unsortedRooms.sort(function (a, b) { return b.squareFt - a.squareFt })
        this.setState({ roomsToBook: sortedRooms })
    }
    sortBySmokingFirst = () => {
        const unsortedRooms = this.state.roomsToBook
        const sortedRooms = unsortedRooms.sort(function (a, b) { return a.squareFt - b.squareFt })
        this.setState({ roomsToBook: sortedRooms })
    }
    sortBySmokingLast = () => {
        const unsortedRooms = this.state.roomsToBook
        const sortedRooms = unsortedRooms.sort(function (a, b) { return b.squareFt - a.squareFt })
        this.setState({ roomsToBook: sortedRooms })
    }
    
    render() {
        return (
                <div className="bookIt">
                    <Table className="bookingTable">
                        <thead>
                            <tr>
                                <th>Rate <span onClick={this.sortByRateAscending} className = "ascendingArrow arrow">▲</span>|<span onClick={this.sortByRateDescending} className = "descendingArrow arrow">▼</span></th>
                                <th>Number Of Adults <span onClick={this.sortByAdultsAscending} className = "ascendingArrow arrow">▲</span>|<span onClick={this.sortByAdultsDescending} className = "descendingArrow arrow">▼</span></th>
                                <th>Square Feet <span onClick={this.sortBySquareFtAscending} className = "ascendingArrow arrow">▲</span>|<span onClick={this.sortBySquareFtDescending} className = "descendingArrow arrow">▼</span></th>
                                <th>Smoking/No-Smoking <span onClick={this.sortBySmokingFirst} className = "ascendingArrow arrow">▲</span>|<span onClick={this.sortBySmokingLast} className = "descendingArrow arrow">▼</span></th>
                                <th>Click to Book</th>
                            </tr>
                        </thead>
                        <tbody className="bookingTable-body">
                        {this.props.roomsToBook.map((part, index) => {
                            return <RoomTD user = {this.props.user} postObj = {{roomNumber:part.roomNumber, datesToBook: this.props.datesToBook}} datesToBook={this.props.datesToBook} key={index} index={index} roomInfo={part} />
                        })}
                        </tbody>
                    </Table>
                </div>
        )
    }
}


export default BookIt