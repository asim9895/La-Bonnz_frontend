import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import COLORS from '../themes/theme';

const Home = () => {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.background }}>
			<Text>Home</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
