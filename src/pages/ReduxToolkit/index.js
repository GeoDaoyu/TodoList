import { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { map } from 'ramda';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Trigger from './Trigger';
import ModalForm from './ModalForm';
import store from './store';
import { query } from './todoListSlice';

const TodoListPage = ({ dataSource, dispatch }) => {
  useEffect(() => {
    dispatch(query());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <List>{map((item) => <ListItem key={item.id} info={item} />)(dataSource)}</List>
      <Trigger />
      <ModalForm />
    </Container>
  );
};

const ConnectedTodoListPage = connect(({ todoList }) => ({
  dataSource: todoList.todos,
}))(TodoListPage);

export default () => {
  return (
    <Provider store={store}>
      <ConnectedTodoListPage />
    </Provider>
  );
};
