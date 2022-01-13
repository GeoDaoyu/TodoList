import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoListSlice from './todoListSlice';
import modalFormSlice from './modalFormSlice';
const rootReducer = combineReducers({
  todoList: todoListSlice,
  modalForm: modalFormSlice,
});

const store = configureStore({ reducer: rootReducer });
export default store;
