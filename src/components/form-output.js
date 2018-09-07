import React, {Component} from 'react';
import { connect } from 'react-redux';

class FormOutput extends Component{

	render(){
		console.log('Books:', this.props.books)
		return(
			<div>
				See Filled Output: <span>{this.props.forms}</span>
			</div>
		)
	}
}

function formStateToProps(state){
	return{
		forms:state.forms
	}
}

export default connect(formStateToProps)(FormOutput);