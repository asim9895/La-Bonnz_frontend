import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import COLORS from '../themes/theme';

const Favourites = () => {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.background }}>
			<Text>Favourites</Text>
		</View>
	);
};

export default Favourites;

const styles = StyleSheet.create({});
