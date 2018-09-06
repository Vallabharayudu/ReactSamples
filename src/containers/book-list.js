import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
	constructor(props){
		super(props);
	}

	renderList(){
		return this.props.books.map((book) =>{
				return(
					<li key={book.title} className="list-group-item">{book.title}</li>
				);
			});
	}

	render(){

		return(
			<div>
			<h3 className="text-center"><u>Book List</u></h3>
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	//what ever returned will show up as props
	return{
		books:state.books
	};
}

export default connect(mapStateToProps)(BookList);