import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import COLORS from '../themes/theme';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Cart = () => {
	const [toggle_search, settoggle_search] = useState(false);
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.background }}>
			<View
				style={{
					borderWidth: 1,
					borderColor: COLORS.background,
					position: 'absolute',
					top: 0,
					width: '100%',
					height: toggle_search ? 130 : 90,
					zIndex: 1,
					alignItems: 'center',
					flexDirection: 'column',
					backgroundColor: COLORS.background,
					paddingTop: 40,
					paddingBottom: 0,
				}}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={{ width: '60%', alignItems: 'flex-end' }}>
						<Text
							style={{
								color: COLORS.text,
								fontSize: 22,
								fontFamily: 'Nunito_800ExtraBold',
							}}
						>
							My Bag
						</Text>
					</View>
					<View style={{ width: '40%', alignItems: 'flex-end' }}>
						{toggle_search ? (
							<Entypo
								name='cross'
								size={25}
								style={{ color: COLORS.white, marginRight: 15, marginLeft: 5 }}
								onPress={() => settoggle_search(false)}
							/>
						) : (
							<AntDesign
								name='search1'
								size={22}
								style={{ color: COLORS.white, marginRight: 15, marginLeft: 5 }}
								onPress={() => settoggle_search(true)}
							/>
						)}
					</View>
				</View>
				{toggle_search && (
					<View
						style={{
							backgroundColor: COLORS.dark,
							width: '90%',
							padding: 5,
							borderRadius: 10,
							marginTop: 7,
						}}
					>
						<TextInput
							placeholder='Search Products'
							placeholderTextColor={COLORS.white}
							autoFocus={toggle_search ? true : false}
							style={{
								marginLeft: 5,
								fontSize: 15,
								color: COLORS.white,
								marginRight: 5,
								borderColor: COLORS.dark,
								fontFamily: 'Nunito_600SemiBold',
								textTransform: 'capitalize',
							}}
						/>
					</View>
				)}
			</View>
		</View>
	);
};

export default Cart;

const styles = StyleSheet.create({});
