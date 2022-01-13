import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { queryTodos } from './service';

const initialState = {
  todos: [],
};

export const query = createAsyncThunk('todoList/query', async () => await queryTodos());

const slice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {},
  extraReducers: {
    [query.fulfilled.type]: (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        todos: data,
      };
    },
  },
});

export default slice.reducer;
