import { combineReducers } from 'redux';
import characters from './characters';
import details from './details';

const rootReducer = combineReducers({ characters, details });

export default rootReducer;
