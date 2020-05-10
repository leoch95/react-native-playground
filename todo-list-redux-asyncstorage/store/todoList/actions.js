import { TotoListActionType } from "./types";

export const addItem = (item) => ({
	type: TotoListActionType.ADD_ITEM,
	item,
});

export const removeItem = (id) => ({
	type: TotoListActionType.REMOVE_ITEM,
	id,
});

export const toggleCompleted = (id, completed) => ({
	type: TotoListActionType.TOGGLE_COMPLETED,
	id,
	completed,
});

export const generateDummies = (size) => ({
	type: TotoListActionType.GENERATE_DUMMIES,
	size,
});
