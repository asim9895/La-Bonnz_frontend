import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {} from 'redux-persist';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducers = combineReducers({
	user: userReducer,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const middleware = [thunk];

const store = createStore(
	rootReducers,
	composeWithDevTools(applyMiddleware(...middleware))
);
let persistor = persistStore(store);

export { store, persistor };
