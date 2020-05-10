import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { nav } from "../constants";

const BlankScreen = () => {
	const navigation = useNavigation();
	const route = useRoute();
	let { num } = route.params;

	const blank = "Blank";
	const empty = "Empty";

	const [titleSwitch, setTitleSwitch] = useState(false);

	useEffect(() => {
		navigation.setOptions({ title: titleSwitch ? empty : blank });
	}, [titleSwitch]);

	const switchTitle = () => setTitleSwitch(!titleSwitch);

	const navigateToDetailAgain = () =>
		navigation.push(nav.detail, { num: num + 1 });
	const goBack = () => navigation.goBack();
	const navigateToFirstScreen = () => navigation.popToTop();

	return (
		<View style={styles.container}>
			<Text>This is blank screen.</Text>
			<Text>{`Number: ${num}`}</Text>
			<Button title="Detail" onPress={navigateToDetailAgain} />
			<Button title="Go back" onPress={goBack} />
			<Button title="First Screen" onPress={navigateToFirstScreen} />
			<Button title="Switch title" onPress={switchTitle} />
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

export default BlankScreen;
