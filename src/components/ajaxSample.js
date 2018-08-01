import React from 'react';
import $ from "jquery";
import AjaxSelectedDetails from './ajaxSelectedDetails';

export default class AjaxSample extends React.Component{

	constructor(props){
		super(props);
		this.state={
			listOfContacts:[],
			enablemodal:false,
			selectedDeatils:[],
			name:'Vallabha rayudu'
		}
	}
  

	componentDidMount(){
		$.ajax({
		      url: 'https://jsonplaceholder.typicode.com/users/',
		      dataType: 'json',
		      success: function(data) {
			this.setState({listOfContacts: data});
		      }.bind(this),
		      error: function(error) {
				console.log(error)
		      }.bind(this)
		    });
	}

	itemClick(index){
		//console.log('Clicked Item: '+item);
		console.log('Clicked Item Id: '+index);
		this.setState({
			enablemodal:true,
			selectedDeatils:this.state.listOfContacts[index]
		},()=>{
			console.log('Pushed Item',this.state.selectedDeatils);
		});
		
	}

	render(){

		const listOfItems = this.state.listOfContacts.map((item,index) =>
			<tr key={index} onClick={this.itemClick.bind(this,index)}>
		        <td>{item.id}</td>
		        <td>{item.name}</td>
		        <td>{item.email}</td>
		        <td>{item.address.street+', ' +item.city+', ' +item.zipcode}</td>
		     </tr>

			);

		return (
			<div className="eachSampleContainer">
				<h3 className="text-center"><u>Fill Ajax data in table and on row click events</u></h3>
				<div className="left oneByTwoLeftSec">
					<div className="headerText">Ajax Data In Parent Page</div>
					<div style={{height:300,overflowY:'auto'}}>
					<table className="fixedTable">
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Email</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							{this.state.listOfContacts.length ? listOfItems : <tr><td colSpan="4" className="text-center">No records found</td></tr>}
						</tbody>
					</table>
					</div>
				</div>

				<div className="left oneByTwoLeftSec">
					<div className="headerText">Clicked Item details from Parent</div>
						
						{/**Below is the children and getting data from same page only on click of table row from the ajax data**/}
						<AjaxSelectedDetails  passedValue={this.state.selectedDeatils ? this.state.selectedDeatils:''} />
					
				</div>

				<div className="clear"></div>
			</div>
			);
	}
}
