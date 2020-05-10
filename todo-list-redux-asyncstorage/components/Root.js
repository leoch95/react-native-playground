import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import AppHeader from "./AppHeader";
import {
	addItem,
	removeItem,
	toggleCompleted,
	generateDummies,
} from "../store/todoList";
import AddItemForm from "./AddItemForm";
import TodoListArea from "./TodoListArea";
import TodoItemDetailModal from "./TodoItemDetailModal";

const Root = ({
	todos, //  []
	addTodoItem, // (item) => void
	removeTodoItem, // (id) => void
	toggleTodoCompleted, // (id, completed) => void
	generateDummies, // // (size) => void
}) => {
	const [showAddItemForm, setShowAddItemForm] = useState(false);
	const [showTodoItemDetail, setShowTodoItemDetail] = useState(false);
	const [item, setItem] = useState({});

	const displayAddItemForm = () => setShowAddItemForm(true);

	const dismissAddItemForm = () => setShowAddItemForm(false);

	const displayTodoItemDetail = (it) => {
		setItem(it);
		setShowTodoItemDetail(true);
	};

	const dismissTodoItemDetail = () => {
		setItem({});
		setShowTodoItemDetail(false);
	};

	return (
		<SafeAreaView style={styles.container}>
			<AppHeader
				showAddItemForm={displayAddItemForm}
				generateDummies={generateDummies}
			/>
			<AddItemForm
				show={showAddItemForm}
				addTodoItem={addTodoItem}
				dismiss={dismissAddItemForm}
			/>
			<TodoListArea
				todos={todos}
				removeTodoItem={removeTodoItem}
				toggleTodoItemCompleted={toggleTodoCompleted}
				showTodoItemDetail={displayTodoItemDetail}
			/>
			<TodoItemDetailModal
				show={showTodoItemDetail}
				item={item}
				dismiss={dismissTodoItemDetail}
			/>
		</SafeAreaView>
	);
};

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
});

const mapStateToProps = (state) => {
	console.log("mapStateToProps", state);
	return ({
		todos: state.todoList.todos,
	});
};

const mapDispatchToProps = (dispatch) => ({
	addTodoItem: (item) => dispatch(addItem(item)),
	removeTodoItem: (id) => dispatch(removeItem(id)),
	toggleTodoCompleted: (id, completed) =>
		dispatch(toggleCompleted(id, completed)),
	generateDummies: (size) => dispatch(generateDummies(size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
