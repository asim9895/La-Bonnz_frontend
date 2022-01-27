import {
	SAVE_USER_ERROR,
	SAVE_USER_LOADING,
	SAVE_USER_SUCCESS,
} from '../types';

initialState = {
	user: null,
	error: null,
	loading: false,
};

const userReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case SAVE_USER_LOADING:
			return {
				...state,
				loading: true,
			};
		case SAVE_USER_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				user: actions.payload.user,
			};
		case SAVE_USER_ERROR:
			return {
				...state,
				error: actions.payload.error,
				loading: false,
				user: null,
			};

		default:
			return state;
	}
};

export default userReducer;
