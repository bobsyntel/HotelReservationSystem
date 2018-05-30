import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Payment extends Component{
	constructor(){
		super();
		this.handlePayment = this.handlePayment.bind(this);
	}


	handlePayment(event) {

		event.preventDefault();

		const firstName = document.getElementById('first').value;
		const lastName = document.getElementById('last').value;
		const address = document.getElementById('address').value;
		const city = document.getElementById('city').value;
		const state = document.getElementById('state').value;
		const zipCode = document.getElementById('zip').value;
		const creditCard = document.getElementById('creditCard').value;
		const expire = document.getElementById('expire').value;
		const ccv = document.getElementById('ccv').value;

		const wholeAddress = address + " " + city + " " + state + ", " + zipCode;

		console.log(firstName, lastName, address, city, state, zipCode, creditCard, expire, ccv);

		const user_id = localStorage.getItem('id');
			console.log(localStorage.getItem('checkIn'));
		const checkIn = localStorage.getItem('checkIn');
		const checkOut = localStorage.getItem('checkOut');

		const num_of_nights = localStorage.getItem('totalNights');

		const total_price = this.props.room.price * num_of_nights;
		console.log("$",total_price);
		const room_id = this.props.room.room_id;
		console.log(room_id);
		const paymentRequest = axios({
			method: "POST",
			url: "http://localhost:4000/payment",
			data: {
				firstName,
				user_id,
				lastName,
				wholeAddress,
				creditCard,
				expire,
				ccv,
				checkIn,
				checkOut,
				room_id,
				total_price
			}
		});
		paymentRequest.then((paymentData) => {
			console.log("&&&&&&&&&&&&&&&&&&&",paymentData.data.msgP);
			if(paymentData.data.msgP === "successPaymentAndReservation") {
				console.log("successPayment");
				console.log("email",paymentData.data.data)
			}
			
		})
	}

     
	render(){

		return (
		<div>
				<h1>Process Payment </h1>
		
			<form onSubmit={this.handlePayment}>
 				<div class="form-row">
   					<div class="form-group col-md-5">
     					<label for="inputEmail4">First Name</label>
     					<input type="text" class="form-control" id="first" placeholder="First Name"/>
   					</div>

   					<div class="form-group col-md-5">
     					<label for="inputPassword4">Last Name </label>
     					<input type="text" class="form-control" id="last" placeholder="Last Name"/>
   					</div>
 				</div>
 				<div class="form-row">
 					<div class="form-group col-md-10">
					   <label for="inputAddress">Address</label>
					   <input type="text" class="form-control" id="address" placeholder="1234 Main St"/>
 					</div>
 				</div>
 				<div class="form-row">
			   		<div class="form-group col-md-4">
			     		<label for="inputCity">City</label>
			     		<input type="text" class="form-control" id="city"/>
			   		</div>
   					<div class="form-group col-md-3">
     					<label for="inputState">State</label>
     					<select id="state" class="form-control">
				       		<option selected>Choose...</option>
				       		<option>GA</option>


     					</select>
   					</div>
   					<div class="form-group col-md-3">
				     	<label for="inputZip">Zip</label>
				     	<input type="text" class="form-control" id="zip"/>
   					</div>
 				</div>
   				
					 <div class="form-row">
					   <div class="form-group col-md-5">
					     <label for="inputEmail4">Name on Card </label>
					     <input type="text" class="form-control" id="nameOnCard" placeholder="Name on the card"/>
					   </div>

					   <div class="form-group col-md-5">
					     <label for="inputPassword4">Credit Card number </label>
					     <input type="text" class="form-control" id="creditCard" placeholder="Valid Card Number"/>
					   </div>
					 </div>

 					<div class="form-row">
					   <div class="form-group col-md-2.5">
					     <label for="inputEmail4">Expiration</label>
					     <input type="text" class="form-control" id="expire" placeholder="MM/YY"/>
					   </div>

					   <div class="form-group col-md-0.5">
					   </div>

					   <div class="form-group col-md-2.5">
					     <label for="inputPassword4">CCV</label>
					     <input type="text" class="form-control" id="ccv" placeholder="CCV"/>
					   </div>

 					</div>
 					<button type="submit" class="btn btn-primary">Process Payment</button>
			</form>
		</div>
		);
	}
}

export default Payment;