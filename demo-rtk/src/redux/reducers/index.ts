import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter";
import settings from "./settings";
import todoList from "./todoList";

const rootReducer = combineReducers({ counter, settings, todoList });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
