import {
	StyleSheet,
	View,
	Image,
	Text,
	FlatList,
	Button,
	TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import COLORS from '../themes/theme';
import { cart } from '../data/cart';
import { AntDesign, Entypo, SimpleLineIcons } from '@expo/vector-icons';
import CheckoutModel from '../components/CheckoutModel';
import PromocodeModel from '../components/PromocodeModel';

const Cart = () => {
	const [cart_price, setcart_price] = useState(1);
	const [isModalVisible, setModalVisible] = useState(false);
	const [promo_code_model, setpromo_code_model] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const togglePromoCodeModal = () => {
		setpromo_code_model(!promo_code_model);
	};
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.background }}>
			{isModalVisible && (
				<CheckoutModel
					isModalVisible={isModalVisible}
					setModalVisible={setModalVisible}
				/>
			)}
			{promo_code_model && (
				<PromocodeModel
					promo_code_model={promo_code_model}
					setpromo_code_model={setpromo_code_model}
				/>
			)}
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
					My Bag
				</Text>
			</View>

			<View style={{ marginTop: 90, marginBottom: 60 }}>
				<View
					style={{
						borderWidth: 1,
						borderColor: COLORS.background,
						position: 'absolute',
						bottom: 0,
						width: '100%',
						height: 100,
						zIndex: 1,
						backgroundColor: COLORS.background,
						justifyContent: 'center',
					}}
				>
					<TouchableOpacity onPress={togglePromoCodeModal}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginBottom: 13,
								borderColor: COLORS.dark,
								marginHorizontal: 15,
								paddingHorizontal: 10,
								paddingVertical: 5,
								marginTop: 7,
								borderWidth: 1,
								borderRadius: 10,
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: COLORS.text,
									fontSize: 15,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Apply Promo Code
							</Text>
							<SimpleLineIcons
								name='arrow-right'
								size={15}
								style={{ color: COLORS.gray }}
								onPress={() => settoggle_search(true)}
							/>
						</View>
					</TouchableOpacity>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginHorizontal: 15,
						}}
					>
						<View
							style={{
								flexDirection: 'column',
								alignItems: 'center',
								width: '40%',
								marginLeft: -10,
								justifyContent: 'space-evenly',
							}}
						>
							<Text
								style={{
									color: COLORS.text,
									fontSize: 16,
									fontFamily: 'Nunito_800ExtraBold',
								}}
							>
								124$
							</Text>
							<TouchableOpacity onPress={toggleModal}>
								<Text
									style={{
										color: COLORS.gray,
										fontSize: 14,
										fontFamily: 'Nunito_600SemiBold',
									}}
								>
									View details
								</Text>
							</TouchableOpacity>
						</View>

						<View
							style={{
								backgroundColor: COLORS.primary,
								padding: 10,
								borderRadius: 10,
								width: '60%',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: COLORS.white,
									fontSize: 16,
									fontFamily: 'Nunito_800ExtraBold',
								}}
							>
								Proceed
							</Text>
						</View>
					</View>
				</View>
				<View style={{ marginBottom: 100 }}>
					<FlatList
						data={cart}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',

									backgroundColor: COLORS.dark,
									marginHorizontal: 15,
									borderRadius: 15,
									marginBottom: 10,
									marginTop: 10,
								}}
							>
								<View style={{ flexDirection: 'row' }}>
									<Image
										source={{
											uri: item.image,
										}}
										style={{
											width: 90,
											height: 100,
											borderTopLeftRadius: 15,
											borderBottomLeftRadius: 15,
										}}
									/>
									<View
										style={{
											flexDirection: 'column',
											justifyContent: 'flex-start',
											alignItems: 'flex-start',
											marginTop: 5,
											marginLeft: 10,
										}}
									>
										<Text
											style={{
												color: COLORS.text,
												fontSize: 16,
												fontFamily: 'Nunito_800ExtraBold',
												width: 150,
												marginTop: 2,
												marginBottom: 3,
											}}
											numberOfLines={1}
										>
											{item.product_name}
										</Text>
										<View
											style={{ flexDirection: 'row', alignItems: 'center' }}
										>
											<Text
												style={{
													color: COLORS.gray,
													fontSize: 13,
													fontFamily: 'Nunito_400Regular',
												}}
												numberOfLines={1}
											>
												Color: {item.color}
											</Text>
											<Text
												style={{
													color: COLORS.gray,
													fontSize: 13,
													fontFamily: 'Nunito_400Regular',
													marginLeft: 8,
												}}
												numberOfLines={1}
											>
												Size: {item.size}
											</Text>
										</View>
										<View
											style={{
												flexDirection: 'row',
												alignItems: 'center',
												marginTop: 10,
											}}
										>
											<View
												style={{
													backgroundColor: COLORS.background,
													padding: 4,
													borderRadius: 20,
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												<AntDesign
													name='minus'
													size={19}
													style={{
														color: COLORS.gray,
														textAlign: 'center',
													}}
													onPress={() =>
														setcart_price(cart_price <= 1 ? 1 : cart_price - 1)
													}
												/>
											</View>
											<Text
												style={{
													color: COLORS.text,
													fontSize: 13,
													fontFamily: 'Nunito_400Regular',
													marginLeft: 12,
													marginRight: 12,
												}}
												numberOfLines={1}
											>
												{cart_price}
											</Text>
											<View
												style={{
													backgroundColor: COLORS.background,
													padding: 4,
													borderRadius: 20,
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												<AntDesign
													name='plus'
													size={19}
													style={{
														color: COLORS.gray,
														textAlign: 'center',
													}}
													onPress={() => setcart_price(cart_price + 1)}
												/>
											</View>
										</View>
									</View>
								</View>
								<View
									style={{
										flexDirection: 'column',
										justifyContent: 'space-between',
										marginVertical: 12,
										marginRight: 5,
									}}
								>
									<Entypo
										name='dots-three-vertical'
										size={19}
										style={{
											color: COLORS.gray,
											textAlign: 'center',
										}}
										onPress={() => setcart_price(cart_price + 1)}
									/>

									<Text
										style={{
											color: COLORS.text,
											fontSize: 16,
											fontFamily: 'Nunito_800ExtraBold',
											marginRight: 10,
											marginBottom: 5,
										}}
									>
										${item.price}
									</Text>
								</View>
							</View>
						)}
					/>
				</View>
			</View>
		</View>
	);
};

export default Cart;

const styles = StyleSheet.create({});
