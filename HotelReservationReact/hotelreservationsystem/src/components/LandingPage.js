import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import BootstrapNavBar from './BootstrapNavBar';


class LandingPage extends Component{

	render(){
  // const img = `https://images.unsplash.com/photo-1518537708190-1e8c9c61ea9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0f8577cd12046e8807dfb235e6085428&auto=format&fit=crop&w=500&q=60`
  // const img1 = `https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=970bdb0ae8a24541733930855900f25f&auto=format&fit=crop&w=500&q=60`
		return(
		
		 <div className="container-fluid">
       <BootstrapNavBar/>
   			<br/>
   			<br/>
   			<br/>
   			<br/>
    		  <h1 className="text-center">Welcome to the LegendHotel</h1>
    	</div>
     
       
			);
	}
}


export default LandingPage;