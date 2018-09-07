import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import {formReducer} from './fillform-reducer';

const rootReducer = combineReducers({
	books: BooksReducer,
	forms:formReducer
});

export default rootReducer;
