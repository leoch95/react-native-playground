import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
	Header,
	Text,
	Card,
	Input,
	CheckBox,
	Divider,
	Button,
} from "react-native-elements";
import TodoList from "./todoList";
import { Actions } from "../store/todoReducer";
import SearchInput from "./searchInput";
import { connect } from "react-redux";
import Moment from "moment";
import AddItemForm from "./addItemForm";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";

const Root = ({ todos, dispatch }) => {
	const [showModal, setShowModal] = useState(false);
	const [item, setItem] = useState({});
	const [showAddForm, setShowAddForm] = useState(false);

	const addTodoItem = (todo) => {
		console.log(todo);
		dispatch(Actions.addTodo(todo));
	};

	const removeTodoItem = (index) => {
		dispatch(Actions.deleteTodo(index));
	};

	const toggleCompleted = (index) => {
		dispatch(Actions.toggleCompleted(index));
	};

	const generateDummyItems = (size) => {
		console.log("generateDummyItems ", size);
		dispatch(Actions.generateDummy(size));
	};

	const showItemDetail = (item) => {
		setItem(item);
		setShowModal(true);
	};

	const HeaderLeft = () => {
		return (
			<Icon
				name="list"
				size={20}
				color="white"
				type="clear"
				onPress={() => generateDummyItems(20)}
			/>
		);
	};

	const Title = () => {
		return (
			<Text h4 style={styles.title}>
				{"To-do List"}
			</Text>
		);
	};

	const DetailModal = () => {
		return (
			<Modal visible={showModal} animationType="fade">
				<Card title={item.title}>
					<Input
						label="Deadline"
						value={
							item.deadline === null
								? "N/A"
								: Moment(item.deadline).format(
										"YYYY-MM-DD HH:mm:ss"
								  )
						}
						disabled
					/>
					<CheckBox title="Completed" checked={item.completed} />
					<Divider />
					<Button
						title="Close"
						type="outline"
						raised
						onPress={() => {
							setShowModal(false);
							setItem({});
						}}
					/>
				</Card>
			</Modal>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header
				statusBarProps={{
					translucent: true,
					backgroundColor: "transparent",
				}}
				containerStyle={styles.header}
				leftComponent={<HeaderLeft />}
				centerComponent={<Title />}
				rightComponent={
					<Icon
						name="plus"
						size={20}
						color="white"
						type="clear"
						onPress={() => setShowAddForm(true)}
					/>
				}
			/>
			<SearchInput submitEditing={addTodoItem} />
			<TodoList
				data={todos}
				displayTodoItemDetail={showItemDetail}
				toggleIsTodoItemCompleted={toggleCompleted}
				removeTodoItem={removeTodoItem}
			/>
			<DetailModal display={showModal} item={item} />
			<AddItemForm
				display={showAddForm}
				addItem={addTodoItem}
				closeForm={() => setShowAddForm(false)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
		flexDirection: "column",
		flexWrap: "wrap",
		// alignItems: "stretch",
		justifyContent: "center",
	},
	header: {},
	title: {
		color: "white",
	},
	modal: {
		height: "auto",
		// padding: 15
		// flex: 1,
		// backgroundColor: "#fff",
		// alignItems: "stretch",
		// justifyContent: "stretch",
	},
});

const mapStateToProps = (state) => ({
	todos: state.todos,
});

export default connect(mapStateToProps)(Root);
