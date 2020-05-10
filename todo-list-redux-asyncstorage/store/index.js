import { combineReducers, createStore, applyMiddleware } from "redux";
import { todoList } from "./todoList";
import { logger } from "redux-logger";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import { AsyncStorage } from "react-native";
import JSOG from "jsog";

const reducer = combineReducers({ todoList });

const transformConfig = {
	whitelist: ["todoList"],
	blacklist: [],
};

const transformCircular = createTransform(
	(inbound, key) => {
		console.log("inbound", inbound);
		return JSOG.encode(inbound);
	},
	(outbound, key) => {
		console.log("outbound", outbound);
		return JSOG.decode(outbound);
	},
	transformConfig
);

const persistConfig = {
	key: "todo-list",
	storage: AsyncStorage,
	stateReconciler: hardSet,
	whitelist: ["todoList"],
	blacklist: [],
	// transforms: [transformCircular],
    // serialize: JSOG.stringify,
    // timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const configStore = (initialState) =>
// 	createStore(persistedReducer, initialState, applyMiddleware(logger));
// const store = configStore();

// export default () => {
// 	let store = createStore(persistedReducer, applyMiddleware(logger));
// 	let persistor = persistStore(store);
// 	return { store, persistor };
// };

const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store);
export { store, persistor };
