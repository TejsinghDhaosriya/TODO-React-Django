import axios from "axios";
// const baseURL  = "http://127.0.0.1:8000"
export const getTodosListing = (params) => axios.get(`/api/todos`, { params });

// export const getMapDetails = (param) => axios.get(`todos/${param}`);

export const postTodoAdd = (data) => axios.post(`/api/todos/`, data);

export const putTodoUpdate = (data, id) => axios.put(`/api/todos/${id}/`, data);

export const deleteTodoDelete = (param) => axios.delete(`/api/todos/${param}`);
// export const getTodosListing = (params) => axios.get(`/api/todos`, { params });

// export const getMapDetails = (param) => axios.get(`/api/todos/${param}`);

// export const postTodoAdd = (data) => axios.post(`${baseURL}/api/todos/`, data);

// export const putTodoUpdate = (data, id) => axios.put(`${baseURL}/api/todos/${id}/`, data);

// export const deleteTodoDelete = (param) => axios.delete(`${baseURL}/api/todos/${param}`);