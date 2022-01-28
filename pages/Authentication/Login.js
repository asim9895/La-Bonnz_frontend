import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import COLORS from '../../themes/theme';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import { useToast } from 'react-native-toast-notifications';
import { login_user, save_user } from '../../redux/actions/userActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Bubbles } from 'react-native-loader';
import AppLoading from 'expo-app-loading';
import { useDispatch } from 'react-redux';

const Login = ({ navigation }) => {
	const [loading, setloading] = useState(false);
	const toast = useToast();
	const dispatch = useDispatch();

	useEffect(async () => {
		console.log(await AsyncStorage.getItem('token'));
		console.log(await AsyncStorage.getItem('user_id'));
	}, []);

	const submitLoginForm = async (values) => {
		setloading(true);

		const user_data = await login_user(values);
		console.log(user_data?.data?.user);

		if (user_data.status === 200) {
			await AsyncStorage.setItem('token', user_data?.data?.token);
			await AsyncStorage.setItem('user_id', user_data?.data?.user._id);
			toast.show(`Login Successful`, {
				type: 'success',
				placement: 'top',
				duration: 2000,
				offset: 30,
				animationType: 'slide-in',
			});
			setloading(false);
			navigation.navigate('Main');
		} else {
			toast.show(`${user_data?.data?.error[0]?.msg}`, {
				type: 'danger',
				placement: 'top',
				duration: 2000,
				offset: 30,
				animationType: 'slide-in',
			});
			setloading(false);
		}
	};
	return (
		<View style={{ backgroundColor: COLORS.background, flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ marginHorizontal: 20, marginTop: 60 }}>
					{loading && <AppLoading />}
					<Formik
						initialValues={{ username: '', password: '' }}
						onSubmit={(values) => submitLoginForm(values)}
					>
						{({ handleChange, handleBlur, handleSubmit, values }) => (
							<View>
								<Text
									style={{
										color: COLORS.white,
										fontFamily: 'Nunito_800ExtraBold',
										fontSize: 40,
										marginTop: 60,
									}}
								>
									Login
								</Text>
								<View style={{ marginTop: 30 }}>
									<View style={styles.inputContainer}>
										<AntDesign
											name='user'
											size={20}
											color={COLORS.white}
											style={styles.inputIcon}
										/>
										<TextInput
											placeholder='Enter Username'
											style={styles.inputTextField}
											placeholderTextColor={COLORS.white}
											onChangeText={handleChange('username')}
											onBlur={handleBlur('username')}
											value={values.username}
										/>
									</View>
									<View style={styles.inputContainer}>
										<Entypo
											name='lock'
											size={20}
											color={COLORS.white}
											style={styles.inputIcon}
										/>
										<TextInput
											placeholder='Enter Password'
											style={styles.inputTextField}
											secureTextEntry
											placeholderTextColor={COLORS.white}
											onChangeText={handleChange('password')}
											onBlur={handleBlur('password')}
											value={values.password}
										/>
									</View>

									<TouchableOpacity
										onPress={() => navigation.navigate('ForgotPassword')}
									>
										<View style={{ alignItems: 'flex-end' }}>
											<Text
												style={{
													color: COLORS.primary,
													fontFamily: 'Nunito_600SemiBold',
													margin: 10,
												}}
											>
												Forgot Your Password?
											</Text>
										</View>
									</TouchableOpacity>
								</View>
								<TouchableOpacity onPress={handleSubmit} activeOpacity={0.8}>
									<View
										style={{
											backgroundColor: COLORS.primary,
											height: 50,
											alignItems: 'center',
											justifyContent: 'center',
											borderRadius: 30,
											elevation: 10,
											marginTop: 20,
											marginHorizontal: 70,
										}}
									>
										<Text
											style={{
												color: COLORS.white,
												fontFamily: 'Nunito_600SemiBold',
												fontSize: 19,
											}}
										>
											Login
										</Text>
									</View>
								</TouchableOpacity>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'center',
										marginTop: 35,
									}}
								>
									<Text
										style={{
											color: COLORS.white,
											fontFamily: 'Nunito_600SemiBold',
										}}
									>
										Don't Have An Account?
									</Text>
									<TouchableOpacity
										onPress={() => navigation.navigate('Register')}
									>
										<Text
											style={{
												color: COLORS.primary,
												fontSize: 18,
												fontFamily: 'Nunito_600SemiBold',
											}}
										>
											{' '}
											Register
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						)}
					</Formik>
				</View>
			</ScrollView>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		marginTop: 20,
		padding: 15,
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: COLORS.dark,
	},
	inputIcon: {
		marginLeft: 15,
		position: 'absolute',
	},
	inputTextField: {
		color: COLORS.white,
		fontFamily: 'Nunito_400Regular',
		paddingLeft: 30,
		flex: 1,
		fontSize: 16,
	},
});
