import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

type LoadingState = {
	isLoading: boolean;
};

type LoginSessionState = {
	isSignOut: boolean;
	userToken?: string | null;
};

type GenericState = LoadingState & LoginSessionState;

const initialState: GenericState = {
	isLoading: true,
	isSignOut: false,
	userToken: null,
};

const _setLoading: CaseReducer<GenericState, PayloadAction<boolean>> = (
	state,
	action
) => ({ ...state, isLoading: action.payload });

const _restoreToken: CaseReducer<
	GenericState,
	PayloadAction<string | null | undefined>
> = (state, action) => ({ ...state, userToken: action.payload });

const _signIn: CaseReducer<
	GenericState,
	PayloadAction<string | null | undefined>
> = (state, action) => ({
	...state,
	isSignOut: false,
	userToken: action.payload,
});

const _signOut: CaseReducer<GenericState, PayloadAction> = (state, action) => ({
	...state,
	isSignOut: true,
	userToken: null,
});

const slice = createSlice({
	name: "generic",
	initialState,
	reducers: {
		setLoading: _setLoading,
		restoreToken: _restoreToken,
		signIn: _signIn,
		signOut: _signOut,
	},
});

const { actions, reducer } = slice;

export const { setLoading, restoreToken, signIn, signOut } = actions;
export default reducer;
