import { TotoListActionType } from "./types";
import TodoListItemDTO from "../../dto/TodoListItemDTO";

const initialState = {
	todos: [],
	sequence: 1,
};

export const todoList = (state = initialState, action) => {
	let { todos, sequence } = state;
	switch (action.type) {
		case TotoListActionType.ADD_ITEM: {
			let newSequence = sequence + 1;
			let { item } = action;
			item.id = newSequence;
			return { ...state, todos: [...todos, item], sequence: newSequence };
		}
		case TotoListActionType.REMOVE_ITEM: {
			let { id } = action;
			return {
				...state,
				todos: todos.filter((item) => item.id !== id),
			};
		}
		case TotoListActionType.TOGGLE_COMPLETED: {
			let { id, completed } = action;
			return {
				...state,
				todos: todos.map((item) => {
					if (item.id === id) {
						item.completed = completed;
					}
					return item;
				}),
			};
		}
		case TotoListActionType.GENERATE_DUMMIES: {
			let newSequence = sequence + 1;
			let { size } = action;
			let dummies = Array(size)
				.fill()
				.map((item, index) => {
					let t = new TodoListItemDTO(
						newSequence,
						"Title of item " + newSequence,
						new Date(Date.now())
					);
					newSequence += 1;
					return t;
				});
			return {
				...state,
				todos: [...todos, ...dummies],
				sequence: newSequence,
			};
		}
		default:
	}
	return state;
};
