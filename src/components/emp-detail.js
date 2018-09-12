import React, {Component} from 'react';

export default class EmployeeDetails extends Component{
	constructor(props){
		super(props);
		this.state ={
			selectedId:this.props.match.params.id,
			selectedEmpDetails:[]
		}
	}

	componentDidMount(){
		$.ajax({
			url:'http://reduxblog.herokuapp.com/api/posts/'+this.state.selectedId,
			success:function(result){
				this.setState({
					selectedEmpDetails : result
				})
			}.bind(this),
			error:function(error){
				alert("An error occured");
			}.bind(this)
		});
	}

	render(){
		
		return(
				<div>
					<h2>Selected Employee Details</h2>
					<table className="fixedTable">
					<thead>
						<tr>
							<th>ID</th>
							<th>TITLE</th>
							<th>CATEGORIES</th>
							<th>CONTENT</th>
						</tr>
					</thead>
					<tbody>
					<tr>
						<td>{this.state.selectedEmpDetails.id}</td>
						<td>{this.state.selectedEmpDetails.title}</td>
						<td>{this.state.selectedEmpDetails.categories}</td>
						<td>{this.state.selectedEmpDetails.content}</td>
					</tr>
					</tbody>
					</table>
				</div>
			)
	}
}