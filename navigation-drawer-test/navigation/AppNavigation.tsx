import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { nav } from "../constants";
import { HomeScreen, DetailScreen, BlankScreen } from "../screens";

const Drawer = createDrawerNavigator();

const AppNavigation = () => (
	<NavigationContainer>
		<Drawer.Navigator initialRouteName={nav.home} backBehavior="initialRoute">
			<Drawer.Screen
				name={nav.home}
				component={HomeScreen}
				// options={{ title: "Hello world" }}
			/>
			<Drawer.Screen
				name={nav.detail}
				component={DetailScreen}
				// options={{ title: "No detail", gestureEnabled: true }}
			/>
			<Drawer.Screen
				name={nav.blank}
				component={BlankScreen}
				// options={{ gestureEnabled: true }}
			/>
		</Drawer.Navigator>
	</NavigationContainer>
);

export default AppNavigation;
