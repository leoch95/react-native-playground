import TodoListItemDTO from "../dto/todoListItemDTO"

const Types = {
	ADD_TODO: "ADD_TODO",
	DELETE_TODO: "DELETE_TODO",
	TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
	GENERATE_DUMMY: "GENERATE_DUMMY",
};

export const Actions = {
	addTodo: (item) => {
		console.log("Add todo : ", item);
		return {
			type: Types.ADD_TODO,
			payload: item,
		};
	},
	deleteTodo: (index) => {
		console.log("Delete todo : ", index);
		return {
			type: Types.DELETE_TODO,
			payload: index,
		};
	},
	toggleCompleted: (index) => {
		console.log("Toggle complete : ", index);
		return {
			type: Types.TOGGLE_COMPLETED,
			payload: index,
		};
	},
	generateDummy: (size) => {
		console.log("Generate dummy : ", size);
		return {
			type: Types.GENERATE_DUMMY,
			payload: size,
		};
	},
};

const initialState = {
	todos: [],
};

const todoReducer = (previousState = initialState, action) => {
	let { type, payload } = action;
	let { todos } = previousState;

	switch (type) {
		case Types.ADD_TODO:
			return {
				...previousState,
				todos: [payload, ...todos],
			};
		case Types.DELETE_TODO:
			return {
				...previousState,
				todos: todos.filter((item, index) => index !== payload),
			};
		case Types.TOGGLE_COMPLETED:
			todos.forEach((item, index) => {
				if (index === payload) item.completed = !item.completed;
            });
			return {
				...previousState,
				todos,
			};
		case Types.GENERATE_DUMMY:
			return {
				...previousState,
				todos: Array(payload)
					.fill()
					.map((value, index) => index + 1)
					.map(
						(value, index) =>
							new TodoListItemDTO("Title " + value, Date.now())
					),
			};
	}
	return previousState;
};

export default todoReducer;
