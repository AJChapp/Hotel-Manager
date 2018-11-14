import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home.js';
import About from './pages/About.js';
import Login from './components/Login/Login.js';
import RoomSearch from './components/RoomSearch/RoomSearch.js';
import BookIt from './components/BookIt/BookIt.js'
import UserPage from './components/UserPage/UserPage.js';
import Signup from './components/Signup/Signup.js';
class App extends Component {
  state = {
    loggedIn: false,
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

  componentDidMount() {
    
  }

  render() {
    return (
      <Router>

        <div>
          <Navbar user={this.state.user} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {
            this.state.loggedIn ?
              <Route exact path="/profile" user={this.state.user} component={UserPage} />
              :
              <Route exact path="/login" render={(props) => <Login {...props} datesToBook={this.state.datesToBook} loginLifter={this.loginLifter} />} />
          }
          <Route exact path="/findroom" render={(props) => <RoomSearch {...props} bookLifter={this.bookLifter} />} />
          <Route exact path="/signup" render={(props) => <Signup {...props} />} />
          <Route exact path="/bookIt" render={(props) => <BookIt {...props} user={this.state.user} datesToBook={this.state.datesToBook} roomsToBook={this.state.roomsToBook} />} />
        </div>
      </Router>
    );
  }
}

export default App;
