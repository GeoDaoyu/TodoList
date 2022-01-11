import { queryTodos, addTodo, removeTodo, updateTodo } from './service';

export default {
  namespace: 'todoList',
  state: {
    todos: [],
    modalVisit: false,
    modalType: 'add', // ['add', 'edit']
    currentTodo: {},
  },
  reducers: {
    setTodos(state, action) {
      return {
        ...state,
        todos: action.payload,
      };
    },
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
