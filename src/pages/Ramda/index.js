import { useEffect, useState } from 'react';
import { request } from 'umi';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Trigger from './Trigger';
import ModalForm from './ModalForm';
import { map } from 'ramda';
import { message } from 'antd';

export default () => {
  const [dataSource, setDataSource] = useState([]);
  const [action, setAction] = useState(1);
  const [modalVisit, setModalVisit] = useState(false);
  const [type, setType] = useState('add'); // ['add', 'edit']
  const [initialValues, setInitialValues] = useState({});
  const refresh = () => setAction((state) => state + 1);
  const onDelete = async ({ id }) => {
    await request('/api/todoList', { method: 'DELETE', data: { id } });
    message.success('已完成');
    refresh();
  };
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

  useEffect(() => {
    if (action) {
      request('/api/todoList').then(({ data }) => {
        setDataSource(data);
      });
    }
  }, [action]);

  return (
    <Container>
      <List>
        {map((item) => <ListItem key={item.id} info={item} onDelete={onDelete} onEdit={onEdit} />)(
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
