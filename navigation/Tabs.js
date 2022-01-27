import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import COLORS from '../themes/theme';
import Shop from '../pages/Shop';
import Favourites from '../pages/Favourites';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={({ navigation }) => ({
				tabBarShowLabel: false,
				tabBarStyle: {
					position: 'absolute',
					backgroundColor: COLORS.background,
					height: 60,
					borderTopWidth: 0,
					marginHorizontal: 7,
				},
			})}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={({ navigation }) => ({
					headerShown: true,
					headerStyle: {
						elevation: 0,
						backgroundColor: COLORS.background,
					},
					headerTitle: 'Shop',
					headerTitleStyle: {
						fontFamily: 'Nunito_800ExtraBold',
						color: COLORS.white,
					},

					headerTitleAlign: 'center',
					// headerRight: () => (
					// 	<TouchableOpacity
					// 		onPress={() => navigation.navigate('MarketSearch')}
					// 	>
					// 		<AntDesign
					// 			name='home'
					// 			size={25}
					// 			color={COLORS.white}
					// 			style={{
					// 				backgroundColor: COLORS.light_blue,
					// 				padding: 8,
					// 				marginRight: 10,
					// 				borderRadius: 10,
					// 			}}
					// 		/>
					// 	</TouchableOpacity>
					// ),

					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<AntDesign
								name='home'
								size={24}
								color='black'
								style={{ color: focused ? COLORS.white : '#555763' }}
							/>
							{/* <Text
								style={{
									color: focused ? COLORS.white : COLORS.gray,
									fontSize: 12,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Home
							</Text> */}
						</View>
					),
				})}
			/>

			<Tab.Screen
				name='Shop'
				component={Shop}
				options={({ navigation }) => ({
					headerShown: true,
					headerStyle: {
						elevation: 0,
						backgroundColor: COLORS.background,
					},
					headerTitle: 'Shop',
					headerTitleStyle: {
						fontFamily: 'Nunito_800ExtraBold',
						color: COLORS.white,
					},
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate('UserSearch')}>
							<AntDesign
								name='search1'
								size={20}
								color={COLORS.white}
								style={{
									padding: 8,
									marginRight: 10,
									borderRadius: 15,
								}}
							/>
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<AntDesign
								name='shoppingcart'
								size={25}
								color='black'
								style={{ color: focused ? COLORS.white : '#555763' }}
							/>
							{/* <Text
								style={{
									color: focused ? COLORS.white : '#555763',
									fontSize: 12,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Shop
							</Text> */}
						</View>
					),
				})}
			/>

			<Tab.Screen
				name='Bag'
				component={Cart}
				options={({ navigation }) => ({
					headerShown: true,
					headerStyle: {
						elevation: 0,
						backgroundColor: COLORS.background,
					},
					headerTitle: 'My Bag',
					headerTitleStyle: {
						fontFamily: 'Nunito_800ExtraBold',
						color: COLORS.white,
					},
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate('UserSearch')}>
							<AntDesign
								name='search1'
								size={20}
								color={COLORS.white}
								style={{
									padding: 8,
									marginRight: 10,
									borderRadius: 15,
								}}
							/>
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<SimpleLineIcons
								name='handbag'
								size={23}
								color='black'
								style={{ color: focused ? COLORS.white : '#555763' }}
							/>
							{/* <Text
								style={{
									color: focused ? COLORS.white : '#555763',
									fontSize: 12,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Bag
							</Text> */}
						</View>
					),
				})}
			/>
			<Tab.Screen
				name='Favourites'
				component={Favourites}
				options={({ navigation }) => ({
					headerShown: true,
					headerStyle: {
						elevation: 0,
						backgroundColor: COLORS.background,
					},
					headerTitle: 'Favourites',
					headerTitleStyle: {
						fontFamily: 'Nunito_800ExtraBold',
						color: COLORS.white,
					},
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate('UserSearch')}>
							<AntDesign
								name='search1'
								size={20}
								color={COLORS.white}
								style={{
									padding: 8,
									marginRight: 10,
									borderRadius: 15,
								}}
							/>
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<SimpleLineIcons
								name='heart'
								size={23}
								color='black'
								style={{ color: focused ? COLORS.white : '#555763' }}
							/>
							{/* <Text
								style={{
									color: focused ? COLORS.white : '#555763',
									fontSize: 12,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Favourites
							</Text> */}
						</View>
					),
				})}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={({ navigation }) => ({
					headerShown: true,
					headerStyle: {
						elevation: 0,
						backgroundColor: COLORS.background,
					},
					headerTitle: 'Profile',
					headerTitleStyle: {
						fontFamily: 'Nunito_800ExtraBold',
						color: COLORS.white,
					},
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate('UserSearch')}>
							<AntDesign
								name='search1'
								size={20}
								color={COLORS.white}
								style={{
									padding: 8,
									marginRight: 10,
									borderRadius: 15,
								}}
							/>
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<AntDesign
								name='user'
								size={23}
								color='black'
								style={{ color: focused ? COLORS.white : '#555763' }}
							/>
							{/* <Text
								style={{
									color: focused ? COLORS.white : '#555763',
									fontSize: 12,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Profile
							</Text> */}
						</View>
					),
				})}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
