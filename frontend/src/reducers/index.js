import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";

import snackbarReducer from "./snackbar";
import todosReducer from '../components/Todos/todosSlice.js'
const createRootReducer = () =>
  combineReducers({
    // router: connectRouter(history),
    snackbar: snackbarReducer,
    todos: todosReducer,
  });

export default createRootReducer;
