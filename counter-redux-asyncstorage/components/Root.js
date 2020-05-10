import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Counter from "./Counter";
import AppHeader from "./AppHeader";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import UpdateUnit from "./UpdateUnit";
import ResetButton from "./ResetButton";
import { PersistGate } from "redux-persist/integration/react";

const Root = () => (
	<SafeAreaView style={styles.container}>
		<AppHeader />
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Counter />
				<UpdateUnit />
				<ResetButton />
			</PersistGate>
		</Provider>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
		flex: 1,
		flexDirection: "column",
		// flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Root;
