import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from '../pages/Authentication/Register';
import ForgotPassword from '../pages/Authentication/ForgotPassword';
import Main from '../pages/Main';
import Shop from '../pages/Shop';
import Favourites from '../pages/Favourites';
import Login from '../pages/Authentication/Login';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Routes = () => {
	let token;

	useEffect(async () => {
		token = await AsyncStorage.getItem('token');
		console.log('t', token);
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{token !== null ? (
					<>
						<Stack.Screen name='Main' component={Main} />
						<Stack.Screen name='Login' component={Login} />
					</>
				) : (
					<>
						<Stack.Screen name='Login' component={Login} />
						<Stack.Screen name='Main' component={Main} />
					</>
				)}
				<Stack.Screen name='Register' component={Register} />
				<Stack.Screen name='Shop' component={Shop} />
				<Stack.Screen name='Favourites' component={Favourites} />
				<Stack.Screen name='ForgotPassword' component={ForgotPassword} />

				<Stack.Screen name='Profile' component={Profile} />
				<Stack.Screen name='Cart' component={Cart} />
				<Stack.Screen name='Home' component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;

const styles = StyleSheet.create({});
