import React, {Component} from 'react';
import axios from 'axios';
import BootstrapNavBar from './BootstrapNavBar';
class Signup extends Component{
	constructor(){
		super();
		this.state = {
			value:[]
		}

		this.handleSignup = this.handleSignup.bind(this);
	}

	handleSignup(event){
		event.preventDefault();

		 const email = document.getElementById('email').value;
		 const password = document.getElementById('pwd').value;
		 console.log("email ",email);
		 console.log("password ", password);

		 const signupRequest = axios({
		 	method : 'POST',
		 	url : 'http://localhost:4000/signup',
		 	data:{
		 		email,
		 		password
		 	}
		 });
	    signupRequest.then((signupData)=>{
		 	console.log(signupData.data.msg);
		 	if(signupData.data.msg === "SignupSuccessful"){
		 		localStorage.setItem('token', signupData.data.token);
		 	   this.props.history.push('/login');
		 	   
		 	  
		 	}
		 })

	}
	render(){

		return(
    <div >
    		<BootstrapNavBar/>
       <br/>
		<form className="form-horizontal" onSubmit={this.handleSignup} >
				  <div class="form-group">
				    <label for="email" class="col-sm-2 control-label">Email</label>
				    <div class="col-sm-4">
				      <input type="email" class="form-control" id="email" placeholder="Email"/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="password" class="col-sm-2 control-label">Password</label>
				    <div class="col-sm-4">
				      <input type="password" class="form-control" id="pwd" placeholder="Password"/>
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-10">
				      <div class="checkbox">
				        <label>
				          <input type="checkbox"/> Remember me
				        </label>
				      </div>
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-10">
				      <button type="submit" class="btn btn-default">Sign up</button>
				    </div>
				  </div>
		</form>

			
	</div>
			)
	}
}

export default Signup;