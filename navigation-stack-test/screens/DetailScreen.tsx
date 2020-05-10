import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { nav } from "../constants";

const DetailScreen = () => {
	const navigation = useNavigation();
	const route = useRoute();
	let { num } = route.params;

	useEffect(() => {
		if (num) console.log(`Received number: ${num}`);
	}, [num]);

	const navigateToDetailAgain = () =>
		navigation.push(nav.detail, { num: num + 1 });
	const goBack = () => navigation.goBack();
	const navigateToBlank = () => navigation.navigate(nav.blank, { num });

	return (
		<View style={styles.container}>
			<Text>This is detail screen.</Text>
			{num && <Text>{`Number: ${num}`}</Text>}
			<Button title="Detail again..." onPress={navigateToDetailAgain} />
			<Button title="Go back" onPress={goBack} />
			<Button title="Blank" onPress={navigateToBlank} />
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

export default DetailScreen;
