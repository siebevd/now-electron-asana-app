import { combineReducers } from 'redux';
import todoItems from './todoItems';
import account from './todoItems';

export default combineReducers({
	todoItems,
	account
});
