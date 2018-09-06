import React from 'react';

export default class Parent extends React.Component{
	constructor(){
		super();
		this.state={
			name:'Vallabha Rayudu',
			designation:'UI developer',
			updatedName:'',
			data:[]
		}
		this.onChangeField = this.onChangeField.bind(this);
		this.submit = this.submit.bind(this);
	}

	onChangeField(event){
		this.setState({
	    	name: event.target.value
	    });
	}

	submit(){
		this.setState({
	    	updatedName: this.state.name,
	    	data:
	    		{
	    			"name":this.state.name,
	    			"designation":this.state.designation
	    		}
	    });
	}

	render(){
		return(
			<div>
				<input type="text" value={this.state.name} onChange={this.onChangeField} ref='nameChange'/>
				<button onClick={this.submit}>Submit</button>
				<Child value={this.state.data}/>
			</div>
			);
	}
}

class Child extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				Parent data in Child Componenet Name:{this.props.value.name}<br/>
				Parent data in Child Componenet Designation:{this.props.value.designation}<br/>
			</div>
			);
	}

}