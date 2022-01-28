import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import COLORS from '../themes/theme';
import { get_current_user, save_user } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
	let dispatch = useDispatch();
	let { user } = useSelector((state) => state.user);

	useEffect(async () => {
		let user_data = await get_current_user();
		console.log(user_data);
		dispatch(save_user(user_data?.data?.user));
	}, []);

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
			<ScrollView style={{ marginHorizontal: 15, marginTop: 70 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 20,
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
								height: 60,
								width: 60,
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
									fontSize: 19,
									fontFamily: 'Nunito_800ExtraBold',
								}}
							>
								{user?.username}
							</Text>
							<Text
								style={{
									color: COLORS.gray,
									fontSize: 15,
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
			</ScrollView>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({});
