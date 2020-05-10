import { CounterActionType } from "./types";

const initialState = {
	count: 0,
	unit: 1,
};

export const counter = (state = initialState, action) => {
	switch (action.type) {
		case CounterActionType.INCREMENT:
			return { ...state, count: state.count + state.unit };
		case CounterActionType.DECREMENT:
			return { ...state, count: state.count - state.unit };
		case CounterActionType.UPDATE_UNIT:
			return { ...state, unit: action.unit };
		case CounterActionType.RESET:
			return { ...state, ...initialState };
		default:
	}
	return state;
};
