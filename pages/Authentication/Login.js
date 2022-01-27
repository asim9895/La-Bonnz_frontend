import React from 'react';
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

const Login = ({ navigation }) => {
	return (
		<View style={{ backgroundColor: COLORS.background, flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ marginHorizontal: 20, marginTop: 60 }}>
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
					<TouchableOpacity onPress={() => navigation.navigate('Main')}>
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
							style={{ color: COLORS.white, fontFamily: 'Nunito_600SemiBold' }}
						>
							Don't Have An Account?
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Register')}>
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
		borderRadius: 1,
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
