import { createStore, applyMiddleware, combineReducers } from "redux";
import { AsyncStorage } from "react-native";
import todoReducer from "./todoReducer";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import hardSet from "redux-persist/es/stateReconciler/hardSet";

/* Redux-persist */
const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	whitelist: ["todoReducer"],
	blacklist: [],
	stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);	// combineReducers for multiple reducers

const todoStore = createStore(persistedReducer, applyMiddleware(createLogger()));

const persistor = persistStore(todoStore);

export { persistor, todoStore };
