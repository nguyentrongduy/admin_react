import {combineReducers} from 'redux';
import pageLoadingReducer from './pageLoading';
import adminSideBarMenu from './adminSideBarState';

export default combineReducers({
	pageLoading: pageLoadingReducer,
	adminSideBarMenu: adminSideBarMenu
});