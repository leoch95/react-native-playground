import { combineReducers, createStore, applyMiddleware } from "redux";
import { counter } from "./counter";
import { logger } from "redux-logger";
import { AsyncStorage } from "react-native";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import JSOG from "jsog";

const reducer = combineReducers({ counter });

const transformConfig = {
	whitelist: ["counter"],
	blacklist: [],
};

const transformCircular = createTransform(
	(inbound, key) => JSOG.encode(inbound),
	(outbound, key) => JSOG.decode(outbound),
	transformConfig
);

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	stateReconciler: hardSet,
	transforms: [transformCircular],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const configStore = (initialState) =>
	createStore(persistedReducer, initialState, applyMiddleware(logger));
const store = configStore();
const persistor = persistStore(store);
export { store, persistor };
