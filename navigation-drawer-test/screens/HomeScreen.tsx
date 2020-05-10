import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { nav } from "../constants";

const HomeScreen = () => {
	const navigation = useNavigation();
	// const navigateToDetail = () => navigation.navigate(nav.detail, { num: 1 });
	const navigateToDetail = () => navigation.navigate(nav.detail);

	return (
		<View style={styles.container}>
			<Text>This is home screen.</Text>
			{/* <Button title="Detail" onPress={navigateToDetail} /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default HomeScreen;
