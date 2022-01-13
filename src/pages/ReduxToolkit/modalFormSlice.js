import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalVisit: false,
  modalType: 'add', // ['add', 'edit']
  currentTodo: {},
};

const slice = createSlice({
  name: 'modalForm',
  initialState,
  reducers: {
    setModalVisit(state, action) {
      return {
        ...state,
        modalVisit: action.payload,
      };
    },
    onAdd(state) {
      return {
        ...state,
        modalVisit: true,
        modalType: 'add',
        currentTodo: {},
      };
    },
    onEdit(state, action) {
      return {
        ...state,
        modalVisit: true,
        modalType: 'edit',
        currentTodo: action.payload,
      };
    },
  },
});

export const { setModalVisit, onAdd, onEdit } = slice.actions;
export default slice.reducer;
