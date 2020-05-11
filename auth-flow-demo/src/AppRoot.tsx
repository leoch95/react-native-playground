import React from "react";
import { StyleSheet } from "react-native";
import { Root } from "native-base";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { configureAppStore } from "./redux";
import { AppNavigation } from "./navigation";

let { store, persistor } = configureAppStore();

const AppRoot = () => (
	<Root>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppNavigation />
			</PersistGate>
		</Provider>
	</Root>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default AppRoot;
