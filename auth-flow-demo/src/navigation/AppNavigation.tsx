import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLoadingScreen from "../screens/AuthLoading";
import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../redux/reducers";
import { connect } from "react-redux";
import SplashScreen from "../screens/SplashScreen";
import { signIn, signOut, setLoading } from "../redux/reducers/generic";

const Stack = createStackNavigator();

interface AppNavigationProp {
	isLoading: boolean;
	signIn: (token: string) => void;
	signOut: () => void;
	setIsLoading: (isLoading:boolean) => void;
}

export type AppDrawerNavParamList = {};

const AppNavigation = ({ isLoading }: AppNavigationProp) => (
	<Stack.Navigator
		initialRouteName={nav.todolist}
		screenOptions={{ headerShown: false }}
	>
		{
			isLoading ? (<Stack.Screen name="Loading" component={SplashScreen} />) :

		}
		<Stack.Screen name={nav.todolist} component={AuthLoadingScreen} />
		<Stack.Screen name={nav.todolist} component={TodoListScreen} />
		<Stack.Screen name={nav.addTodoForm} component={AddNewTodoItemScreen} />
	</Stack.Navigator>
);

const mapStateToProps = ({ generic }: RootState) => ({
	isLoading: generic.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	signIn: (token: string) => dispatch(signIn(token)),
	signOut: () => dispatch(signOut()),
	setIsLoading: (isLoading:boolean) => dispatch(setLoading(isLoading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
