import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Trigger from './Trigger';
import ModalForm from './ModalForm';
import { connect } from 'umi';
import { map } from 'ramda';

const TodoListPage = ({ dataSource }) => {
  return (
    <Container>
      <List>{map((item) => <ListItem key={item.id} info={item} />)(dataSource)}</List>
      <Trigger />
      <ModalForm />
    </Container>
  );
};

export default connect(({ todoList }) => ({
  dataSource: todoList.todos,
}))(TodoListPage);
