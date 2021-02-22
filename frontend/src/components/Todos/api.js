import axios from "axios";
export const getTodosListing = (params) => axios.get(`/api/todos`, { params });
export const postTodoAdd = (data) => axios.post(`/api/todos/`, data);
export const putTodoUpdate = (data, id) => axios.put(`/api/todos/${id}/`, data);
export const deleteTodoDelete = (param) => axios.delete(`/api/todos/${param}`);
