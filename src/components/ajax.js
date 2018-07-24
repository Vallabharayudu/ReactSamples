import React from 'react';
import $ from "jquery";
import axios from 'axios';

export default class Ajax extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}
	componentDidMount(){
		$.ajax({
		      url: 'https://jsonplaceholder.typicode.com/users/',
		      dataType: 'json',
		      success: function(data) {
		      	console.log(data)
			this.setState({data: data});
		      }.bind(this),
		      error: function(error) {
				console.log(error)
		      }.bind(this)
		    });

		axios.get('https://jsonplaceholder.typicode.com/users/')
		.then((data)=>{
			console.log("axios data",data.data)
			this.setState({
				data:data.data
			})
		})
		.catch((error)=>{
			console.log(error)
		})
	}

	render(){
		console.log('test data',this.state.data)
		return(
			<div>Ajax get method</div>
			);
	}
}