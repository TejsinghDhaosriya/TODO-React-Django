import { combineReducers } from "redux";

import snackbarReducer from "./snackbar";
import todosReducer from '../components/Todos/todosSlice.js'
const createRootReducer = () =>
  combineReducers({
    snackbar: snackbarReducer,
    todos: todosReducer,
  });

export default createRootReducer;
