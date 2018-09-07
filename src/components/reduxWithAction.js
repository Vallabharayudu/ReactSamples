import React, { Component } from 'react';
import FormAction from './form-action';
import FormOutput from './form-output';

export default class ReduxWithAction extends Component{

render(){
		return(
			<div>
				<FormAction/>
				<FormOutput/>
			</div>
			);
	}
}
