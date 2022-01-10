import { request } from 'umi';

export const queryTodos = () => request('/api/todos', { method: 'GET' });
export const addTodo = ({ data }) => request('/api/todo', { method: 'POST', data });
export const removeTodo = ({ id }) => request(`/api/todo/${id}`, { method: 'DELETE' });
export const updateTodo = ({ id, data }) => request(`/api/todo/${id}`, { method: 'PUT', data });
