import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Link} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';


class RoomSearch extends Component{

     constructor(){
     	super();
      this.state = {
         value:[]
      }
     	this.handleRoomSearch = this.handleRoomSearch.bind(this)
     	this.handleLogout = this.handleLogout.bind(this)
     }
     handleRoomSearch(event){
     	event.preventDefault();
     		// const year = moment().year();

     	const inDate = document.getElementById("in").value;
     	const outDate = document.getElementById("out").value;
     	console.log(inDate,outDate);
      localStorage.setItem('checkIn',inDate);
      localStorage.setItem('checkOut',outDate);

      var checkInDate = moment(inDate, "YYYY-MM-DD");
      var checkOutDate = moment(outDate, "YYYY-MM-DD");
      var totalNights = moment.duration(checkOutDate.diff(checkInDate)).asDays();

      localStorage.setItem('totalNights',totalNights);

     	var dateArr = inDate.split('-');
     	var year = dateArr[0];
     	var month = dateArr[1];
     	var date = dateArr[2];
     	console.log(date, month, year);	

     	const roomsearchRequest = axios({
     		method: "POST",
     		url: "http://localhost:4000/roomsearch",
     		data: {
     			inDate,
     			outDate
     		}
     	});
      roomsearchRequest.then((searchData)=>{
        console.log(searchData.data.data);
        console.log(searchData.msg)
        this.setState({
          value : searchData.data.data
        })
      })

     }
     handleLogout(event){
     	localStorage.removeItem("token");
     	console.log("removed token for this user");
     	this.props.history.push("/");
     }


   render(){
     const roomsAvailable = this.state.value.map((rooms)=>{
      console.log("seeing rooms",rooms)
       return(
          <div>
            <button onClick={()=>{
              this.props.updateRoom(rooms)
              this.props.history.push('/reservation/reserve')
            }} className="btn btn-success text-center">{rooms.room_type}</button>
            <p>{rooms.room_id}</p>
      
           </div>
        );
     });

    //  const posters = this.state.moviePosters.map((poster,index)=>{
    //   const imagePath =  `http://image.tmdb.org/t/p/w300${poster.poster_path}`;
    //        return(
    //             <Poster poster= {poster} image={imagePath}/>
    //            );
          
    // });
     
   	 return(
  <div className="container">
  <br/>
  		<button onClick={this.handleLogout}>Logout</button>
  <form onSubmit={this.handleRoomSearch}>
	  <div className="row">
	    <div className="col-sm-2">
	      <label for="inlineFormInputName">Check In Date</label>
	    </div>
	    <div className="col-sm-3">
	      <input type="date" className="form-control" id="in" placeholder="MM/DD/YYYY"/>
	    </div>
	    <div className="col-sm-2">
	      <label for="inlineFormInputName">Check Out Date</label>
	    </div>
	    <div className="col-sm-3">
	      <input type="date" className="form-control" id="out" placeholder="MM/DD/YYYY"/>
	    </div>
	    <div className="col-sm-2">
	      <button type="submit" className="btn btn-primary">Submit</button>
	    </div>
  		</div>
  </form>
      {roomsAvailable}
      <button className="btn btn-primary">make reservation</button>
  </div>

     )

 }
}

export default RoomSearch;