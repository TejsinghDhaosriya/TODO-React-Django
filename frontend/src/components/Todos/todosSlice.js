import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    todosLoading: true,
    todo: {},
    todoLoading: false,
    editTodo: null,
    formDrawerOpen: false,
  },
  reducers: {
    setTodos: (state, action) => {      
      state.todos = action.payload;
    },
    setTodosLoading: (state, action) => {
      state.todosLoading = !!action.payload;
    },
    setTodo: (state, action) => {
      const data = (state.todos || {}).filter((r) => r?.id === action.payload);
      state.todo=data[0]
    },
    setTodoLoading: (state, action) => {
      state.todoLoading = !!action.payload;
    },
    
    setFormDrawerOpen: (state, action) => {
      state.formDrawerOpen = !!action.payload;
    },
  },
});
export const {
  setTodo,
  setTodos,
  setTodoLoading,
  setTodosLoading,
  setEditTodo,
  setFormDrawerOpen,
} = todosSlice.actions;

export const selectTodos = (state) => get(state, "todos.todos");
export const selectTodosLoading = (state) => get(state, "todos.todosLoading");
export const selectTodo = (state) => get(state, "todos.todo");
export const selectTodoLoading = (state) => get(state, "todos.todoLoading");
export const selectFormDrawerOpen = (state) =>
  get(state, "todos.formDrawerOpen")
export default todosSlice.reducer;
