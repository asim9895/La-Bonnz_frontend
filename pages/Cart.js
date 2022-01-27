import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import COLORS from '../themes/theme';
import { cart } from '../data/cart';

const Cart = () => {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.background }}>
			<FlatList
				data={cart}
				renderItem={({ item }) => (
					<View
						style={{
							padding: 3,
							marginTop: 10,
							borderRadius: 15,
							padding: 10,
						}}
					>
						<View style={{ flexDirection: 'column' }}></View>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default Cart;

const styles = StyleSheet.create({});
