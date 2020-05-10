import { CounterActionType } from "./types";

export const increment = () => ({
	type: CounterActionType.INCREMENT,
});

export const decrement = () => ({
	type: CounterActionType.DECREMENT,
});

export const updateUnit = (unit) => ({
	type: CounterActionType.UPDATE_UNIT,
	unit,
});

export const reset = () => ({
	type: CounterActionType.RESET,
});
