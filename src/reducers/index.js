import {combineReducers} from 'redux';
import pageLoadingReducer from './pageLoading';

export default combineReducers({
	pageLoading: pageLoadingReducer
});