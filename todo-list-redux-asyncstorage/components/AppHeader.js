import React from "react";
import { StyleSheet } from "react-native";
import { Header, Text, Button } from "react-native-elements";

const iconSize = 25;
const iconColor = "#ffffff";

export default AppHeader = ({ showAddItemForm, generateDummies }) => (
	<Header
		statusBarProps={{
			translucent: true,
			backgroundColor: "transparent",
		}}
		containerStyle={styles.container}
		leftContainerStyle={styles.headerIcon}
		leftComponent={GenerateDummiesButton({ generateDummies })}
		centerContainerStyle={styles.headerTitle}
		centerComponent={Title}
		rightContainerStyle={styles.headerIcon}
		rightContainerStyle={AddItemButton({ showAddItemForm })}
	/>
);

const GenerateDummiesButton = ({ generateDummies }) => (
	<Button
		icon={{
			type: "font-awesome",
			name: "th-list",
			size: iconSize,
			color: iconColor,
		}}
		iconContainerStyle={[styles.headerIcon, styles.center]}
		onPress={() => generateDummies(40)}
	/>
);

const Title = () => (
	<Text h4 style={styles.titleText}>
		To-Do List
	</Text>
);

const AddItemButton = ({ showAddItemForm }) => (
	<Button
		icon={{
			type: "font-awesome",
			name: "plus-square",
			size: iconSize,
			color: iconColor,
		}}
		iconContainerStyle={[styles.headerIcon, styles.center]}
		onPress={showAddItemForm}
	/>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#00bfff",
	},
	headerIcon: {
		flex: 1,
	},
	headerTitle: {
		flex: 3,
	},
	titleText: {
		color: "#000000",
	},
	center: {
		alignItems: "center",
		justifyContent: "center",
	},
});
