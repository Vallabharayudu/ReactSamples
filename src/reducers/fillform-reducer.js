//import {FillAction} from '../actions/fillAction';

export function formReducer(state=null,action){
	switch(action.type){
		case 'Fill_Action':
		return action.payload;
	}
	return state;
}