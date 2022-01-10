import { queryTodos, addTodo, removeTodo, updateTodo } from './service';

export default {
  namespace: 'todoList',
  state: {
    todos: [],
    editTodo: {},
  },
  reducers: {
    setTodos(state, action) {
      return {
        ...state,
        todos: action.payload,
      };
    },
  },
  effects: {
    *query(_, { call, put }) {
      const { data } = yield call(queryTodos);
      yield put({ type: 'setTodos', payload: data });
    },
    *addTodo({ payload }, { call, put }) {
      yield call(addTodo, payload);
      yield put({ type: 'query' });
    },
    *updateTodo({ payload }, { call, put }) {
      yield call(updateTodo, payload);

      yield put({ type: 'query' });
      return true;
    },
    *removeTodo({ payload }, { call, put }) {
      yield call(removeTodo, payload);
      yield put({ type: 'query' });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/DvaJS') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};
