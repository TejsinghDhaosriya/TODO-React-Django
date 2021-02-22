// ACTION TYPES
export const SAGA_ADD_TODO = "todos/SAGA_ADD_TODO";
export const SAGA_FETCH_TODOS = "todos/SAGA_FETCH_TODOS";
export const SAGA_FETCH_TODO = "todos/SAGA_FETCH_TODO";
export const SAGA_TODO_UPDATE = "todos/SAGA_TODO_UPDATE";
export const SAGA_TODO_DELETE = "todos/SAGA_TODO_DELETE";
export const SAGA_GET_TODO_OPTIONS = "todos/SAGA_GET_TODO_OPTIONS";

// ACTION CREATORS
export const todoAdd = (data) => ({
  type: SAGA_ADD_TODO,
  data,
});

export const todosListing = (data) => ({
  type: SAGA_FETCH_TODOS,
  data,
});

export const todoDetails = (data) => ({
  type: SAGA_FETCH_TODO,
  data
});

export const todoUpdate = (data) => ({
  type: SAGA_TODO_UPDATE,
  data
});

export const todoDelete = (data) => ({
  type: SAGA_TODO_DELETE,
  data,
});

export const getMapOptions = (data) => ({
  type: SAGA_GET_TODO_OPTIONS,
  data,
});
