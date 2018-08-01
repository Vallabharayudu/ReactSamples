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
      <h3 className="text-center"><u>Form Change Sample</u></h3>
    	<div className="eachSampleContainer">
      		<input type='text' placeholder='Please Enter Name' value={this.state.name} onChange={this.handleChange} />
      		<div><b>Old Name: </b>{this.state.name}</div>


      		<div><b>New Name: </b>{this.state.newName}</div>
      	</div>
    </div>
    );
  }
}
