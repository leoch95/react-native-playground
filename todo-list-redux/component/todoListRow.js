import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ListItem, CheckBox, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default TodoListRow = ({
	index,
	todoItem,
	onTitlePressed,
	onCheckboxPressed,
	onCrossIconPressed,
}) => {
	const [checked, setChecked] = useState(todoItem.completed);

	return (
		<ListItem
			topDivider
			leftElement={
				<ToggleItemCompletedCheckbox
					isChecked={checked}
					doOnPressed={() => {
						setChecked(!checked);
						onCheckboxPressed(index);
					}}
				/>
			}
			title={
				<TodoItemTitle
					title={todoItem.title}
					doOnPressed={() => onTitlePressed(todoItem)}
				/>
			}
			rightElement={
				<RemoveItemIcon doOnPressed={() => onCrossIconPressed(index)} />
			}
			bottomDivider
		/>
	);
};

const TodoItemTitle = ({ title, doOnPressed }) => {
	return (
		<TouchableOpacity onPress={doOnPressed}>
			<Text>{title}</Text>
		</TouchableOpacity>
	);
};

const ToggleItemCompletedCheckbox = ({ isChecked, doOnPressed }) => {
	return <CheckBox checked={isChecked} onPress={doOnPressed} />;
};

const RemoveItemIcon = ({ doOnPressed }) => {
	return (
		<TouchableOpacity onPress={doOnPressed}>
			<Icon name="times" size={20} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	row: {
		height: "auto",
		// padding: 15
		// flex: 1,
		// backgroundColor: "#fff",
		// alignItems: "stretch",
		// justifyContent: "stretch",
	},
});
