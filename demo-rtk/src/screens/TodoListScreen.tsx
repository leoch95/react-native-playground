import React from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	Button,
	Left,
	Right,
	Body,
	Icon,
	Text,
	View,
} from "native-base";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StyleSheet, FlatList } from "react-native";
import { RootState } from "../redux/reducers";
import {
	addItem,
	removeItem,
	toggleItem,
	removeAll,
} from "../redux/reducers/todoList";
import { TodoItem } from "../dto";
import { TodoListItem } from "../components";
import { nav } from "../constants";

type TodoListScreenDrawerNavigationProp = DrawerNavigationProp<ParamListBase>;

type TodoListScreenStackNavigationProp = StackNavigationProp<ParamListBase>;

interface TodoListScreenProp {
	todos: TodoItem[];
	addItem: (item: TodoItem) => void;
	removeItem: (id: number) => void;
	toggleItem: (id: number) => void;
	removeAll: () => void;
	nextSequenceValue: () => void;
}

const TodoListScreen = ({
	todos,
	removeItem,
	toggleItem,
}: TodoListScreenProp) => {
	const drawerNavigation = useNavigation<
		TodoListScreenDrawerNavigationProp
	>();

	const stackNavigation = useNavigation<TodoListScreenStackNavigationProp>();

	const toggleDrawer = drawerNavigation.toggleDrawer;

	const showNewItemForm = () => stackNavigation.navigate(nav.addTodoForm);

	const listItemKeyExtractor = (item: TodoItem) => item.id.toString();

	const renderListItem = (item: TodoItem) => (
		<TodoListItem
			item={item}
			removeItem={removeItem}
			toggleItem={toggleItem}
		/>
	);

	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={toggleDrawer}>
						<Icon type="MaterialCommunityIcons" name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>Todo List</Title>
				</Body>
				<Right>
					<Button transparent onPress={showNewItemForm}>
						<Icon
							type="MaterialCommunityIcons"
							name="note-plus"
							color="#ffffff"
						/>
					</Button>
				</Right>
			</Header>
			<Content>
				<FlatList
					data={todos}
					keyExtractor={listItemKeyExtractor}
					renderItem={({ item }) => renderListItem(item)}
					initialNumToRender={15}
					ListEmptyComponent={<ListEmptyItem />}
				/>
			</Content>
			<Footer />
		</Container>
	);
};

const ListEmptyItem = () => (
	<View padder style={styles.emptyItemContainer}>
		<Text note>Congratulations! Nothing left to do!</Text>
	</View>
);

const styles = StyleSheet.create({
	right: {
		flex: 1,
		flexDirection: "row-reverse",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	emptyItemContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

const mapStateToProps = ({ todoList }: RootState) => ({
	todos: todoList.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addItem: (item: TodoItem) => dispatch(addItem(item)),
	removeItem: (id: number) => dispatch(removeItem(id)),
	toggleItem: (id: number) => dispatch(toggleItem(id)),
	removeAll: () => dispatch(removeAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
