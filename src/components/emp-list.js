import React, { Component } from 'react';
import $ from "jquery";
export default class EmployeeList extends Component{

	constructor(props){
		super(props);
		this.state={
			listOfEmplyess:[]
		}
	}

	componentDidMount(){
		$.ajax({
			url:'http://reduxblog.herokuapp.com/api/posts/',
			success:function(result){
				this.setState({
					listOfEmplyess : result
				})
			}.bind(this),
			error:function(error){
				alert("An error occured");
			}.bind(this)
		});
	}

	routeToEmpdeatils(index){
		this.props.history.push('/emp-detail/'+this.state.listOfEmplyess[index].id)
		//return <Redirect to='/emp-deatil/this.state.listOfEmplyess[index].id' />
	}

	render(){
		const empListItems = this.state.listOfEmplyess.map((item,index)=>
			<tr key={index} onClick={this.routeToEmpdeatils.bind(this,index)}>
		        <td>{item.id}</td>
		        <td>{item.title}</td>
		     </tr>
		);

		return(
			<div>

				<table className="fixedTable">
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
						</tr>
					</thead>
					<tbody>
							{empListItems}
					</tbody>
				</table>

			</div>
			)
	}

}