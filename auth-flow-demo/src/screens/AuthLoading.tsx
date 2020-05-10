import React from "react";
import { StyleSheet } from "react-native";
import { Container, Body, View, Text } from "native-base";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface AuthLoadingScreenProp {
	logout: () => void;
}

type AuthLoadingScreenStackNavigationProp = StackNavigationProp<ParamListBase>;

const AuthLoadingScreen = ({ logout }: AuthLoadingScreenProp) => {
	const stackNav = useNavigation<AuthLoadingScreenStackNavigationProp>();

	return (
		<Container>
			<Body>
				<View style={styles.container}>
					<Text note>Loading authentication status ...</Text>
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

export default AuthLoadingScreen;
