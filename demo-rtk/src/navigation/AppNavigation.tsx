import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { nav } from "../constants";
import { CounterScreen, SettingsScreen, TodoListScreen } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import AddNewTodoItemScreen from "../screens/AddNewTodoItemScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const TodoListStack = () => (
	<Stack.Navigator
		initialRouteName={nav.todolist}
		screenOptions={{ headerShown: false }}
	>
		<Stack.Screen name={nav.todolist} component={TodoListScreen} />
		<Stack.Screen name={nav.addTodoForm} component={AddNewTodoItemScreen} />
	</Stack.Navigator>
);

const AppNavigation = () => (
	<NavigationContainer>
		<Drawer.Navigator
			initialRouteName={nav.counter}
			backBehavior="initialRoute"
		>
			<Drawer.Screen name={nav.counter} component={CounterScreen} />
			<Drawer.Screen name={nav.todolist} component={TodoListStack} />
			<Drawer.Screen name={nav.settings} component={SettingsScreen} />
		</Drawer.Navigator>
	</NavigationContainer>
);

export default AppNavigation;
