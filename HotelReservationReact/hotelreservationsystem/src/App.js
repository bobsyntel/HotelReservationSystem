import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BootstrapNavBar from './components/BootstrapNavBar';
import Signup from './components/Signup';
import Login from  './components/Login';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom';
import RoomSearch from './components/RoomSearch';
import Logout from './components/Logout';
import Reservation from './components/Reservation';
import Payment from './components/Payment';
import LandingPage from './components/LandingPage';

class App extends Component {
  constructor(){
    super();
    this.state = {
      room: {}
    }
    this.setRoom = this.setRoom.bind(this);
  }
  setRoom(roomObject){
    this.setState({
      room: roomObject
    })
  }

  render() {
    return (
    <Router>
     <div>
        <Route exact path="/" component={BootstrapNavBar}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/roomsearch" render={(props) => (
          <RoomSearch updateRoom = {this.setRoom} history = {props.history} />
        )}/>

        
        <Route path ="/reservation/:rooms" render={(props)=>(
          <Reservation room = {this.state.room} match={props.match} />
        )} />

        <Route path ="/payment" render={(props)=>(
          <Payment room = {this.state.room} match={props.match} />
        )} />
       
      </div>

    </Router>

    );
  }
}

export default App;
