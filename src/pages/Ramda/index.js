import { useEffect, useState } from 'react';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Trigger from './Trigger';
import ModalForm from './ModalForm';
import { request } from 'umi';
import { map } from 'ramda';

export default () => {
  const [dataSource, setDataSource] = useState([]);
  const [action, setAction] = useState(0);
  const [modalVisit, setModalVisit] = useState(false);
  const [type, setType] = useState('add'); // ['add', 'edit']
  const [initialValues, setInitialValues] = useState({});
  const refresh = () => setAction((state) => state + 1);

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
    request('/api/todos').then(({ data }) => {
      setDataSource(data);
    });
  }, [action]);

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
