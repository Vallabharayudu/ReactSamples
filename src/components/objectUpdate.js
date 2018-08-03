import React from 'react';

export default class ObjectInlineUpdate extends React.Component {
	constructor(props){
		super(props);
		this.state={
			data:{
				name:'Vallabha Rayudu',
				designation:'UI developer',
				Experience:5.11,
				CompName:'DreamOrbit'
			}
		}
		this.updateName = this.updateName.bind(this);
		this.updateDesignation = this.updateDesignation.bind(this);
		this.updateAllFields = this.updateAllFields.bind(this);
	}

	updateName(){
		let updatedNameData = Object.assign({}, this.state.data);    //creating copy of object
			updatedNameData.name = this.refs.name.value; 
		this.setState({
			data:updatedNameData
		},()=>{
			console.log('Updated name data:', this.state.data)
		});
	}

	updateDesignation(){
		let updatedDesData = Object.assign({}, this.state.data);    //creating copy of object
			updatedDesData.designation = this.refs.designation.value; 
		this.setState({
			data:updatedDesData
		},()=>{
			console.log('Updated Designation data:', this.state.data)
		});
	}

	updateAllFields(){
		let updatedData = Object.assign({}, this.state.data);    //creating copy of object
			updatedData.name = this.refs.name.value;
			updatedData.designation = this.refs.designation.value; 
		this.setState({
			data:updatedData
		},()=>{
			console.log('Updated Full data:', this.state.data)
		});
	}

	render(){
		return(
				<div>
					<div>
						Name: <input type='text' placeholder='Name' ref='name' />
						<button onClick={this.updateName}>Update Name</button>
					</div>
					<div>
						Desination: <input type="text" placeholder="designation" ref="designation" />
						<button onClick={this.updateDesignation}>Update Designation</button>
					</div>
					<button onClick={this.updateAllFields}>Update All Fields</button>
				</div>
			);
	}
}