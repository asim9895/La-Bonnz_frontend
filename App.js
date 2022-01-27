import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	Nunito_400Regular,
	Nunito_800ExtraBold,
	Nunito_600SemiBold,
	useFonts,
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { ToastProvider } from 'react-native-toast-notifications';
import Routes from './routes/Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

const App = () => {
	let [fontsLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_800ExtraBold,
		Nunito_600SemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Provider store={store}>
				{/* <PersistGate loading={null} persistor={persistor}> */}
				<ToastProvider>
					<StatusBar style='light' />
					<Routes />
				</ToastProvider>
				{/* </PersistGate> */}
			</Provider>
		);
	}
};

export default App;
