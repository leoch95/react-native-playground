import React from "react";
import { StyleSheet } from "react-native";
import { Header, Text } from "react-native-elements";

const AppHeader = () => (
	<Header
		statusBarProps={{
			translucent: true,
			backgroundColor: "transparent",
		}}
		containerStyle={styles.container}
		// leftContainerStyle={null}
		// leftComponent={<View />}
		centerContainerStyle={null}
		centerComponent={
			<Text h4 style={styles.titleText}>
				Counter
			</Text>
		}
	/>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#00bfff",
	},
	titleText: {
		color: "#000000",
	},
});

export default AppHeader;
