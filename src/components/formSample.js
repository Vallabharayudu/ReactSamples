import React from 'react';

export default class FormSample extends React.Component {

  constructor(){
	super();
	this.state ={
		firstName:'',
		middleName:'',
		lastName:'',
    selectedState:'',
		filledDetails:[]

	}

	this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
	this.handleMiddlenameChange = this.handleMiddlenameChange.bind(this);
	this.handleLastnameChange = this.handleLastnameChange.bind(this);
	this.getName = this.getName.bind(this);
	this.clearFields = this.clearFields.bind(this);
  this.changeStatevalue = this.changeStatevalue.bind(this);

  }

  handleFirstnameChange(event){
	    this.setState({
	    	firstName: event.target.value
	    });
  };
  handleMiddlenameChange(event){
	    this.setState({
	    	middleName: event.target.value
	    });
  };
  handleLastnameChange(event){
	    this.setState({
	    	lastName: event.target.value
	    });
  };

  changeStatevalue(event){
    this.setState({
      selectedValue: event.target.value
    });
  }

  getName(){
    console.log(this.state.selectedValue);
  	this.setState({
  		
      filledDetails : this.state.filledDetails.concat(
        {
          fullName :this.state.firstName+' ' + this.state.middleName +' '+ this.state.lastName,
          stateName : this.state.selectedValue
        }
      ),
      firstName:'',
      middleName:'',
      lastName:'',
      selectedValue:''
  	})
  }

  clearFields(){
  	this.setState({
  		firstName:'',
		  middleName:'',
		  lastName:'',
      selectedValue:''
  	})
  }


	
  render() {

  	//Assign the form value to other variable 
  	//this.state.newName = this.state.name;
    //console.log(this.state.filledDetails);
    const isLoggedIn = this.state.isLoggedIn;

    const rowItems = this.state.filledDetails.map((item,index) =>
      <tr>
        <td>{index+1}</td>
        <td>{item.fullName}</td>
        <td>{item.stateName}</td>
      </tr>
    );
    return (
    <div>
    	<h2>Get Full Details from Form</h2>
    	<div className="left eachSampleContainer oneByTwoLeftSec">
      		<div><b>First name: </b> <input type='text' placeholder='Please Enter Name' value={this.state.firstName} onChange={this.handleFirstnameChange} /></div>
      		<div><b>Middle name: </b> <input type='text' placeholder='Please Enter Name' value={this.state.middleName} onChange={this.handleMiddlenameChange} /></div>
      		<div><b>Last name: </b> <input type='text' placeholder='Please Enter Name' value={this.state.lastName} onChange={this.handleLastnameChange} /></div>
      		<div><b>State: </b>
              <select value={this.state.selectedValue} onChange={this.changeStatevalue}>
              <option value="Please choose State">Please choose State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="karnataka">karnataka</option>
              </select>
          </div>
          <div>Value: {this.state.selectedValue}</div>
      		<button onClick={this.getName}>Get Full Name</button>&nbsp;
      		<button onClick={this.clearFields}>Cancel</button>
      	</div>

        <div className="left eachSampleContainer oneByTwoRightSec">
            <table className="fixedTable">
              <thead>
                <tr>
                    <td>Sl No:</td>
                    <th>Name</th>
                    <th>State</th>
                </tr>
              </thead>
              <tbody>
              {this.state.filledDetails.length ? rowItems : <tr><td colSpan="3" className="text-center">No data filled</td></tr>}
                  
              </tbody> 
            </table>
        </div>
    </div>
    );
  }
}
