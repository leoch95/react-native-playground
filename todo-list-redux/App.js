import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { persistor, todoStore } from "./store/todoStore";
import Root from "./component/root";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
	return (
		<Provider store={todoStore}>
			<PersistGate loading={null} persistor={persistor}>
				<Root />
			</PersistGate>
		</Provider>
	);
}
