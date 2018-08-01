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
			<div className="eachSampleContainer">
				<h3 className="text-center"><u>Pass data from parent to child</u></h3>
				<div className="left oneByTwoLeftSec">
					<h5>Parent elements</h5>
					<input type="text" value={this.state.name} onChange={this.onChangeField} ref='nameChange'/>
					<button onClick={this.submit}>Submit</button>
					
				</div>

				<div className="left oneByTwoLeftSec">
					<h5>Child will get data after submit click in parent element</h5>
					<Child value={this.state.data}/>
				</div>
				<div className="clear"></div>
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
				<b>Parent data in Child Componenet Name:</b>{this.props.value.name}<br/>
				<b>Parent data in Child Componenet Designation:</b>{this.props.value.designation}<br/>
			</div>
			);
	}

}