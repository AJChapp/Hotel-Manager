import React, { Component } from 'react';
import Navbarr from './components/Navbar/Navbar.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Login from './components/Login/Login.js';
import RoomSearch from './components/RoomSearch/RoomSearch.js';
import BookIt from './components/BookIt/BookIt.js'
import Profile from './components/Profile/Profile.js';
import Signup from './components/Signup/Signup.js';
class App extends Component {
  state = {
    roomsToBook: [],
    datesToBook: [],
    user: ''
  }

  bookLifter = (rooms, days) => {
    this.setState({
      roomsToBook: rooms,
      datesToBook: days
    })
  }

  loginLifter = (user) => {
    this.setState({ user })
  }

  

  render() {
    return (
      <Router>

        <div id="notRoot">
          <Navbarr user={this.state.user} />
          <div id='allComponents'>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            {
              this.state.user ?
                <Route exact path="/profile" render={(props) => <Profile {...props} loginLifter={this.loginLifter} user={this.state.user} />}/>
                :
                <Route exact path="/login" render={(props) => <Login {...props} datesToBook={this.state.datesToBook} loginLifter={this.loginLifter} />} />
            }
            <Route exact path="/findroom" render={(props) => <RoomSearch {...props} bookLifter={this.bookLifter} />} />
            <Route exact path="/signup" render={(props) => <Signup {...props} />} />
            <Route exact path="/bookIt" render={(props) => <BookIt {...props} user={this.state.user} datesToBook={this.state.datesToBook} roomsToBook={this.state.roomsToBook} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
