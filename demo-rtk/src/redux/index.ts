import { AsyncStorage } from "react-native";
import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import rootReducer, { RootState } from "./reducers";

const persistConfig: PersistConfig<RootState> = {
	key: "demo-rtk",
	storage: AsyncStorage,
	// stateReconciler: false,	// default : "autoMergeLevel1"
};

const middlewares = getDefaultMiddleware({
	serializableCheck: false,
});

if (process.env.NODE_ENV === "development") {
	let logger = require("redux-logger").default;
	middlewares.push(logger);
}

export const configureAppStore = (preloadedState?: RootState) => {
	const persistedReducer = persistReducer(persistConfig, rootReducer);
	const store = configureStore({
		reducer: persistedReducer,
		middleware: middlewares,
		preloadedState,
	});
	const persistor = persistStore(store);
	return { store, persistor };
};
