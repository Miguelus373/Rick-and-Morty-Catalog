import { combineReducers } from 'redux';
import characterReducer from './characters';

const rootReducer = combineReducers({ characterReducer });

export default rootReducer;
