import React from 'react';

export default class AjaxSelectedDetails extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		
		return(
			<table className="fixedTable">
				<tbody>
					<tr>
						<th>Name</th>
						<td>{this.props.passedValue.name}</td>
					</tr>
					<tr>
						<th>User Name</th>
						<td>{this.props.passedValue.username}</td>
					</tr>
					<tr>
						<th>Phone</th>
						<td>{this.props.passedValue.phone}</td>
					</tr>
					<tr>
						<th>Website</th>
						<td>{this.props.passedValue.website}</td>
					</tr>
					<tr>
						<th>Company Name</th>
						<td>{this.props.passedValue.name}</td>
					</tr>
				</tbody>
			</table>
			);
	}
}