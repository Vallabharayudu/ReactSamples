import React from 'react';

export default class Child extends React.Component{
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