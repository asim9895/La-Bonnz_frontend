import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Tabs from '../navigation/Tabs';
import { get_current_user, save_user } from '../redux/actions/userActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

const Main = () => {
	let dispatch = useDispatch();
	useEffect(async () => {
		let user_data = await get_current_user();
		console.log(user_data);
		dispatch(save_user(user_data?.data?.user));
		token = await AsyncStorage.getItem('token');
	}, []);
	return <Tabs />;
};

export default Main;

const styles = StyleSheet.create({});
