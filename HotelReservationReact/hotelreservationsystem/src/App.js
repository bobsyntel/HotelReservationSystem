import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BootstrapNavBar from './components/BootstrapNavBar';
import Signup from './components/Signup';
import Login from  './components/Login';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom';
import RoomSearch from './components/RoomSearch';

class App extends Component {
  render() {
    return (
    <Router>
     <div>
        <Route exact path="/" component={BootstrapNavBar}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/roomsearch" component={RoomSearch}/>
      </div>

    </Router>

    );
  }
}

export default App;
