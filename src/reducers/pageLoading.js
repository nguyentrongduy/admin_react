import {ActionTypes} from '../constants/ActionTypes';

export default function (state = false, action) {
	switch (action.type) {
		case ActionTypes.PAGE_LOADING:
			return !state;
		default:
			return state;
	}
}