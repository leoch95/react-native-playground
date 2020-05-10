import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen, ProfileScreen } from "../../screens/loginRequired";

const Drawer = createDrawerNavigator();

export type AuthDrawerNavParamList = {
	Home: undefined;
	Profile: undefined;
};

export default () => (
	<Drawer.Navigator initialRouteName="Home" backBehavior="initialRoute">
		<Drawer.Screen name="Home" component={HomeScreen} />
		<Drawer.Screen name="Profile" component={ProfileScreen} />
	</Drawer.Navigator>
);
