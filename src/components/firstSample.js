import React from 'react';

export default class FirstSample extends React.Component {

  constructor(){
	super();
	this.state ={
		name:'Vallabha Rayudu',
		newName:''
	}

	this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
	    this.setState({
	    	name: event.target.value
	    });
  };
	
  render() {

  	//Assign the form value to other variable 
  	this.state.newName = this.state.name;
  	
    return (
    <div>
    	<h2>Form Change Sample</h2>
    	<div class="eachSampleContainer">
      		<input type='text' placeholder='Please Enter Name' value={this.state.name} onChange={this.handleChange} />
      		<div>Old Name:{this.state.name}</div>
      		<div>new Name:{this.state.newName}</div>
      	</div>
    </div>
    );
  }
}
