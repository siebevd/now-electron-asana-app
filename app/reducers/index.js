import { combineReducers } from 'redux';
import todoItems from './todoItems';
import account from './account';

export default combineReducers({
	todoItems,
	account
});
