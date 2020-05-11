import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Container, Body, View, Text, Toast } from "native-base";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Header } from "../components/header";
import { LoginFrom } from "../forms";
import { AuthContext } from "../context";
import { LoginCredentials } from "../context/AuthContext";

interface LoginScreenProp {}

type LoginScreenStackNavigationProp = StackNavigationProp<ParamListBase>;

const LoginScreen = ({}: LoginScreenProp) => {
	const { signIn } = useContext(AuthContext);

	const stackNav = useNavigation<LoginScreenStackNavigationProp>();

	const doSignIn = (credentials: LoginCredentials) => {
		signIn(credentials).then(
			() => Toast.show({ text: "Signed in successfully!" }),
			() => Toast.show({ text: "Failed to sign in" })
		);
	};

	return (
		<Container>
			<Header title="Login" />
			<Body>
				<View style={styles.container}>
					<LoginFrom login={doSignIn} />
				</View>
			</Body>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "center",
	},
});

export default LoginScreen;
