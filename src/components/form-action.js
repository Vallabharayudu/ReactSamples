import React, {Component} from 'react';
import { fillAction } from '../actions/fillAction';
import { connect } from 'react-redux';

class FormAction extends Component{

	submitToStore(){
		this.props.fillAction(this.refs.formAction.value);
	}

	render(){
		return(
			<div>
				<input type="text" ref="formAction"/>
				<button onClick={this.submitToStore.bind(this)}>Click Me</button>
			</div>
		)
	}
}

export default connect(null,{fillAction})(FormAction);