import React from "react";
import { StyleSheet } from "react-native";
import { Container, Body, View, Text } from "native-base";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface SplashScreenProp {
	logout: () => void;
}

type SplashScreenStackNavigationProp = StackNavigationProp<ParamListBase>;

const SplashScreen = ({ logout }: SplashScreenProp) => {
	const stackNav = useNavigation<SplashScreenStackNavigationProp>();

	return (
		<Container>
			<Body>
				<View style={styles.container}>
					<Text note>Loading ...</Text>
				</View>
			</Body>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default SplashScreen;
