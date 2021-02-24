import axios from "axios";

const baseURL = "https://tej-todo-backend.herokuapp.com/"
export const getTodosListing = (params) => axios.get(`${baseURL}/api/todos`, { params });
export const postTodoAdd = (data) => axios.post(`${baseURL}/api/todos/`, data);
export const putTodoUpdate = (data, id) => axios.put(`${baseURL}/api/todos/${id}/`, data);
export const deleteTodoDelete = (param) => axios.delete(`${baseURL}/api/todos/${param}`);