import { SET_USER, REMOVE_USER } from '../types';

const initialState = {
	isAuthenticated: false,
	user: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
	case SET_USER:
		return {
			...state,
			isAuthenticated: action.payload
		};
	case REMOVE_USER:
		return initialState;
	default:
		return state;
	}
}