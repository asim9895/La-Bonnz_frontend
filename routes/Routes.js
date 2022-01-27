import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
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

const Stack = createStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Register' component={Register} />
				<Stack.Screen name='Shop' component={Shop} />
				<Stack.Screen name='Favourites' component={Favourites} />
				<Stack.Screen name='ForgotPassword' component={ForgotPassword} />
				<Stack.Screen name='Main' component={Main} />
				<Stack.Screen name='Profile' component={Profile} />
				<Stack.Screen name='Cart' component={Cart} />
				<Stack.Screen name='Home' component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;

const styles = StyleSheet.create({});
