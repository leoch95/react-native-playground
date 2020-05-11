import React, { useMemo, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLoadingScreen from "../screens/AuthLoading";
import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../redux/reducers";
import { connect } from "react-redux";
import SplashScreen from "../screens/SplashScreen";
import {
	signIn,
	signOut,
	setLoading,
	restoreToken,
} from "../redux/reducers/generic";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import { AuthNavigation } from "./loginRequired";
import { AuthContext } from "../context";
import { Auth } from "../service";
import { AuthContextMethod } from "../context/AuthContext";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

interface AppNavigationProp {
	isLoading: boolean;
	userToken?: string | null;
	signIn: (token: string) => void;
	signOut: () => void;
	restoreToken: (token?: string | null) => void;
	setIsLoading: (isLoading: boolean) => void;
}

export type AppDrawerNavParamList = {};

const AppNavigation = ({
	isLoading,
	userToken,
	signIn,
	signOut,
	restoreToken,
}: AppNavigationProp) => {
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

	useEffect(() => {
		const bootstrapAsync = async () => {
			let token = await Auth.retrieveToken();
			restoreToken(token);
		};
		bootstrapAsync();
	}, []);

	const authContext = useMemo<AuthContextMethod>(
		() => ({
			signIn: async (data) => {
				// In a production app, we need to send some data (usually username, password) to server and get a token
				// We will also need to handle errors if sign in failed
				// After getting token, we need to persist the token using `AsyncStorage`
				// In the example, we'll use a dummy token
				let token = await Auth.createToken(data);
				signIn(token);
			},
			signOut: async () => {
				await Auth.clearToken();
				signOut();
			},
			signUp: async (data) => {
				// In a production app, we need to send user data to server and get a token
				// We will also need to handle errors if sign up failed
				// After getting token, we need to persist the token using `AsyncStorage`
				// In the example, we'll use a dummy token
				let token = await Auth.createToken(data);
				signIn(token);
			},
		}),
		[]
	);
	if (!ready) return <Stack.Screen name="Splash" component={SplashScreen} />;

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{isLoading ? (
						<Stack.Screen
							name="AuthLoading"
							component={AuthLoadingScreen}
						/>
					) : !userToken ? (
						<Stack.Screen name="Login" component={LoginScreen} />
					) : (
						<Stack.Screen name="App" component={AuthNavigation} />
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	);
};

const mapStateToProps = ({ generic }: RootState) => ({
	isLoading: generic.isLoading,
	userToken: generic.userToken,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	signIn: (token: string) => dispatch(signIn(token)),
	signOut: () => dispatch(signOut()),
	setIsLoading: (isLoading: boolean) => dispatch(setLoading(isLoading)),
	restoreToken: (token?: string | null) => dispatch(restoreToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
