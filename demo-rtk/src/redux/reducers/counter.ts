import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

type CounterState = number;

const initialState: CounterState = 0;

const _increment: CaseReducer<CounterState, PayloadAction<number>> = (
	state,
	action
) => state + action.payload;

const _decrement: CaseReducer<CounterState, PayloadAction<number>> = (
	state,
	action
) => state - action.payload;

const _reset: CaseReducer<CounterState, PayloadAction> = (state, action) =>
	initialState;

const slice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: _increment,
		decrement: _decrement,
		reset: _reset,
	},
});

const { actions, reducer } = slice;

export const { increment, decrement, reset } = actions;
export default reducer;
