import axios from "axios";
const baseURL = "http://127.0.0.1:3000/"
export const getTodosListing = (params) => axios.get(`${baseURL}/api/todos`, { params });
export const postTodoAdd = (data) => axios.post(`${baseURL}/api/todos/`, data);
export const putTodoUpdate = (data, id) => axios.put(`${baseURL}/api/todos/${id}/`, data);
export const deleteTodoDelete = (param) => axios.delete(`${baseURL}/api/todos/${param}`);


// import axios from "axios";
// axios.defaults.headers.common['Access-Control-Allow-Origin']='*'
// console.log(axios.defaults.headers.common,'axios')
// export const getTodosListing = (params) => axios.get(`https://tej-todo-backend.herokuapp.com/api/todos`, { params });
// export const postTodoAdd = (data) => axios.post(`https://tej-todo-backend.herokuapp.com/api/todos/`, data);
// export const putTodoUpdate = (data, id) => axios.put(`https://tej-todo-backend.herokuapp.com/api/todos/${id}/`, data);
// export const deleteTodoDelete = (param) => axios.delete(`https://tej-todo-backend.herokuapp.com/api/todos/${param}`);
