import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { Entypo } from '@expo/vector-icons';
import COLORS from '../themes/theme';

const PromocodeModel = ({ promo_code_model, setpromo_code_model }) => {
	return (
		<Modal
			isVisible={promo_code_model}
			style={{ margin: 0 }}
			animationIn={'slideInUp'}
			animationOut={'slideOutDown'}
		>
			<View
				style={{
					backgroundColor: COLORS.dark,
					borderRadius: 20,
					bottom: 0,
					position: 'absolute',
					width: '100%',
					margin: 0,
					padding: 5,
					height: 500,
				}}
			>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 10,
					}}
				>
					<Entypo
						name='cross'
						size={30}
						style={{
							color: COLORS.primary,
						}}
						onPress={() => setpromo_code_model(false)}
					/>
				</View>
			</View>
		</Modal>
	);
};

export default PromocodeModel;

const styles = StyleSheet.create({});
