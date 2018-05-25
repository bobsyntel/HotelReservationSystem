import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
class RoomSearch extends Component{

       constructor(props){
       	super(props)
       	this.state = {
       		// startDate:moment(),
       		// isOpen : date
       	};
  //      	this.handleChange = this.handleChange.bind(this);
  	}
  //      }
		// handleChange (date) {
		// 				 this.setState({startDate: date})
		// 				 this.toggleCalendar()
		// 				}

		// 				toggleCalendar (e) {
		// 				 e && e.preventDefault()
		// 				 this.setState({isOpen: !this.state.isOpen})
		// 				}

						

	render(){

		 return(

		 	<DatePicker
				   selected={this.state.startDate}
				   onChange={this.handleChange}
				   withPortal
				/>
		// 			<div>
		// 				   <button
		// 				       className="example-custom-input"
		// 				       onClick={this.toggleCalendar}>
		// 				       {this.state.startDate.format("DD-MM-YYYY")}
		// 				   </button>
		// 				   {
		// 				       this.state.isOpen && (
		// 				           <DatePicker
		// 				               selected={this.state.startDate}
		// 				               onChange={this.handleChange}
		// 				               withPortal
		// 				               inline />
		// 				       )
		// 				   }

		// 				</div>
			)
			
		
	}
}

export default RoomSearch;