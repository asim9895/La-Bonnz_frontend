import {
	SAVE_USER_ERROR,
	SAVE_USER_LOADING,
	SAVE_USER_SUCCESS,
} from '../types';
import axios from 'axios';
import { user_endpoints } from '../../config/end_points';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
				user,
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

export const get_current_user = async () => {
	let token = await AsyncStorage.getItem('token');
	console.log('token', token);
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const data = await axios.post(user_endpoints.current_user, {}, config);
		return data;
	} catch (error) {
		console.log(error.response);
		return error.response;
	}
};
