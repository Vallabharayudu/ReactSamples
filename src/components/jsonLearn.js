import React from 'react';

export default class JsonLearn extends React.Component{
	constructor(props){
		super(props);
		this.state={
			myObj:{"name":"John", "age":31, "city":"New York"},
			myJSON:{},
			storedJson:{}
		}
		console.log('Constructor called');
	}

	componentWillMount(){
		console.log('My Object:',this.state.myObj);
		console.log('Started Convertion')
		this.setState({
			myJSON : JSON.stringify(this.state.myObj)
			
		},()=>{
			console.log('My Json:',this.state.myJSON);
			localStorage.setItem("testJSON", this.state.myJSON);
			console.log('local storage:',localStorage)
			this.setState({
				storedJson:localStorage.getItem("testJSON")
			})
		});
		
	}

	render(){
		console.log('My Stored Json:',this.state.storedJson);
		return(
			<div>Json Learning page</div>
			);
	}
}