import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import LandingPage from './LandingPage'
import './index.css';

class BootstrapNavBar extends Component{

	 render(){
	 	return(
	 <div>

	 						<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">LegendHotel</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link className="nav-link" to="/signup">Signup <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/login" className="text-center" className="nav-link">Login</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
				
					<LandingPage />
	</div>

	 		);

	 }
}

export default BootstrapNavBar;