import { useState } from 'react';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Trigger from './Trigger';
import ModalForm from './ModalForm';
import { connect } from 'umi';
import { map } from 'ramda';

const TodoListPage = ({ dataSource }) => {
  const [modalVisit, setModalVisit] = useState(false);
  const [type, setType] = useState('add'); // ['add', 'edit']
  const [initialValues, setInitialValues] = useState({});
  const refresh = () => {};

  const onAdd = () => {
    setType('add');
    setInitialValues({});
    setModalVisit(true);
  };
  const onEdit = (values) => {
    setType('edit');
    setInitialValues(values);
    setModalVisit(true);
  };

  return (
    <Container>
      <List>
        {map((item) => <ListItem key={item.id} info={item} onEdit={onEdit} callback={refresh} />)(
          dataSource,
        )}
      </List>
      <Trigger onAdd={onAdd} />
      <ModalForm
        initialValues={initialValues}
        type={type}
        visible={modalVisit}
        setVisible={setModalVisit}
        callback={refresh}
      />
    </Container>
  );
};

export default connect(({ todoList }) => ({
  dataSource: todoList.todos,
}))(TodoListPage);
