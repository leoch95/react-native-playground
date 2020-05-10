import { combineReducers } from "@reduxjs/toolkit";
import generic from "./generic";

const rootReducer = combineReducers({ generic });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
