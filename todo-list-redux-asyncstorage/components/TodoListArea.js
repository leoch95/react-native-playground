import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem, Text } from "react-native-elements";

const iconSize = 20;
// const iconColor = "#ffffff";

export default TodoListArea = ({
	todos,
	removeTodoItem,
	toggleTodoItemCompleted,
	showTodoItemDetail,
}) => {
	return (
		<FlatList
			data={todos}
			keyExtractor={(item) => item.id.toString()}
			renderItem={(item) =>
				TodoListItem({
					item,
					removeTodoItem,
					toggleTodoItemCompleted,
					showTodoItemDetail,
				})
			}
		/>
	);
};

const TodoListItem = ({
	item,
	removeTodoItem,
	toggleTodoItemCompleted,
	showTodoItemDetail,
}) => {
	const [isChecked, setIsChecked] = useState(item.completed);

	const updateCompleted = () => {
		let completed = !isChecked;
		toggleTodoItemCompleted(item.id, completed);
		setIsChecked(completed);
	};

	const doShowTodoItemDetail = () => showTodoItemDetail(item);

	const doRemoveTodoItem = () => removeTodoItem(item.id);

	return (
		<ListItem
			checkBox={{
				checked: isChecked,
				onPress: updateCompleted,
				onIconPress: updateCompleted,
			}}
			title={
				<TodoListItemTitle
					title={item.title}
					showTodoItemDetail={doShowTodoItemDetail}
				/>
			}
			rightIcon={{
				type: "font-awesome",
				name: "remove",
				size: iconSize,
				// color: iconColor,
				onPress: doRemoveTodoItem,
			}}
		/>
	);
};

const TodoListItemTitle = ({ title, showTodoItemDetail }) => (
	<TouchableOpacity style={styles.itemTitle} onPress={showTodoItemDetail}>
		<Text style={styles.itemTitleText}>{title}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	center: {
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		// backgroundColor: "#dcdcdc",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	itemTitle: {},
	itemTitleText: {
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "900",
	},
});
