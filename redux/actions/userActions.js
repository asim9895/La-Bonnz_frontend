import {
	SAVE_USER_ERROR,
	SAVE_USER_LOADING,
	SAVE_USER_SUCCESS,
} from '../types';
import axios from 'axios';
import { user_endpoints } from '../../config/end_points';

export const login_user = async (fields) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const data = await axios.post(user_endpoints.login, fields, config);
		return data;
	} catch (error) {
		console.log(error.response);
		return error.response;
	}
};

export const save_user = (user) => (dispatch) => {
	try {
		dispatch({
			type: SAVE_USER_LOADING,
		});

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
