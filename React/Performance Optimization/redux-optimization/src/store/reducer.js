import { combineReducers } from 'redux';
import count from './countReducer';
import user from './userReducer';

export default combineReducers({ count, user });
