import React, { useMemo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLoadingScreen from "../screens/AuthLoading";
import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../redux/reducers";
import { connect } from "react-redux";
import SplashScreen from "../screens/SplashScreen";
import { signIn, signOut, setLoading } from "../redux/reducers/generic";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import { AuthNavigation } from "./loginRequired";
import { AuthContext } from "../context";
import { Auth } from "../service";

const Stack = createStackNavigator();

interface AppNavigationProp {
	isLoading: boolean;
	userToken?: string | null;
	signIn: (token: string) => void;
	signOut: () => void;
	setIsLoading: (isLoading: boolean) => void;
}

export type AppDrawerNavParamList = {};

const AppNavigation = ({
	isLoading,
	userToken,
	signIn,
	signOut,
	setIsLoading,
}: AppNavigationProp) => {
	const authContext = useMemo(() => {{
		signIn: async data => {
		  // In a production app, we need to send some data (usually username, password) to server and get a token
		  // We will also need to handle errors if sign in failed
		  // After getting token, we need to persist the token using `AsyncStorage`
		  // In the example, we'll use a dummy token
		let token = await Auth.retrieveToken
		  dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
		},
		signOut: () => dispatch({ type: 'SIGN_OUT' }),
		signUp: async data => {
		  // In a production app, we need to send user data to server and get a token
		  // We will also need to handle errors if sign up failed
		  // After getting token, we need to persist the token using `AsyncStorage`
		  // In the example, we'll use a dummy token
  
		  dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
		},
	  }}, []);
	return (
		<AuthContext.Provider>
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{isLoading ? (
					<Stack.Screen name="Loading" component={SplashScreen} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
