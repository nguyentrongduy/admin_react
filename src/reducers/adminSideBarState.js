import {ActionTypes} from '../constants/ActionTypes';

export default function (state = false, action) {
	switch (action.type) {
		case ActionTypes.ADMIN_SIDE_MENU_STATE:
			return !state;
		default:
			return state;
	}
}
