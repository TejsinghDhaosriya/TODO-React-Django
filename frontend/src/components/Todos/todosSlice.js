import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    todosLoading: false,
    todo: null,
    todoLoading: false,
    editTodo: null,
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setTodosLoading: (state, action) => {
      state.todosLoading = !!action.payload;
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
    setTodoLoading: (state, action) => {
      state.todoLoading = !!action.payload;
    },
    setEditTodo: (state, action) => {
      state.editTodo = action.payload;
    },
  },
});
export const {
  setTodo,
  setTodos,
  setTodoLoading,
  setTodosLoading,
  setEditTodo,
} = todosSlice.actions;

export const selectTodos = (state) => get(state, "todos.todos");
export const selectTodosLoading = (state) => get(state, "todos.todosLoading");
export const selectTodo = (state) => get(state, "todos.todo");
export const selectTodoLoading = (state) => get(state, "todos.todoLoading");
export const selectEditTodo = (state) => get(state, "todos.editTodo");

export default todosSlice.reducer;
