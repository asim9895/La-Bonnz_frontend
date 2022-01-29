import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	FlatList,
	ScrollView,
} from 'react-native';
import React from 'react';
import COLORS from '../themes/theme';
import { useSelector } from 'react-redux';
import { SimpleLineIcons } from '@expo/vector-icons';
import { profile_tabs } from '../data/profile_tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

const Profile = ({ navigation }) => {
	let { user } = useSelector((state) => state.user);
	let token;

	const onLogout = async () => {
		await AsyncStorage.setItem('token', null);
		await AsyncStorage.setItem('user_id', null);
		if (!token) {
			navigation.navigate('Login');
		}
	};

	const headerComponent = () => (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: 30,
				marginBottom: 10,
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						height: windowWidth / 7,
						width: windowWidth / 7,
						borderRadius: 30,
						backgroundColor: COLORS.gray,
						marginRight: 10,
					}}
				></View>

				<View
					style={{
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
					}}
				>
					<Text
						style={{
							color: COLORS.text,
							fontSize: windowWidth / 19,
							fontFamily: 'Nunito_800ExtraBold',
						}}
					>
						{user?.username}
					</Text>
					<Text
						style={{
							color: COLORS.gray,
							fontSize: windowWidth / 24,
							fontFamily: 'Nunito_600SemiBold',
						}}
					>
						{user?.email}
					</Text>
				</View>
			</View>
			<View
				style={{
					width: 45,
					height: 30,
					backgroundColor: COLORS.primary,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 10,
				}}
			>
				<Text
					style={{
						textAlign: 'center',
						color: COLORS.white,
						fontFamily: 'Nunito_800ExtraBold',
					}}
				>
					Edit
				</Text>
			</View>
		</View>
	);

	const footerComponent = () => (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				marginTop: 20,
				marginHorizontal: 30,
			}}
		>
			<TouchableOpacity onPress={onLogout}>
				<View
					style={{
						backgroundColor: COLORS.primary,
						borderRadius: 20,
						alignItems: 'center',
						justifyContent: 'center',
						padding: 10,
						height: 45,
					}}
				>
					<Text
						style={{
							color: COLORS.text,
							fontSize: 19,
							fontFamily: 'Nunito_600SemiBold',
						}}
					>
						Logout
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.background }}>
			<View
				style={{
					borderWidth: 1,
					borderColor: COLORS.background,
					position: 'absolute',
					top: 0,
					width: '100%',
					height: 80,
					zIndex: 1,
					alignItems: 'center',
					backgroundColor: COLORS.background,
					paddingTop: 40,
					paddingBottom: 0,
				}}
			>
				<Text
					style={{
						color: COLORS.text,
						fontSize: 22,
						fontFamily: 'Nunito_800ExtraBold',
					}}
				>
					Profile
				</Text>
			</View>
			<View
				style={{ marginHorizontal: 15, marginTop: 70 }}
				showsVerticalScrollIndicator={false}
			>
				<View style={{ marginBottom: 70 }}>
					<FlatList
						data={profile_tabs}
						keyExtractor={(item) => item.id}
						ListHeaderComponent={headerComponent}
						ListFooterComponent={footerComponent}
						renderItem={({ item }) => (
							<View>
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => navigation.navigate(item.navigation)}
								>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'center',
											marginTop: 20,
											marginHorizontal: 5,
										}}
									>
										<View
											style={{
												flexDirection: 'column',
												alignItems: 'flex-start',
											}}
										>
											<Text
												style={{
													color: COLORS.text,
													fontSize: 18,
													fontFamily: 'Nunito_600SemiBold',
													marginBottom: 3,
												}}
											>
												{item.title}
											</Text>
											<Text
												style={{
													color: COLORS.gray,
													fontSize: 14,
													fontFamily: 'Nunito_600SemiBold',
												}}
											>
												{item.description}
											</Text>
										</View>
										<SimpleLineIcons
											name='arrow-right'
											size={18}
											style={{ color: COLORS.gray }}
											onPress={() => settoggle_search(true)}
										/>
									</View>
								</TouchableOpacity>
								<View
									style={{
										borderWidth: 1,
										borderColor: COLORS.dark,
										marginTop: 15,
									}}
								></View>
							</View>
						)}
					/>
				</View>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({});
