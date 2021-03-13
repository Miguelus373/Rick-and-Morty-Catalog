import { combineReducers } from 'redux';
import characters from './characters';
import details from './details';
import filters from './filters';

const rootReducer = combineReducers({ characters, details, filters });

export default rootReducer;
