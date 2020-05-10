import React from "react";
import {
	// StyleSheet,
	// Text,
	// View,
	// TouchableOpacity,
	FlatList,
} from "react-native";
import { ListItem } from "react-native-elements";
import TodoListRow from "./todoListRow";

export default TodoList = ({
	data,
	displayTodoItemDetail,
	toggleIsTodoItemCompleted,
	removeTodoItem,
}) => {
	const EmptyItem = () => {
		return (
			<ListItem
				containerStyle={{ backgroundColor: "lightyellow" }}
				topDivider
				leftContentContainerStyle={{ backgroundColor: "whitesmoke" }}
				leftAvatar={{ rounded: true, title: "A", size: "medium" }}
				titleStyle={{ backgroundColor: "whitesmoke", fontSize: 22 }}
				title="Title"
				subtitleStyle={{ backgroundColor: "silver" }}
				subtitle="subtitle"
				rightContentContainerStyle={{ backgroundColor: "whitesmoke" }}
				rightTitle="rt"
			/>
		);
	};

	return (
		<FlatList
			data={data}
			keyExtractor={(item, index) => index.toString()}
			renderItem={({ item, index }) => (
				<TodoListRow
					index={index}
					todoItem={item}
					onTitlePressed={displayTodoItemDetail}
					onCheckboxPressed={toggleIsTodoItemCompleted}
					onCrossIconPressed={removeTodoItem}
				/>
			)}
			ListEmptyComponent={<EmptyItem />}
		/>
	);
};
