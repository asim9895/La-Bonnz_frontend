import React, { useState } from 'react';
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
import { useToast } from 'react-native-toast-notifications';

const ForgotPassword = ({ navigation }) => {
	const toast = useToast();
	const [code_box, setcode_box] = useState(false);
	const [button, setbutton] = useState('Request Code');
	const [email, setemail] = useState('');
	const [code, setcode] = useState('');
	const [password, setpassword] = useState('');

	const buttonAction = () => {
		console.log(email);
		if (email === null || email === undefined || email === '') {
			setbutton('Request Code');
			setcode_box(false);
			toast.show('Email Address is required', {
				type: 'danger',
				placement: 'top',
				duration: 4000,
				offset: 30,
				animationType: 'slide-in',
				style: { marginTop: 30, backgroundColor: 'crimson' },
			});
		} else {
			setbutton('Submit');
			setcode_box(true);
			console.log(email);
			toast.show('Code sent successfully', {
				type: 'success',
				placement: 'top',
				duration: 4000,
				offset: 30,
				animationType: 'slide-in',
				style: { marginTop: 30 },
			});
		}
	};

	const finalAction = () => {
		if (code === null || code === undefined || code === '') {
			toast.show('Code is required', {
				type: 'danger',
				placement: 'top',
				duration: 4000,
				offset: 30,
				animationType: 'slide-in',
				style: { marginTop: 30, backgroundColor: 'crimson' },
			});
		} else if (code !== 'abcd') {
			toast.show('Code is not valid', {
				type: 'danger',
				placement: 'top',
				duration: 4000,
				offset: 30,
				animationType: 'slide-in',
				style: { marginTop: 30, backgroundColor: 'crimson' },
			});
		} else if (password === null || password === undefined || password === '') {
			toast.show('Password is required', {
				type: 'danger',
				placement: 'top',
				duration: 4000,
				offset: 30,
				animationType: 'slide-in',
				style: { marginTop: 30, backgroundColor: 'crimson' },
			});
		} else {
			console.log(email);
			console.log(code);
			console.log(password);
			navigation.navigate('Login');
			toast.show('Password changed successfully', {
				type: 'success',
				placement: 'top',
				duration: 4000,
				offset: 30,
				animationType: 'slide-in',
				style: { marginTop: 30 },
			});
		}
	};
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
						Forgot Password
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
								placeholder='Enter Email'
								style={styles.inputTextField}
								placeholderTextColor={COLORS.white}
								onChangeText={(text) => setemail(text)}
								value={email}
								autoComplete='off'
							/>
						</View>
						<Text
							style={{
								color: COLORS.gray,
								fontFamily: 'Nunito_400Regular',
								fontSize: 12,
								marginTop: 5,
								marginBottom: 5,
								marginLeft: 5,
							}}
						>
							(Enter email address to get the authentication code)
						</Text>
						{code_box === true && (
							<View style={styles.inputContainer}>
								<Entypo
									name='lock'
									size={20}
									color={COLORS.white}
									style={styles.inputIcon}
								/>
								<TextInput
									placeholder='Enter Code'
									style={styles.inputTextField}
									placeholderTextColor={COLORS.white}
									onChangeText={(text) => setcode(text)}
									value={code}
								/>
							</View>
						)}
						{code_box === true && (
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
									onChangeText={(text) => setpassword(text)}
									value={password}
								/>
							</View>
						)}
					</View>
					<TouchableOpacity
						onPress={code_box === false ? buttonAction : finalAction}
					>
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
								{button}
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
							Remembered Your Password?
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Login')}>
							<Text
								style={{
									color: COLORS.primary,
									fontSize: 18,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								{' '}
								Login
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default ForgotPassword;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		marginTop: 20,
		padding: 15,
		alignItems: 'center',
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
