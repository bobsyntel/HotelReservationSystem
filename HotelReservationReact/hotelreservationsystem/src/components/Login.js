import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component{

	constructor(){
		super();
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(event){
		event.preventDefault();

		 const email = document.getElementById('email').value;
		 const password = document.getElementById('pwd').value;
		 console.log("email ",email);
		 console.log("password ", password);

		 const loginRequest = axios({
		 	method : 'POST',
		 	url : 'http://localhost:4000/login',
		 	data:{
		 		email,
		 		password
		 	}
		 });
		 loginRequest.then((loginData)=>{
		 
		 	if(loginData.data.msg === "LoginSuccessful"){
		 		// localStorage.setItem('token', loginData.data.token);
		 			console.log(loginData.data.msg);
		 	   this.props.history.push('/roomsearch');
		 	}
		 })

	}

	render(){

		return(
				<div >
       <br/>
		<form className="form-horizontal"  onSubmit={this.handleLogin}>
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
				      <button type="submit" class="btn btn-default">Login</button>
				    </div>
				  </div>
		</form>
	</div>

			)
	}
}

export default Login;