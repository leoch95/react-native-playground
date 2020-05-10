import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

type SettingsState = {
	counterStep: number;
};

const initialState: SettingsState = { counterStep: 1 };

const _updateCounterStep: CaseReducer<SettingsState, PayloadAction<number>> = (
	state,
	action
) => ({
	...state,
	counterStep: action.payload,
});

const _restoreDefaultSettings: CaseReducer<SettingsState, PayloadAction> = (
	state,
	action
) => initialState;

const slice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		updateCounterStep: _updateCounterStep,
		restoreDefaultSettings: _restoreDefaultSettings,
	},
});

const { actions, reducer } = slice;

export const { updateCounterStep, restoreDefaultSettings } = actions;
export default reducer;
