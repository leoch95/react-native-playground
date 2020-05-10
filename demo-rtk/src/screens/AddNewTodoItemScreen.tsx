import React from "react";
import {
	Button,
	Container,
	Content,
	Header,
	Left,
	Icon,
	Body,
	Title,
	Right,
	Footer,
} from "native-base";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TodoItem } from "../dto";
import { ScrollView } from "react-native";
import { NewTodoItemForm } from "../components/form";
import { connect } from "react-redux";
import { RootState } from "../redux/reducers";
import { addItem } from "../redux/reducers/todoList";
import { Dispatch } from "@reduxjs/toolkit";

type AddNewTodoItemScreenStackNavigationProp = StackNavigationProp<
	ParamListBase
>;

interface AddNewTodoItemScreenProp {
	addItem: (item: TodoItem) => void;
}

interface NewTodoItemForm {
	title: string;
	deadlineDateTime: string;
	location: string;
	description: string;
}

const AddNewTodoItemScreen = ({ addItem }: AddNewTodoItemScreenProp) => {
	const stackNavigation = useNavigation<
		AddNewTodoItemScreenStackNavigationProp
	>();

	const returnPreviousScreen = () => stackNavigation.goBack();

	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={returnPreviousScreen}>
						<Icon type="MaterialCommunityIcons" name="arrow-left" />
					</Button>
				</Left>
				<Body>
					<Title>New Todo Item</Title>
				</Body>
				<Right />
			</Header>
			<Content>
				<ScrollView bounces={false}>
					<NewTodoItemForm
						addItem={addItem}
						navigation={stackNavigation}
					/>
				</ScrollView>
			</Content>
			<Footer />
		</Container>
	);
};

const mapStateToProps = ({ todoList }: RootState) => ({
	sequence: todoList.sequence,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addItem: (item: TodoItem) => dispatch(addItem(item)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddNewTodoItemScreen);
