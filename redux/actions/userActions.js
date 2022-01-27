import {
	SAVE_USER_ERROR,
	SAVE_USER_LOADING,
	SAVE_USER_SUCCESS,
} from '../types';

export const save_user = (user) => (dispatch) => {
	try {
		dispatch({
			type: SAVE_USER_LOADING,
		});

		let data = user;

		dispatch({
			type: SAVE_USER_SUCCESS,
			payload: {
				user: data,
			},
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: SAVE_USER_ERROR,
			payload: {
				error: error,
			},
		});
	}
};
