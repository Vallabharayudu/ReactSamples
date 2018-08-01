import React from 'react';

export default class Parent extends React.Component{
	constructor(){
		super();
		this.state={
			parentData:''
		}
		this.updataParentData = this.updataParentData.bind(this);
	}

	updataParentData(data){
		this.setState({
	    	parentData:data
	    });
	}

	render(){
		return(
			<div className="eachSampleContainer">
				<h3 className="text-center"><u>Pass data from Child to Parent</u></h3>
				<div className="left oneByTwoLeftSec">
					<h5>Parent will get data after submit click in child element</h5>
					<b>Parent data from child Componenet:</b>{this.state.parentData}
				</div>

				<div className="left oneByTwoLeftSec">
					<h5>Child elements</h5>
					<Child sendData={this.updataParentData}/>
				</div>
				<div className="clear"></div>
			</div>
			);
	}
}

class Child extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'Vallabha Rayudu'
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
	    this.props.sendData(this.state.name);
	}

	render(){
		return(
			<div>
				<input type="text" value={this.state.name} onChange={this.onChangeField} ref='nameChange'/>
				<button onClick={this.submit}>Submit</button>
			</div>
			);
	}

}