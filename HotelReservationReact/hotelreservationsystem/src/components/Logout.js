import React, {Component} from 'react';
import BootstrapNavBar from './BootstrapNavBar';

class Logout extends Component{
	constructor(){
		super();

		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(){
		localStorage.removeItem('token');
		console.log("please login")
		// this.history.push('/');
	}

  render(){
  		this.handleLogout;
 //  	const logout =  logout(){
	// 	localStorage.removeItem('token');
	// 	console.log("please login")
	// 	// this.history.push('/');
	// }

	return(
		// <div>
		// 	<button onClick={this.handleLogout}>Logout</button>
		// </div>
			<div>
					<BootstrapNavBar />
			</div>
		);

 }
}

export default Logout;