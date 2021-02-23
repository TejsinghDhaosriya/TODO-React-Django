import axios from "axios";
export const getTodosListing = (params) => axios.get(`https://tej-todo-backend.herokuapp.com/api/todos`, { params });
export const postTodoAdd = (data) => axios.post(`https://tej-todo-backend.herokuapp.com/api/todos/`, data);
export const putTodoUpdate = (data, id) => axios.put(`/api/todos/${id}/`, data);
export const deleteTodoDelete = (param) => axios.delete(`/api/todos/${param}`);
