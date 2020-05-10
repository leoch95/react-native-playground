import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { nav } from "../constants";
import { HomeScreen, DetailScreen, BlankScreen } from "../screens";

const Stack = createStackNavigator();

const AppNavigation = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName={nav.home}>
			<Stack.Screen
				name={nav.home}
				component={HomeScreen}
				options={{ title: "Hello world" }}
			/>
			<Stack.Screen
				name={nav.detail}
				component={DetailScreen}
				options={{ title: "No detail", gestureEnabled: true, gestureDirection: "horizontal" }}
			/>
			<Stack.Screen
				name={nav.blank}
				component={BlankScreen}
				options={{ gestureEnabled: true, gestureDirection: "vertical" }}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default AppNavigation;
