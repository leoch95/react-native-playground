import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "../../dto";

type TodoListState = {
	todos: TodoItem[];
	sequence: number;
};

// const dummy = new TodoItem("Dummy TODO item", new Date(Date.now()));

const initialState: TodoListState = {
	todos: [],
	sequence: 0,
};

const _addItem: CaseReducer<TodoListState, PayloadAction<TodoItem>> = (
	state,
	action
) => {
	let { todos, sequence } = state;
	let { payload } = action;

	if (payload.id <= 0) {
		sequence += 1;
		payload.id = sequence;
	}

	return {
		...state,
		todos: [...todos, payload],
		sequence,
	};
};

const _removeItem: CaseReducer<TodoListState, PayloadAction<number>> = (
	state,
	action
) => {
	let { todos } = state;
	let { payload } = action;

	state.todos = todos.filter((item) => item.id !== payload);
};

const _toggleItem: CaseReducer<TodoListState, PayloadAction<number>> = (
	state,
	action
) => {
	let { todos } = state;
	let { payload } = action;

	state.todos = todos.map((item) => {
		if (item.id === payload) item.isCompleted = !item.isCompleted;
		return item;
	});
};

const _removeAll: CaseReducer<TodoListState, PayloadAction> = (state) => {
	state.todos = [];
};

const slice = createSlice({
	name: "todoList",
	initialState,
	reducers: {
		addItem: _addItem,
		removeItem: _removeItem,
		toggleItem: _toggleItem,
		removeAll: _removeAll,
	},
});

const { actions, reducer } = slice;

export const { addItem, removeItem, toggleItem, removeAll } = actions;
export default reducer;
