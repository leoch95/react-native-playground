import React, { useState, useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Spinner, Root, View } from "native-base";

import { configureAppStore } from "./src/redux";
import { AppNavigation } from "./src/navigation";
import { StyleSheet, ActivityIndicator } from "react-native";

const App = () => {
	const { store, persistor } = configureAppStore();
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const loadFonts = async () => {
			await Font.loadAsync({
				Roboto: require("native-base/Fonts/Roboto.ttf"),
				Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
				...Ionicons.font,
			});
			setReady(true);
		};
		loadFonts();
	}, []);

	if (!ready) return <Spinner />;

	return (
		<ReduxProvider store={store}>
			<PersistGate loading={<Loading />} persistor={persistor}>
				<Root>
					<AppNavigation />
				</Root>
			</PersistGate>
		</ReduxProvider>
	);
};

const Loading = () => (
	<View style={styles.container}>
		<ActivityIndicator size="large" />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
