import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class Reservation extends Component{
	constructor(){
		super();
		// const mid = this.props.match.params.room_number;
  //       console.log("catching rooms",mid);

	}

	// componentDidMount(){
 //        const mid = this.props.match.params.rooms;

 //        // axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`)
 //        // .then((movieData)=>{
 //        //     console.log(movieData);
 //        //     this.setState({
 //        //         movie: movieData.data
 //        //     })
 //        // })

 //    }
 		handeleReserve(event){
 			this.props.history.push('/payment');
 		}

	render(){
		console.log(this.props.room);
		console.log("in Reservation", localStorage.getItem('checkIn'),localStorage.getItem('checkOut'),this.props.room.room_id)
		return (
			<div>
				<div>
					<h1>The LegendHotel</h1>
					<h1> Room Details </h1>
					<h1> Price : ${this.props.room.price}</h1> 
					<h1> Room Type: {this.props.room.room_type}</h1> 

					{localStorage.getItem('checkIn')}
					<Link to="/payment"><button className="btn btn-success" >Make Reservation</button></Link>
				</div>
				<div>
					
				</div>
			</div>

			)
	}

}

export default Reservation;